document.addEventListener('DOMContentLoaded', function() {
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

    const doctorSchedules = {
        "Dr. Seyfemichael Getachew": "እሁድ, ሰኞ, ሐሙስ, ቅዳሜ: 9:00 LT, አርብ: 5:00 LT",
        "Dr. Rediet Ambachew": "ማክሰኞ: 6:00 LT, ሰኞ, እሮብ, አርብ: 8:00 LT, ቅዳሜ: 3:00 LT",
        "Dr. Seid Mohammed": "ሰኞ: 5:00 LT, ማክሰኞ, ሐሙስ: 10:00 LT, አርብ: 9:00 LT",
        "Dr. Selamawit Worku": "ማክሰኞ, ሐሙስ: 2:00 PM, እሮብ, ቅዳሜ: 10:00 AM",
        "Dr. Selamawit Assefa": "ሰኞ - ቅዳሜ: እኩለ ቀን ውስጥ",
        "Dr. Serkalem Nurilign": "ሰኞ - አርብ: 8:00 AM - 5:00 PM, ቅዳሜ: 8:00 AM - 12:00 PM",
        "Dr. Sisay Teklu": "ሰኞ, እሮብ, አርብ: ከሰዓት በኋላ, ቅዳሜ: ጠዋት",
        "Dr. Assefa Getachew": "እሮብ: 11:00 LT",
        "Dr. Kibruyisfaw Zewdie": "ማክሰኞ, ሐሙስ: 9:00 LT, ቅዳሜ: 7:00 LT",
        "Dr. Shimelis Megersa": "ሰኞ, እሮብ: 7:00 LT"
    };

    const specialtySelect = document.getElementById('specialty');
    const doctorSelect = document.getElementById('doctor');
    const doctorInfo = document.getElementById('doctorInfo');
    const resetButton = document.getElementById('resetButton');
    const langSelect = document.getElementById('langSelect');

    // Translations
    const translations = {
        "en": {
            "selectSpecialty": "Select Specialty:",
            "selectDoctor": "Select Doctor:",
            "bookAppointment": "Book an appointment:",
            "call": "Call:",
            "useThisLink": "Use this link",
            "reset": "Reset"
        },
        "am": {
            "selectSpecialty": "በተፈላጊነት ይምረጡ:",
            "selectDoctor": "ዶክተር ይምረጡ:",
            "bookAppointment": "ቀጠሮ ይሰርዙ:",
            "call": "ይደውሉ:",
            "useThisLink": "እዚህ ሊንክ ተጠቀም",
            "reset": "ዳግም ጀምር"
        }
    };

    // Set language based on selection
    langSelect.addEventListener('change', function() {
        const selectedLang = langSelect.value;
        document.querySelector('label[for="specialty"]').textContent = translations[selectedLang].selectSpecialty;
        document.querySelector('label[for="doctor"]').textContent = translations[selectedLang].selectDoctor;
        resetButton.textContent = translations[selectedLang].reset;
        // Update existing doctor info to reflect language
        if (doctorInfo.innerHTML) {
            updateDoctorInfoLanguage(selectedLang);
        }
    });

    // Update doctor info content based on language
    function updateDoctorInfoLanguage(lang) {
        const selectedDoctor = doctorSelect.value;
        if (doctorSchedules[selectedDoctor]) {
            doctorInfo.innerHTML = `
                <strong>${selectedDoctor}</strong> ${translations[lang].bookAppointment}<br><br>
                ${translations[lang].call} <a href="tel:+2519171">9171/0977717171</a> <br>
                ${translations[lang].useThisLink}: <a href="https://lancethealthservices.com/appointment.html" target="_blank">${translations[lang].useThisLink}</a>
            `;
        }
    }

    // Event Listener: Populate doctors when a specialty is selected
    specialtySelect.addEventListener('change', function() {
        const selectedSpecialty = specialtySelect.value;
        doctorSelect.innerHTML = '<option value="" disabled selected>Select a Doctor</option>';

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

    // Event Listener: Display doctor schedule and appointment info
    doctorSelect.addEventListener('change', function() {
        const selectedLang = langSelect.value;
        const selectedDoctor = doctorSelect.value;
        updateDoctorInfoLanguage(selectedLang);
    });

    // Reset Button Listener
    resetButton.addEventListener('click', function() {
        specialtySelect.value = "";
        doctorSelect.innerHTML = '<option value="" disabled selected>Select a Doctor</option>';
        doctorSelect.disabled = true;
        doctorInfo.innerHTML = '';
    });
});
