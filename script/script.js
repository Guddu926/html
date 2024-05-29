let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach(step => step.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';
}

function nextStep() {
    if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    currentStep--;
    showStep(currentStep);
}

function validateStep(step) {
    const currentStepElement = document.getElementById(`step${step}`);
    const inputs = currentStepElement.querySelectorAll('input[required], select[required]');
    for (let input of inputs) {
        if (!input.value) {
            alert('Please fill out all required fields.');
            return false;
        }
    }
    return true;
}

function showUpload() {
    document.getElementById('outfitUpload').style.display = 'block';
}

function hideUpload() {
    document.getElementById('outfitUpload').style.display = 'none';
}

document.getElementById('outfitImage').addEventListener('change', function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById('outfitPreview');
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('occasion').addEventListener('change', function () {
    const occasionOther = document.getElementById('occasionOther');
    if (this.value === 'Other') {
        occasionOther.style.display = 'block';
    } else {
        occasionOther.style.display = 'none';
    }
});

document.getElementById('jewelleryForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateStep(currentStep)) {
        alert('Form submitted successfully!');
    }
});

showStep(currentStep);
