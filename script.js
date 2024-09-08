document.addEventListener('DOMContentLoaded', function() {
    // List of specialties and sub-specialties
    const specialties = {
        "Cardiology": ["Interventional Cardiology", "Electrophysiology", "General Cardiology"],
        "Neurology": ["Pediatric Neurology", "Stroke", "Neuro-Oncology"],
        "Orthopedics": ["Sports Medicine", "Joint Replacement", "Trauma Surgery"],
        "Pediatrics": ["Neonatology", "Pediatric Oncology", "Pediatric Surgery"],
        "General Surgery": ["Colorectal Surgery", "Hepatobiliary Surgery", "Trauma Surgery"]
    };

    // List of doctors per sub-specialty
    const doctors = {
        "Interventional Cardiology": ["Dr. John Doe", "Dr. Jane Smith"],
        "Electrophysiology": ["Dr. William Brown"],
        "General Cardiology": ["Dr. Susan Green"],
        "Pediatric Neurology": ["Dr. Michael White"],
        "Stroke": ["Dr. Sarah Johnson"],
        // Add more doctors based on sub-specialties
    };

    // Get DOM elements
    const specialtySelect = document.getElementById('specialty');
    const subSpecialtySelect = document.getElementById('subSpecialty');
    const doctorSelect = document.getElementById('doctor');
    const doctorInfo = document.getElementById('doctorInfo');

    // Event Listener: Populate sub-specialty options when a specialty is selected
    specialtySelect.addEventListener('change', function() {
        const selectedSpecialty = specialtySelect.value;
        subSpecialtySelect.innerHTML = '<option value="" disabled selected>Select a Sub-Specialty</option>';

        // Populate sub-specialties for the selected specialty
        if (specialties[selectedSpecialty]) {
            subSpecialtySelect.disabled = false;
            specialties[selectedSpecialty].forEach(sub => {
                const option = document.createElement('option');
                option.value = sub;
                option.textContent = sub;
                subSpecialtySelect.appendChild(option);
            });
        } else {
            subSpecialtySelect.disabled = true;
        }
        doctorSelect.disabled = true;
        doctorInfo.innerHTML = ''; // Clear doctor info
    });

    // Event Listener: Populate doctors when a sub-specialty is selected
    subSpecialtySelect.addEventListener('change', function() {
        const selectedSubSpecialty = subSpecialtySelect.value;
        doctorSelect.innerHTML = '<option value="" disabled selected>Select a Doctor</option>';

        // Populate doctors for the selected sub-specialty
        if (doctors[selectedSubSpecialty]) {
            doctorSelect.disabled = false;
            doctors[selectedSubSpecialty].forEach(doc => {
                const option = document.createElement('option');
                option.value = doc;
                option.textContent = doc;
                doctorSelect.appendChild(option);
            });
        } else {
            doctorSelect.disabled = true;
        }
        doctorInfo.innerHTML = ''; // Clear doctor info
    });

    // Event Listener: Display doctor info when a doctor is selected
    doctorSelect.addEventListener('change', function() {
        const selectedDoctor = doctorSelect.value;
        doctorInfo.innerHTML = `<strong>${selectedDoctor}</strong> is available on the following dates, please proceed with the booking.`;
    });
});
