
function initializeMDCTextFields() {
  const textFields = document.querySelectorAll('.mdc-text-field');
  textFields.forEach((textField) => {
      mdc.textField.MDCTextField.attachTo(textField);
  });
}
document.addEventListener('DOMContentLoaded', function () {
    initializeMDCTextFields(); // Initialize text fields on page load

    // Event delegation for adding media fields
    document.body.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('addMediaButton')) {
            event.preventDefault(); // Prevent the default form submission behavior

            const newFieldSet = createNewFieldSet_addmedia();
            // Find the parent node for the addButton to correctly use insertBefore
            const parentOfAddButton = target.parentNode;
            parentOfAddButton.insertBefore(newFieldSet, target);

            initializeMDCTextFields(); // Re-initialize MDC components for the new fields

            // Potentially update the visibility of delete buttons
            const allFieldSets = target.closest('.basal-media-container').querySelectorAll('.field-set');
            const deleteButton = target.closest('.basal-media-container').querySelector('.deleteMediaButton');
            if (allFieldSets.length > 0) {
                deleteButton.style.display = 'inline-block';
            }
        } else if (target.classList.contains('deleteMediaButton')) {
            event.preventDefault();

            const container = target.closest('.basal-media-container');
            const allFieldSets = container.querySelectorAll('.field-set');
            if (allFieldSets.length > 0) {
                allFieldSets[allFieldSets.length - 1].remove();

                // Check if we need to hide the delete button
                if (container.querySelectorAll('.field-set').length === 0) {
                    target.style.display = 'none';
                }
            }
        }
    });
});

     
function createNewFieldSet_addmedia() {
    const newFieldSet = document.createElement('div');
    newFieldSet.classList.add('field-set');
    newFieldSet.innerHTML = `
            
            <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell--span-12">
                <div class="numbering-and-field">
                    <div class="fields-container">
                        <div class="field">
                            <label class="mdc-text-field mdc-text-field--filled">
                                <span class="mdc-text-field__ripple"></span>
                                <input class="mdc-text-field__input" type="text" placeholder="Media Name">
                                <span class="mdc-floating-label" id="name-floating-label">Media Name</span>
                                <span class="mdc-line-ripple"></span>
                            </label>
                        </div>
                        <div class="field">
                            <label class="mdc-text-field mdc-text-field--filled">
                                <span class="mdc-text-field__ripple"></span>
                                <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                                <span class="mdc-floating-label" id="name-floating-label">Vendor</span>
                                <span class="mdc-line-ripple"></span>
                            </label>
                        </div>
                        <div class="field">
                            <label class="mdc-text-field mdc-text-field--filled">
                                <span class="mdc-text-field__ripple"></span>
                                <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                                <span class="mdc-floating-label" id="name-floating-label">Catalog Number</span>
                                <span class="mdc-line-ripple"></span>
                            </label>
                        </div>
                        <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                        <span class="mdc-text-field__ripple"></span>
                        <select class="mdc-text-field__input">
                          <option value="100">100%</option>
                          <option value="50">50%</option>
                          <option value="33">33%</option>
                        </select>
                        <span class="mdc-floating-label">Mixture Ratio</span>
                        <span class="mdc-line-ripple"></span>
                      </label>
                        </div>
                    </div>
                </div>
            </div>
        </div> `;

        return newFieldSet;
    }

