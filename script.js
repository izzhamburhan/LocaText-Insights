// script.js

// Simple Chatbot Functionality
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    appendMessage('User: ' + userInput);

    // Use GPT-3 to generate a response (Replace with your actual GPT-3 API call)
    gpt3({
        model: 'davinci',
        prompt: userInput,
        max_tokens: 50
    }).then(response => {
        const botResponse = response.choices[0].text.trim();
        appendMessage('Chatbot: ' + botResponse);
    });

    // Clear user input
    document.getElementById('userInput').value = '';
}

function appendMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatbotSection.appendChild(messageElement);

    // Scroll to the bottom to show the latest message
    chatbotSection.scrollTop = chatbotSection.scrollHeight;
}



function showChatbot() {
    document.getElementById('dashboardContainer').style.display = 'none';
    document.getElementById('chatbotSection').style.display = 'block';
    document.getElementById('userSupportSection').style.display = 'none';
    document.getElementById('userFeedbackSection').style.display = 'none';
    document.getElementById('chatMessages').style.display = 'block';
}

// Add your existing JavaScript code here
// ...

// Add functions to show/hide sections
function showDashboard() {
    document.getElementById('dashboardContainer').style.display = 'block';
    document.getElementById('userSupportSection').style.display = 'none';
    document.getElementById('userFeedbackSection').style.display = 'none';
    document.getElementById('chatbotSection').style.display = 'none';
    document.getElementById('chatMessages').style.display = 'none';
}

function showUserSupport() {
    document.getElementById('dashboardContainer').style.display = 'none';
    document.getElementById('userSupportSection').style.display = 'block';
    document.getElementById('userFeedbackSection').style.display = 'none';
    document.getElementById('chatbotSection').style.display = 'none';
    document.getElementById('chatMessages').style.display = 'none';
}

function showUserFeedback() {
    document.getElementById('dashboardContainer').style.display = 'none';
    document.getElementById('userSupportSection').style.display = 'none';
    document.getElementById('userFeedbackSection').style.display = 'block';
    document.getElementById('chatbotSection').style.display = 'none';
    document.getElementById('chatMessages').style.display = 'none';
}

// feedback

function submitFeedback() {
    // Assuming you want to get the feedback from the textarea
    var feedback = document.getElementById('feedbackInput').value;

    // Your logic for submitting feedback (you can send it to a server, etc.)

    // Show a success message using alert
    alert('Successfully submitted! Thank you for your feedback.');
}


// faq form

function searchFAQs() {
    var input, filter, faqs, faqItems, h3, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    faqs = document.getElementById('faqs');
    faqItems = faqs.getElementsByClassName('faqItem');

    for (i = 0; i < faqItems.length; i++) {
        h3 = faqItems[i].getElementsByTagName('h3')[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            faqItems[i].style.display = '';
        } else {
            faqItems[i].style.display = 'none';
        }
    }
}

function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
}

// chatbot

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    appendMessage('User: ' + userInput);

    const botResponse = getBotResponse(userInput);
    appendMessage('Chatbot: ' + botResponse);

    document.getElementById('userInput').value = '';
}

function appendMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

function getBotResponse(userInput) {
    // Define your rule-based responses here
    if (userInput.toLowerCase().includes('hello')) {
        return 'Hi there! How can I help you?';
    } else if (userInput.toLowerCase().includes('goodbye')) {
        return 'Goodbye! Have a great day!';
    } else {
        return "I'm sorry, I didn't understand that. Can you please provide more information?";
    }
}