function calculateAge() {
    const birthDate = document.getElementById('birthDate').value;
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You are ${age} years old.`;
}