document.addEventListener('DOMContentLoaded', function () {
        initializeMDCTextFields(); // Initialize text fields on page load
    
        // Event delegation for adding media fields
        document.body.addEventListener('click', function (event) {
            const target = event.target;
    
            if (target.classList.contains('addSerumSupplementButton')) {
                event.preventDefault(); // Prevent the default form submission behavior
    
                const newFieldSet = createNewFieldSet_addserum();
                // Find the parent node for the addButton to correctly use insertBefore
                const parentOfAddButton = target.parentNode;
                parentOfAddButton.insertBefore(newFieldSet, target);
    
                initializeMDCTextFields(); // Re-initialize MDC components for the new fields
    
                // Potentially update the visibility of delete buttons
                const allFieldSets = target.closest('.serum-supplements-container').querySelectorAll('.field-set');
                const deleteButton = target.closest('.serum-supplements-container').querySelector('.deleteSerumButton');
                if (allFieldSets.length > 0) {
                    deleteButton.style.display = 'inline-block';
                }
            } else if (target.classList.contains('deleteSerumButton')) {
                event.preventDefault();
    
                const container = target.closest('.serum-supplements-container');
                const allFieldSets = container.querySelectorAll('.field-set');
                if (allFieldSets.length > 0) {
                    allFieldSets[allFieldSets.length - 1].remove();
    
                    // Check if we need to hide the delete button
                    if (container.querySelectorAll('.field-set').length === 0) {
                        target.style.display = 'none';
                    }
                }
            }
        });
    });
     
