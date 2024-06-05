document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('participant-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = {
            firstName: document.getElementById('first-name').value,
            middleName: document.getElementById('middle-name').value,
            lastName: document.getElementById('last-name').value,
            university: document.getElementById('univ').value,
            email: document.getElementById('e-mail').value
        };

        // Send the formData as a JSON to the server
        fetch(' https://protocol-database-2fd7e3539c0b.herokuapp.com/submit-participant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: 'Success!',
                text: 'Thank you for signing up!',
                icon: 'success',
                confirmButtonText: 'Close'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('participant-form').reset(); // Clear the form
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong with your submission.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        });
    });
});
