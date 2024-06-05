from flask import Flask, request, jsonify, render_template
import os
import io
import json
from google.cloud.exceptions import NotFound
from google.cloud import storage
import pandas as pd
import numpy as np

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = 'google-credentials.json'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup')
def signup():
    return render_template('participant-sign-up-form.html')

@app.route('/protocol')
def protocol():
    return render_template('protocol-form.html')

def download_excel_to_df(bucket_name, blob_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    excel_buffer = io.BytesIO()
    
    try:
        blob.download_to_file(excel_buffer)
        excel_buffer.seek(0)  # Rewind the buffer after writing
        df = pd.read_excel(excel_buffer)
    except NotFound:
        # If the file doesn't exist, initialize an empty DataFrame
        df = pd.DataFrame(columns=['Participant ID', 'First Name', 'Middle Name', 'Last Name', 'Affiliation', 'E-mail'])
    
    return df


def handle_participant_form(data):
    bucket_name = os.getenv('GCP_STORAGE_BUCKET')
    blob_name = "participant_data.xlsx"  # Ensure this matches your blob name format

    # Attempt to download the existing Excel file to DataFrame
    df = download_excel_to_df(bucket_name, blob_name)
    
    # Generate a unique Participant ID
    participant_id = np.random.randint(100000, 999999)
    while participant_id in df['Participant ID'].values:
        participant_id = np.random.randint(100000, 999999)

    # Prepare new row for DataFrame
    new_row = pd.DataFrame({
        'Participant ID': [participant_id],
        'First Name': [data['firstName']],
        'Middle Name': [data['middleName']],
        'Last Name': [data['lastName']],
        'Affiliation': [data['university']],
        'E-mail': [data['email']]
    })

    # Append new data
    df = pd.concat([df, new_row], ignore_index=True)

    # Save updated DataFrame back to GCS
    excel_buffer = io.BytesIO()
    df.to_excel(excel_buffer, index=False, engine='openpyxl')
    excel_buffer.seek(0)  # Rewind the buffer to the beginning
    
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    blob.upload_from_file(excel_buffer, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

    return {"message": "Data received and saved to GCS", "Participant ID": participant_id}

@app.route('/submit-participant', methods=['POST'])
def submit_participant():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({'error': 'No data received'}), 400
        
        response = handle_participant_form(data)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


def download_json_from_gcs(bucket_name, blob_name):
    """Download a JSON file from GCS and parse it into a dictionary."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)

    try:
        json_bytes = blob.download_as_bytes()
        json_string = json_bytes.decode('utf-8')
        return json.loads(json_string)
    except NotFound:
        print(f"The file {blob_name} does not exist in the bucket {bucket_name}.")
        return {}
    except json.JSONDecodeError:
        print("Error decoding JSON from the file.")
        return {}
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return {}

def upload_json_to_gcs(data, bucket_name, blob_name):
    """Upload a dictionary as a JSON file to GCS."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    
    json_data = json.dumps(data, indent=4)
    blob.upload_from_string(json_data, content_type='application/json')

    print(f"Data successfully uploaded to {blob_name} in {bucket_name}.")

def handle_protocol_form(data):
    bucket_name = os.getenv('GCP_STORAGE_BUCKET')
    blob_name = "protocol_database.json"

    protocols_data = download_json_from_gcs(bucket_name, blob_name)
    next_key = "entry_" + str(len(protocols_data) + 1) if protocols_data else "entry_1"
    protocols_data[next_key] = data
    upload_json_to_gcs(protocols_data, bucket_name, blob_name)

    return {"message": "Data processed and saved to JSON under the key " + next_key}

@app.route('/submit-protocol', methods=['POST'])
def submit_protocol():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({'error': 'No data received'}), 400
        
        response = handle_protocol_form(data)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    app.run(debug=True)