function createNewFieldSet_addserum() {
    const newFieldSet = document.createElement('div');
    newFieldSet.classList.add('field-set');
    newFieldSet.innerHTML = `
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell--span-12">
            <div class="numbering-and-field">
                <div class="fields-container">
                    <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled">
                            <span class="mdc-text-field__ripple"></span>
                            <input class="mdc-text-field__input" type="text" placeholder="Name">
                            <span class="mdc-floating-label">Name</span>
                            <span class="mdc-line-ripple"></span>
                        </label>
                    </div>
                    <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled">
                            <span class="mdc-text-field__ripple"></span>
                            <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                            <span class="mdc-floating-label">Vendor</span>
                            <span class="mdc-line-ripple"></span>
                        </label>
                    </div>
                    <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled">
                            <span class="mdc-text-field__ripple"></span>
                            <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                            <span class="mdc-floating-label">Catalog Number</span>
                            <span class="mdc-line-ripple"></span>
                        </label>
                    </div>
                    <div class="field">
                    <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                    <span class="mdc-text-field__ripple"></span>
                    <select class="mdc-text-field__input">
                      <option value="100">100%</option>
                      <option value="50">50%</option>
                      <option value="33">33%</option>
                    </select>
                    <span class="mdc-floating-label">Mixture Ratio</span>
                    <span class="mdc-line-ripple"></span>
                  </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

        return newFieldSet;
    }


document.addEventListener('DOMContentLoaded', function () {
        initializeMDCTextFields(); // Initialize text fields on page load
    
        // Event delegation for adding media fields
        document.body.addEventListener('click', function (event) {
            const target = event.target;
    
            if (target.classList.contains('addGrowthFactorButton')) {
                event.preventDefault(); // Prevent the default form submission behavior
    
                const newFieldSet = createNewFieldSet_addgrowthfactor();
                // Find the parent node for the addButton to correctly use insertBefore
                const parentOfAddButton = target.parentNode;
                parentOfAddButton.insertBefore(newFieldSet, target);
    
                initializeMDCTextFields(); // Re-initialize MDC components for the new fields
    
                // Potentially update the visibility of delete buttons
                const allFieldSets = target.closest('.growth-factor-container').querySelectorAll('.field-set');
                const deleteButton = target.closest('.growth-factor-container').querySelector('.deleteGrowthFactorButton');
                if (allFieldSets.length > 0) {
                    deleteButton.style.display = 'inline-block';
                }
            } else if (target.classList.contains('deleteGrowthFactorButton')) {
                event.preventDefault();
    
                const container = target.closest('.growth-factor-container');
                const allFieldSets = container.querySelectorAll('.field-set');
                if (allFieldSets.length > 0) {
                    allFieldSets[allFieldSets.length - 1].remove();
    
                    // Check if we need to hide the delete button
                    if (container.querySelectorAll('.field-set').length === 0) {
                        target.style.display = 'none';
                    }
                }
            }
        });
    });
     
function createNewFieldSet_addgrowthfactor() {
    const newFieldSet = document.createElement('div');
    newFieldSet.classList.add('field-set');
    newFieldSet.innerHTML = `
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell--span-12">
            <div class="numbering-and-field">
                <div class="fields-container">
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Name">
                          <span class="mdc-floating-label">Name</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                          <span class="mdc-floating-label">Vendor</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                          <span class="mdc-floating-label">Catalog Number</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Final concentration">
                          <span class="mdc-floating-label">Final concentration</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
                  <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled">
                            <span class="mdc-text-field__ripple"></span>
                            <select class="mdc-text-field__input">
                                <option value="ng/mL">ng/mL</default>
                                <option value="μM">μM</option>
                                <option value="mM">mM</option>
                            </select>
                            <span class="mdc-floating-label">Unit</span>
                            <span class="mdc-line-ripple"></span>
                        </label>
                            </div>
                                        
                </div>
            </div>
        </div>
    </div>
`;

    return newFieldSet;
}


document.addEventListener('DOMContentLoaded', function () {
    initializeMDCTextFields(); // Initialize text fields on page load

    // Event delegation for adding media fields
    document.body.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('addPassagingButton')) {
            event.preventDefault(); // Prevent the default form submission behavior

            const newFieldSet = createNewFieldSet_addpassaging();
            // Find the parent node for the addButton to correctly use insertBefore
            const parentOfAddButton = target.parentNode;
            parentOfAddButton.insertBefore(newFieldSet, target);

            initializeMDCTextFields(); // Re-initialize MDC components for the new fields

            // Potentially update the visibility of delete buttons
            const allFieldSets = target.closest('.passaging--container').querySelectorAll('.field-set');
            const deleteButton = target.closest('.passaging--container').querySelector('.deletePassagingButton');
            if (allFieldSets.length > 0) {
                deleteButton.style.display = 'inline-block';
            }
        } else if (target.classList.contains('deletePassagingButton')) {
            event.preventDefault();

            const container = target.closest('.passaging--container');
            const allFieldSets = container.querySelectorAll('.field-set');
            if (allFieldSets.length > 0) {
                allFieldSets[allFieldSets.length - 1].remove();

                // Check if we need to hide the delete button
                if (container.querySelectorAll('.field-set').length === 0) {
                    target.style.display = 'none';
                }
            }
        }
    });
});
 
function createNewFieldSet_addpassaging() {
    const newFieldSet = document.createElement('div');
    newFieldSet.classList.add('field-set');
    newFieldSet.innerHTML = `
    <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell--span-12">
        <div class="numbering-and-field">
            <div class="fields-container">
                <div class="field">
                    <label class="mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <input class="mdc-text-field__input" type="text" placeholder="Name">
                        <span class="mdc-floating-label">Name</span>
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div class="field">
                    <label class="mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                        <span class="mdc-floating-label">Vendor</span>
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div class="field">
                    <label class="mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                        <span class="mdc-floating-label">Catalog Number</span>
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div class="field">
                <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                <span class="mdc-text-field__ripple"></span>
                <select class="mdc-text-field__input">
                    <option value="100">100%</option>
                    <option value="50">50%</option>
                    <option value="33">33%</option>
                </select>
                <span class="mdc-floating-label">Mixture Ratio</span>
                <span class="mdc-line-ripple"></span>
                </label>
            </div>
            </div>
        </div>
    </div>
    </div>
    `;

    return newFieldSet;
}

  

document.addEventListener('DOMContentLoaded', function () {
    initializeMDCTextFields(); // Initialize text fields on page load

    // Event delegation for adding media fields
    document.body.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('addReadoutButton')) {
            event.preventDefault(); // Prevent the default form submission behavior

            const newFieldSet = createNewFieldSet_addreadout();
            // Find the parent node for the addButton to correctly use insertBefore
            const parentOfAddButton = target.parentNode;
            parentOfAddButton.insertBefore(newFieldSet, target);

            initializeMDCTextFields(); // Re-initialize MDC components for the new fields

            // Potentially update the visibility of delete buttons
            const allFieldSets = target.closest('.readout--container').querySelectorAll('.field-set');
            const deleteButton = target.closest('.readout--container').querySelector('.deleteReadoutButton');
            if (allFieldSets.length > 0) {
                deleteButton.style.display = 'inline-block';
            }
        } else if (target.classList.contains('deleteReadoutButton')) {
            event.preventDefault();

            const container = target.closest('.readout--container');
            const allFieldSets = container.querySelectorAll('.field-set');
            if (allFieldSets.length > 0) {
                allFieldSets[allFieldSets.length - 1].remove();

                // Check if we need to hide the delete button
                if (container.querySelectorAll('.field-set').length === 0) {
                    target.style.display = 'none';
                }
            }
        }
    });
});
 
function createNewFieldSet_addreadout() {
    const newFieldSet = document.createElement('div');
    newFieldSet.classList.add('field-set');
    newFieldSet.innerHTML =  `
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell--span-12">
            <div class="numbering-and-field">
                <div class="fields-container">
                    <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled">
                            <span class="mdc-text-field__ripple"></span>
                            <input class="mdc-text-field__input" type="text" placeholder="Name">
                            <span class="mdc-floating-label">Name</span>
                            <span class="mdc-line-ripple"></span>
                        </label>
                    </div>
                    <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled">
                            <span class="mdc-text-field__ripple"></span>
                            <input class="mdc-text-field__input" type="text" placeholder="positiveCells">
                            <span class="mdc-floating-label">% positive cells</span>
                            <span class="mdc-line-ripple"></span>
                        </label>
                    </div>
                    <div class="field">
                        <label class="mdc-text-field mdc-text-field--filled" style="width:100%">
                            <span class="mdc-text-field__ripple"></span>
                            <select class="mdc-text-field__input">
                                <option value="up">↑ upregulated</option>
                                <option value="down">↓ downregulated</option>
                            </select>
                            <span class="mdc-floating-label">Gene enrichment</span>
                            <span class="mdc-line-ripple"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

        return newFieldSet;
}

