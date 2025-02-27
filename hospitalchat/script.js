// const responses = {
//     "hello": "Hello! How can I assist you today?",
//     "hi": "Hi there! How can I help you?",
//     "what are your working hours": "We are open 24/7 for emergency services. Regular appointments are from 8 AM to 6 PM.",
//     "what is your location": "We are located at 123 Health St, Wellness City.",
//     "how can i make an appointment": "You can call us at (123) 456-7890 or visit our website to book an appointment online.",
//     "do you offer emergency services": "Yes, we offer emergency services 24/7. Please call (123) 456-7890 in case of an emergency.",
//     "what specialties do you have": "We have a variety of specialists including cardiologists, neurologists, pediatricians, and more.",
//     "can i talk to a doctor": "Sure! You can either make an appointment or use our telemedicine services to consult with a doctor online.",
//     "how do i get my test results": "Test results can be accessed online through our patient portal or you can call us for assistance.",
//     "do you accept insurance": "Yes, we accept most major insurance providers. Please check with our billing department for details.",
//     "what is the cost of a consultation": "Consultation fees vary based on the specialist. Please contact us for more information.",
//     "are you open on weekends": "Yes, we are open on weekends for emergency services and scheduled appointments.",
//     "what should i do if i need a prescription refill": "You can request a prescription refill through our patient portal or by calling the pharmacy directly.",
//     "do you have a pharmacy": "Yes, we have an on-site pharmacy for your convenience.",
//     "how can i contact support": "You can reach our support team at support@hospital.com or call (123) 456-7890.",
//     "what is your patient portal": "Our patient portal is an online platform where you can access your medical records, schedule appointments, and more. Visit our website to register.",
//     "how can i pay my bill": "You can pay your bill online through our patient portal, or in person at our billing department.",
//     "do you have parking": "Yes, we have ample parking available for patients and visitors.",
//     "can i visit a patient": "Visitors are welcome during visiting hours from 10 AM to 7 PM. Please check with the hospital for specific rules regarding visits.",
//     "how can i get medical advice": "You can schedule an appointment with one of our doctors or use our telemedicine service for online consultations.",
//     "do you have a waiting list": "Yes, depending on the specialty, there may be a waiting list. Please contact our reception for more information.",
//     "is there a cafeteria": "Yes, we have a cafeteria serving meals to patients and visitors.",
//     "do you offer maternity services": "Yes, we offer a full range of maternity services, including prenatal care, labor, and delivery.",
//     "can i book an appointment online": "Yes, you can book an appointment directly through our website or by calling us.",
//     "how do i cancel my appointment": "To cancel an appointment, please call us at least 24 hours in advance or do so through the patient portal."
// };

// function displayMessage(message, sender) {
//     const chatlog = document.getElementById("chatlog");
//     const div = document.createElement("div");
//     div.classList.add(sender === "user" ? "user-message" : "bot-message");
//     div.innerText = message;
//     chatlog.appendChild(div);
//     chatlog.scrollTop = chatlog.scrollHeight;
// }

// function sendMessage() {
//     const userInput = document.getElementById("user-input").value.trim().toLowerCase();

//     if (userInput === "") return;

//     displayMessage(userInput, "user");

//     // Normalize input to match response keys
//     const normalizedInput = userInput.replace(/[?]/g, "").trim();

//     const botResponse = responses[normalizedInput] || "Sorry, I don't understand that. Can you please rephrase?";

//     setTimeout(() => {
//         displayMessage(botResponse, "bot");
//     }, 1000);

//     document.getElementById("user-input").value = "";
// }

// document.getElementById("user-input").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         sendMessage();
//     }
// });









