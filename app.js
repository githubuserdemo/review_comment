process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

// Insecure code example with multiple vulnerabilities

// 1. Hardcoded credentials (sensitive information exposure)
const apiKey = "12345-ABCDE";  // Sensitive information hardcoded

// 2. Unsanitized user input (vulnerable to XSS)
function greetUser() {
    const userInput = document.getElementById("username").value;
    document.getElementById("greeting").innerHTML = "Hello, " + userInput; // No sanitization
}

// 3. Insecure data storage (local storage is not secure)
function storeUserData(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);  // Storing password in plain text
}

// 4. Insecure use of eval (vulnerable to code injection)
function executeUserCode() {
    const userCode = document.getElementById("userCode").value;
    eval(userCode);  // Dangerous use of eval
}

// 5. Weak cryptography (using MD5 for password hashing)
function hashPassword(password) {
    return CryptoJS.MD5(password).toString();  // MD5 is insecure and should not be used
}