// Attach MDCTextField to all text fields
const textFields = document.querySelectorAll('.mdc-text-field');
textFields.forEach(textField => {
    mdc.textField.MDCTextField.attachTo(textField);
});

  
var radios = document.querySelectorAll('.mdc-radio');
for (var i = 0, radio; radio = radios[i]; i++) {
new mdc.radio.MDCRadio(radio);
}

document.addEventListener('DOMContentLoaded', function () {
    const checkboxGroups = document.querySelectorAll('.group'); // Select groups containing both checkbox and content container

    checkboxGroups.forEach(function(group) {
        const checkbox = group.querySelector('.media-checkbox'); // Find the checkbox in this group
        const contentContainer = group.querySelector('.passaging--container'); // Find the corresponding content container

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                contentContainer.style.display = 'block';
            } else {
                contentContainer.style.display = 'none';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const checkboxGroups = document.querySelectorAll('.group-readout'); // Select groups containing both checkbox and content container

    checkboxGroups.forEach(function(group) {
        const checkbox = group.querySelector('.readout-checkbox'); // Find the checkbox in this group
        const contentContainer = group.querySelector('.readout--container'); // Find the corresponding content container

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                contentContainer.style.display = 'block';
            } else {
                contentContainer.style.display = 'none';
            }
        });
    });
});
  
  document.addEventListener('DOMContentLoaded', function () {
      const step0Checkbox = document.getElementById('step0Checkbox');
      const step0Menu = document.getElementsByClassName('step0-container')[0];
      
      step0Checkbox.addEventListener('change', function () {
          if (step0Checkbox.checked) {
              step0Menu.style.display = 'block';
          } else {
              step0Menu.style.display = 'none';
          }
      });
    });
  

  document.addEventListener('DOMContentLoaded', function () {
    let stepCount = document.querySelectorAll('.step-container').length;
    const addStepButton = document.getElementById('addStepButton');

    addStepButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Create new step container
        const newStepContainer = document.createElement('div');
        newStepContainer.classList.add('step-container');
        newStepContainer.innerHTML = `
                        <hr>
                        <h3 style="font-size: 20px; font-weight: bold;">Step ${stepCount + 1}.</h3>

                            <h2 style="font-weight: bold; font-size: 20px;">Duration</h2>

                              <div class="options-container">
                                <div class="mdc-form-field" style="margin-right: 20px;">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="not-given" name="duration" value="0">
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="overnight">not specified</label>
                                </div>
                              <div class="options-container">
                                <div class="mdc-form-field" style="margin-right: 20px;">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="overnight" name="duration" value="0">
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="overnight">overnight</label>
                                </div>
                                
                                <div class="mdc-form-field">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="hours" name="duration" value="1">
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="hours" style="margin-right: 10px;">hours</label>
                                    <div class="mdc-text-field mdc-text-field--filled">
                                        <input class="mdc-text-field__input" type="text" id="input-hours" placeholder="Enter hours">
                                        <label class="mdc-floating-label" for="input-hours">Enter hours</label>
                                        <div class="mdc-line-ripple"></div>
                                    </div>
                                </div>
                            </div>
                            
                            &nbsp;
                                
                            </div>
                            
                            
                            <hr style = "height: 1px; background-color:grey">

                            <h2 style="font-weight: bold; font-size: 20px;">Formulation</h2>
                            <!-- Basal Media -->
                            <div class="basal-media-container">
                            <div class="custom-basal-media mdc-layout-grid">
                              <div class="mdc-layout-grid__cell--span-12">
                                <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Basal Media</h2>
                            </div>
                            
                            <!-- Assuming this is already within an mdc-layout-grid -->
                            <div class="mdc-layout-grid__inner">
                                <div class="mdc-layout-grid__cell--span-12">
                                    <div class="numbering-and-field">
                                        
                                        <div class="fields-container">
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled">
                                                    <span class="mdc-text-field__ripple"></span>
                                                    <input class="mdc-text-field__input" type="text" placeholder="Media Name" required>
                                                    <span class="mdc-floating-label">Media Name</span>
                                                    <span class="mdc-line-ripple"></span>
                                                </label>
                                            </div>
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled">
                                                    <span class="mdc-text-field__ripple"></span>
                                                    <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                    <span class="mdc-floating-label">Vendor</span>
                                                    <span class="mdc-line-ripple"></span>
                                                </label>
                                            </div>
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled">
                                                    <span class="mdc-text-field__ripple"></span>
                                                    <input class="mdc-text-field__input" type="text" placeholder="Catalog Number" required>
                                                    <span class="mdc-floating-label">Catalog Number</span>
                                                    <span class="mdc-line-ripple"></span>
                                                </label>
                                            </div>
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                                  <span class="mdc-text-field__ripple"></span>
                                                  <select class="mdc-text-field__input" required>
                                                    <option value="100">100%</option>
                                                    <option value="50">50%</option>
                                                    <option value="33">33%</option>
                                                  </select>
                                                  <span class="mdc-floating-label">Mixture Ratio</span>
                                                  <span class="mdc-line-ripple"></span>
                                                </label>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <button type="button" class="addMediaButton">+</button>
                            <button type="button" class="deleteMediaButton" style="display: none;">-</button>
                            
                            </div>
                            </div>

                             <div class="serum-supplements-container">
                             <div class="custom-serum-supplements mdc-layout-grid">
                              <div class="mdc-layout-grid__cell--span-12">
                                  <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Serum and Supplements</h2>
                              </div>
                              
                              <div class="mdc-layout-grid__inner">
                                  <div class="mdc-layout-grid__cell--span-12">
                                      <div class="numbering-and-field">
                                         
                                          <div class="fields-container">
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Serum/Supplement Name" required>
                                                      <span class="mdc-floating-label">Name</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                      <span class="mdc-floating-label">Vendor</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Catalog Number" required>
                                                      <span class="mdc-floating-label">Catalog Number</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                                  <span class="mdc-text-field__ripple"></span>
                                                  <select class="mdc-text-field__input" required>
                                                    <option value="100">100%</option>
                                                    <option value="50">50%</option>
                                                    <option value="33">33%</option>
                                                  </select>
                                                  <span class="mdc-floating-label">Mixture Ratio</span>
                                                  <span class="mdc-line-ripple"></span>
                                                </label>
                                              </div>
                                              
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            
                          
                              <button type="button" class="addSerumSupplementButton">+</button>
                              <button type="button" class="deleteSerumButton" style="display: none;">-</button>

                             </div>
                             </div>
                          
                          
                             <div class="growth-factor-container">
                             <div class="custom-growth-factors mdc-layout-grid">
                              <div class="mdc-layout-grid__cell--span-12">
                                  <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Growth factor, cytokine and chemical supplements</h2>
                              </div>
                              
                              <div class="mdc-layout-grid__inner">
                                  <div class="mdc-layout-grid__cell--span-12">
                                      <div class="numbering-and-field">
                                         
                                          <div class="fields-container">
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Name" required>
                                                      <span class="mdc-floating-label">Name</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                      <span class="mdc-floating-label">Vendor</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Catalog Number" required>
                                                      <span class="mdc-floating-label">Catalog Number</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Final concentration" required>
                                                      <span class="mdc-floating-label">Final concentration</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                    <label class="mdc-text-field mdc-text-field--filled">
                                                        <span class="mdc-text-field__ripple"></span>
                                                        <select class="mdc-text-field__input">
                                                            <option value="ng/mL">ng/mL</default>
                                                            <option value="μM">μM</option>
                                                            <option value="mM">mM</option>
                                                        </select>
                                                        <span class="mdc-floating-label">Unit</span>
                                                        <span class="mdc-line-ripple"></span>
                                                    </label>
                                                        </div>
                                                
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            
                          
                              <button type="button" class="addGrowthFactorButton">+</button>
                              <button type="button" class="deleteGrowthFactorButton" style="display: none;">-</button>
                             </div>
                             </div>
                             

                             <hr style = "height: 1px; background-color:grey">
                             <h2 style="font-weight: bold; font-size: 20px;">Passaging</h2>
                             <div class="group">
                             <div class="checkbox-container" style="display: flex; align-items: center;">
                                <div class="mdc-checkbox">
                                    <input type="checkbox" class="mdc-checkbox__native-control media-checkbox"/>
                                    <div class="mdc-checkbox__background">
                                        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                            <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                        </svg>
                                        <div class="mdc-checkbox__mixedmark"></div>
                                    </div>
                                </div>
                                <label class="checkbox-label" style="margin-left: 10px; width: 100%; display: block;">The cells were passaged following the addition of the compounds.</label>
                            </div>
                                                 
    
                        
                              <div class="passaging--container" style="display:none;">
                                <div class="custom-readout mdc-layout-grid">
                                 <div class="mdc-layout-grid__cell--span-12">
                                     <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Passaging media</h2>
                                 </div>
                                 
                                 <div class="mdc-layout-grid__inner">
                                     <div class="mdc-layout-grid__cell--span-12">
                                         <div class="numbering-and-field">
                                             
                                             <div class="fields-container">
                                                 <div class="field">
                                                     <label class="mdc-text-field mdc-text-field--filled">
                                                         <span class="mdc-text-field__ripple"></span>
                                                         <input class="mdc-text-field__input" type="text" placeholder="Name">
                                                         <span class="mdc-floating-label">Name</span>
                                                         <span class="mdc-line-ripple"></span>
                                                     </label>
                                                 </div>
                                                 <div class="field">
                                                     <label class="mdc-text-field mdc-text-field--filled">
                                                         <span class="mdc-text-field__ripple"></span>
                                                         <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                                                         <span class="mdc-floating-label">Vendor</span>
                                                         <span class="mdc-line-ripple"></span>
                                                     </label>
                                                 </div>
                                                 <div class="field">
                                                     <label class="mdc-text-field mdc-text-field--filled">
                                                         <span class="mdc-text-field__ripple"></span>
                                                         <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                                                         <span class="mdc-floating-label">Catalog Number</span>
                                                         <span class="mdc-line-ripple"></span>
                                                     </label>
                                                 </div>
                                                 <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                                    <span class="mdc-text-field__ripple"></span>
                                                    <select class="mdc-text-field__input">
                                                      <option value="100">100%</option>
                                                      <option value="50">50%</option>
                                                      <option value="33">33%</option>
                                                    </select>
                                                    <span class="mdc-floating-label">Mixture Ratio</span>
                                                    <span class="mdc-line-ripple"></span>
                                                  </label>
                                                </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                               
                                 
                                 <button type="button" class="addPassagingButton">+</button>
                                 <button type="button" class="deletePassagingButton" style="display: none;">-</button>
                                </div>
                                </div>
                                </div>
                            
                                &nbsp;
                          

                          <hr style = "height: 1px; background-color:grey">
                          <h2 style="font-weight: bold; font-size: 20px;">Readout</h2>

                          <div class="group-readout">
                            <div class="checkbox-container" style="display: flex; align-items: center;">
                               <div class="mdc-checkbox">
                                   <input type="checkbox" class="mdc-checkbox__native-control readout-checkbox"/>
                                   <div class="mdc-checkbox__background">
                                       <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                           <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                       </svg>
                                       <div class="mdc-checkbox__mixedmark"></div>
                                   </div>
                               </div>
                               <label class="checkbox-label" style="margin-left: 10px; width: 100%; display: block;">Readout information is available for this step.</label>
                           </div>

                          <div class="readout--container" style="display:none;">

                          <div class="readout--container">
                            <div class="custom-readout mdc-layout-grid">
                             <div class="mdc-layout-grid__cell--span-12">
                                 <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Gene markers</h2>
                             </div>
                             
                             <div class="mdc-layout-grid__inner">
                                 <div class="mdc-layout-grid__cell--span-12">
                                     <div class="numbering-and-field">
                                        
                                         <div class="fields-container">
                                             <div class="field">
                                                 <label class="mdc-text-field mdc-text-field--filled">
                                                     <span class="mdc-text-field__ripple"></span>
                                                     <input class="mdc-text-field__input" type="text" placeholder="Name">
                                                     <span class="mdc-floating-label -float-above">Name</span>
                                                     <span class="mdc-line-ripple"></span>
                                                 </label>
                                             </div>
                                             <div class="field">
                                                 <label class="mdc-text-field mdc-text-field--filled">
                                                     <span class="mdc-text-field__ripple"></span>
                                                     <input class="mdc-text-field__input" type="text" placeholder="positiveCells">
                                                     <span class="mdc-floating-label">% positive cells</span>
                                                     <span class="mdc-line-ripple"></span>
                                                 </label>
                                             </div>
                                             <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                                  <span class="mdc-text-field__ripple"></span>
                                                  <select class="mdc-text-field__input">
                                                    <option value="up">↑ upregulated</option>
                                                    <option value="down">↓ downregulated</option>
                                                  </select>
                                                  <span class="mdc-floating-label">Gene enrichment</span>
                                                  <span class="mdc-line-ripple"></span>
                                                </label>
                                              </div>
                                              
                                         </div>
                                     </div>
                                 </div>
                            </div>
                            
                            <button type="button" class="addReadoutButton">+</button>
                            <button type="button" class="deleteReadoutButton" style="display: none;">-</button>
                        
                        </div>


                        </div>
                        &nbsp;
                        
    `;
  
       // Append the new step container before the add button
       addStepButton.parentNode.insertBefore(newStepContainer, addStepButton);
       initializeMDCTextFields();
       

       stepCount = stepCount + 1;
   });

   //Use event delegation for handling changes on dynamically added checkboxes
    document.body.addEventListener('change', function (event) {
        if (event.target.classList.contains('media-checkbox')) {
            const passagingContainer = event.target.closest('.step-container').querySelector('.passaging--container');
            if (event.target.checked) {
                passagingContainer.style.display = 'block';
            } else {
                passagingContainer.style.display = 'none';
            }
        }
    });

    //Use event delegation for handling changes on dynamically added checkboxes
    document.body.addEventListener('change', function (event) {
        if (event.target.classList.contains('readout-checkbox')) {
            const passagingContainer = event.target.closest('.step-container').querySelector('.readout--container');
            if (event.target.checked) {
                passagingContainer.style.display = 'block';
            } else {
                passagingContainer.style.display = 'none';
            }
        }
    });

    // Re-initialize Material Design Components if necessary
    initializeMDCTextFields();
});
  
  document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addRowButton');
    initializeMDCTextFields();

    addButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        let cellLineCount = document.querySelectorAll('.cell-line-set').length + 1;

        const newCellLineSet = document.createElement('div');
        newCellLineSet.classList.add('cell-line-set');
        newCellLineSet.innerHTML = `
            <span>${cellLineCount}.</span>
            <div class="options-container">
                <div class="mdc-form-field">
                    <div class="mdc-radio">
                        <input class="mdc-radio__native-control" name="cell-line-${cellLineCount}" type="radio" value="0">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                    </div>
                    <label>ESC</label>
                </div>
                <div class="mdc-form-field">
                    <div class="mdc-radio">
                        <input class="mdc-radio__native-control" name="cell-line-${cellLineCount}" type="radio" value="1">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                    </div>
                    <label>iPSC</label>
                </div>
            </div>
            <label class="mdc-text-field mdc-text-field--filled cell-line-name-field">
                <span class="mdc-text-field__ripple"></span>
                <input class="mdc-text-field__input" type="text" placeholder=" " aria-labelledby="cell-line-label-${cellLineCount}">
                <span class="mdc-floating-label" id="cell-line-label-${cellLineCount}">Cell line name</span>
                <span class="mdc-line-ripple"></span>
            </label>
            <div class="delete-button-container">
                <button type="button" class="mdc-icon-button deleteRowButton">-</button>
            </div>
        `;

        addButton.parentNode.insertBefore(newCellLineSet, addButton);
        initializeMDCTextFields();
        attachDeleteButtonEvents();
    });


    function attachDeleteButtonEvents() {
        const deleteButtons = document.querySelectorAll('.deleteRowButton');
        deleteButtons.forEach(button => {
            button.removeEventListener('click', handleDeleteRow);
            button.addEventListener('click', handleDeleteRow);
        });
    }

    function handleDeleteRow(event) {
        const cellLineSet = event.target.closest('.cell-line-set');
        if (cellLineSet) {
            cellLineSet.remove();
        }
    }

    attachDeleteButtonEvents();
});

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addKeywordButton');
    initializeMDCTextFields();

    addButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavio

        const newTargetSet = document.createElement('div');
        newTargetSet.classList.add('target-set');
        newTargetSet.innerHTML = `
        
        <div class="row">
        <label id="target-cell-keywords" class="mdc-text-field mdc-text-field--filled w-150">
            <span class="mdc-text-field__ripple"></span>
            <input id="targetCell" class="mdc-text-field__input" type="text" placeholder="Enter a keyword describing the differentiation target" aria-labelledby="name-floating-label">
            <span class="mdc-floating-label" id="name-floating-label">Target cell</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <div class="delete-button-container">
            <button type="button" class="mdc-icon-button deleteRowButton">-</button>
        </div>
        </div>
              
        `;

        addButton.parentNode.insertBefore(newTargetSet, addButton);
        initializeMDCTextFields();
        attachDeleteButtonEventsTarget();
    });


    function attachDeleteButtonEventsTarget() {
        const deleteButtons = document.querySelectorAll('.deleteRowButton');
        deleteButtons.forEach(button => {
            button.removeEventListener('click', handleDeleteRowTarget);
            button.addEventListener('click', handleDeleteRowTarget);
        });
    }

    function handleDeleteRowTarget(event) {
        const targetSet = event.target.closest('.target-set');
        if (targetSet) {
            targetSet.remove();
        }
    }
    attachDeleteButtonEventsTarget();
});
