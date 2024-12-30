(`script.js`):


const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const phoneNumberInput = document.querySelector('#phone-number');
const agentCodeInput = document.querySelector('#agent-code');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();
    const agentCode = agentCodeInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && phoneNumber && agentCode && password) {
        // Send data to server or perform other actions
        console.log('Form submitted successfully!');
    } else {
        console.log('Please fill in all fields!');
    }
});
