// Toggle Menu Function
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}

function reportScammer() {
    let number = document.getElementById("reportNumber").value.trim();
    let reportMsg = document.getElementById("reportMsg");

    if (number.length !== 10 || isNaN(number)) {
        reportMsg.innerHTML = `<span style="color: red;">⚠️ Invalid number! Please enter a valid 10-digit number.</span>`;
        return;
    }

    const reportedScammers = JSON.parse(localStorage.getItem('reportedScammers')) || [];

    if (!reportedScammers.includes(number)) {
        reportedScammers.push(number);
        localStorage.setItem('reportedScammers', JSON.stringify(reportedScammers));
        reportMsg.innerHTML = `<span style="color: green;">✅ Number ${number} has been reported as a scammer!</span>`;
    } else {
        reportMsg.innerHTML = `<span style="color: red;">⚠️ This number is already reported!</span>`;
    }

}
