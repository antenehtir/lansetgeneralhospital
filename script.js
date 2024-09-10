document.addEventListener('DOMContentLoaded', function() {
    // List of specialties and doctors with their schedules
    const specialties = {
        "Cardiology": ["Dr. Seyfemichael Getachew"],
        "Endocrinology": ["Dr. Rediet Ambachew"],
        "Urology": ["Dr. Seid Mohammed"],
        "Dermatology": ["Dr. Selamawit Worku"],
        "Pediatrics": ["Dr. Selamawit Assefa"],
        "Nephrology": ["Dr. Seyfemichael Getachew"],
        "Internal Medicine": ["Dr. Serkalem Nurilign", "Dr. Seyfemichael Getachew"],
        "Obstetrics & Gynecology": ["Dr. Sisay Teklu"],
        "Radiology": ["Dr. Assefa Getachew"],
        "Neurosurgery": ["Dr. Kibruyisfaw Zewdie"],
        "Maxillofacial Surgery": ["Dr. Shimelis Megersa"]
    };

    // Schedules for each doctor
    const doctorSchedules = {
        "Dr. Seyfemichael Getachew": "Monday, Tuesday, Thursday, Saturday: 9:00 LT, Fridays: 5:00 LT",
        "Dr. Rediet Ambachew": "Tuesday: 6:00 LT, Monday, Wednesday, Friday: 8:00 LT, Saturday: 3:00 LT",
        "Dr. Seid Mohammed": "Monday: 5:00 LT, Tuesday, Thursday: 10:00 LT, Friday: 9:00 LT",
        "Dr. Selamawit Worku": "Tuesday, Thursday: 2:00 PM, Wednesday, Saturday: 10:00 AM",
        "Dr. Selamawit Assefa": "Monday-Saturday during working hours",
        "Dr. Serkalem Nurilign": "Monday-Friday: 8:00 AM - 5:00 PM, Saturday: 8:00 AM - 12:00 PM",
        "Dr. Sisay Teklu": "Monday, Wednesday, Friday: Afternoon, Saturday: Morning",
        "Dr. Assefa Getachew": "Wednesday: 11:00 LT",
        "Dr. Kibruyisfaw Zewdie": "Tuesday, Thursday: 9:00 LT, Saturday: 7:00 LT",
        "Dr. Shimelis Megersa": "Monday, Wednesday: 7:00 LT"
    };

    const specialtySelect = document.getElementById('specialty');
    const doctorSelect = document.getElementById('doctor');
    const doctorInfo = document.getElementById('doctorInfo');

    // Event Listener: Populate doctors when a specialty is selected
    specialtySelect.addEventListener('change', function() {
        const selectedSpecialty = specialtySelect.value;
        doctorSelect.innerHTML = '<option value="" disabled selected>Select a Doctor</option>';

        // Populate doctors based on the selected specialty
        if (specialties[selectedSpecialty]) {
            doctorSelect.disabled = false;
            specialties[selectedSpecialty].forEach(doc => {
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

    // Event Listener: Display doctor schedule and appointment info when a doctor is selected
    doctorSelect.addEventListener('change', function() {
        const selectedDoctor = doctorSelect.value;
        if (doctorSchedules[selectedDoctor]) {
            doctorInfo.innerHTML = `
                <strong>${selectedDoctor}</strong> is available during these times: ${doctorSchedules[selectedDoctor]}<br><br>
                <strong>Book an appointment:</strong><br>
                Call: <a href="tel:+2519171">9171/0977717171</a> <br>
                Or <a href="https://lancethealthservices.com/appointment.html" target="_blank">use this link</a>.
            `;
        } else {
            doctorInfo.innerHTML = "No schedule available for the selected doctor.";
        }
    });
});