const responses = {
    // General Inquiries
    "hello": "Hello! How can I assist you with your healthcare needs today?",
    "hi": "Hi there! I'm here to help you with any medical or hospital-related questions.",
    
    // Departments and Services
    "what departments do you have": `We offer comprehensive healthcare services across multiple departments:
• Emergency Medicine
• Internal Medicine
• Cardiology
• Neurology
• Pediatrics
• Obstetrics & Gynecology
• Orthopedics
• Oncology
• Mental Health
• Dental Care

Would you like specific information about any department?`,

    "cardiology": `Our Cardiology Department provides comprehensive heart care services including:
• Cardiac Consultations
• ECG/EKG Testing
• Stress Tests
• Echocardiograms
• Heart Surgery
• Cardiac Rehabilitation
• Preventive Cardiology

Would you like to schedule an appointment with a cardiologist?`,

    // Emergency Services
    "emergency": `If you're experiencing a medical emergency, please call 911 immediately.

Our Emergency Department is open 24/7 and equipped to handle all emergencies. Location: Ground Floor, East Wing.

Common emergency symptoms that require immediate attention:
• Chest pain or difficulty breathing
• Severe bleeding or head trauma
• Stroke symptoms (FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 911)
• Severe allergic reactions
• Major burns or injuries`,

    // Appointments
    "how can i make an appointment": `You can schedule an appointment in several ways:

1. Call our appointment hotline: (123) 456-7890
2. Use our online patient portal
3. Visit our reception desk in person
4. Use our mobile app

For new patients, please have ready:
• Photo ID
• Insurance card
• Medical history
• List of current medications

Would you like me to guide you through the online booking process?`,

    // Insurance and Billing
    "insurance": `We accept most major insurance plans including:
• Blue Cross Blue Shield
• Aetna
• Cigna
• Medicare/Medicaid
• UnitedHealthcare
• Humana

For billing inquiries:
• Call: (123) 456-7891
• Email: billing@hospital.com
• Visit our billing office: Monday-Friday, 9 AM - 5 PM

We also offer flexible payment plans for uninsured patients.`,

    // COVID-19 Information
    "covid": `Current COVID-19 Services:
• Testing (PCR and Rapid)
• Vaccination
• Treatment
• Telehealth consultations

Safety Protocols:
• Mask requirement in clinical areas
• Temperature screening
• Social distancing measures
• Enhanced cleaning procedures

For COVID-19 testing appointment, please call: (123) 456-7892`,

    // Patient Portal
    "patient portal": `Our Patient Portal offers:
• View test results
• Schedule appointments
• Message your healthcare team
• Request prescription refills
• Access medical records
• Pay bills online

Visit hospital.com/portal to register. Need help? Call: (123) 456-7893`,

    // Default response
    "default": "I don't have specific information about that. Would you like me to connect you with our help desk? You can reach them at (123) 456-7890."
};

// Quick action responses
const quickActions = {
    emergency: "For emergencies, please call 911 immediately. Our Emergency Department is open 24/7 and located at the East Wing entrance. For non-life-threatening emergencies, call: (123) 456-7890",
    appointment: "Would you like to schedule an appointment? You can call (123) 456-7890 or use our online booking system. What type of appointment are you looking for?",
    departments: "Our hospital has multiple specialized departments including Emergency, Cardiology, Neurology, Pediatrics, Oncology, and more. Which department would you like to know more about?",
    insurance: "We accept most major insurance plans. For specific coverage questions or billing concerns, please contact our billing department at (123) 456-7891.",
    contact: "You can reach us at:\nMain Line: (123) 456-7890\nEmergency: 911\nAppointments: (123) 456-7892\nEmail: info@hospital.com"



};

// Handle quick action buttons
function quickAction(action) {
    const response = quickActions[action];
    if (response) {
        displayMessage(response, "bot");
    }
    document.getElementById('quick-menu').classList.add('hidden');
}

// Toggle quick action menu
document.getElementById('quick-actions').addEventListener('click', () => {
    const menu = document.getElementById('quick-menu');
    menu.classList.toggle('hidden');
});

function findBestMatch(input) {
    input = input.toLowerCase();
    
    // Direct match
    if (responses[input]) {
        return responses[input];
    }
    
    // Check for keywords in the input
    const keywords = {
        'emergency': ['urgent', 'emergency', 'ambulance', '911'],
        'cardiology': ['heart', 'chest pain', 'cardiac', 'cardiology'],
        'insurance': ['insurance', 'billing', 'payment', 'cost'],
        'covid': ['covid', 'coronavirus', 'vaccine', 'testing'],
        'patient portal': ['portal', 'online', 'login', 'account'],
        'how can i make an appointment': ['appointment', 'schedule', 'book', 'visit']
    };
    
    for (let [key, words] of Object.entries(keywords)) {
        if (words.some(word => input.includes(word))) {
            return responses[key];
        }
    }
    
    return responses["default"];
}

function displayMessage(message, sender) {
    const chatlog = document.getElementById("chatlog");
    const div = document.createElement("div");
    div.classList.add(sender === "user" ? "user-message" : "bot-message");
    div.innerText = message;
    chatlog.appendChild(div);
    chatlog.scrollTop = chatlog.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;
    
    displayMessage(userInput, "user");
    const botResponse = findBestMatch(userInput.toLowerCase());
    
    setTimeout(() => {
        displayMessage(botResponse, "bot");
    }, 1000);
    
    document.getElementById("user-input").value = "";
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

// Initial greeting
window.onload = function() {
    setTimeout(() => {
        displayMessage("Hello! I'm your HealthCare Assistant. How can I help you today?", "bot");
    }, 500);
};








