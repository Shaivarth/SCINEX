const policeDatabase = {
    "9876543210": "Officer Raj Singh",
    "9123456789": "Inspector Anjali Sharma",
    "9001234567": "Sub-Inspector Rohit Mehra",
    "9876543211": "Reserve Inspector Rajesh Kumar",
    "9123456789": "Inspector Anita Sharma",
    "8765432109": "Sub-Inspector Vijay Yadav",
    "9988776655": "Subedar Suresh Singh",
    "8899001122": "Reserve Inspector Priya Patel",
    "7788990011": "Inspector Arjun Verma",
    "6677889900": "Sub-Inspector Deepa Choudhary",
    "5566778899": "Subedar Mukesh Das",
    "4455667788": "Reserve Inspector Ravi Mishra",
    "3344556677": "Inspector Sunita Thakur",
    "2233445566": "Sub-Inspector Ramesh Yadav",
    "1122334455": "Subedar Meena Singh",
    "9012345678": "Reserve Inspector Akash Patel",
    "8901234567": "Inspector Seema Verma",
    "7890123456": "Sub-Inspector Dinesh Kumar",
    "6789012345": "Subedar Pooja Sharma",
    "5678901234": "Reserve Inspector Kiran Yadav",
    "4567890123": "Inspector Manoj Singh",
    "3456789012": "Sub-Inspector Alok Das",
    "2345678901": "Subedar Nisha Thakur",
    "9876501234": "Reserve Inspector Rohit Kumar",
    "8765401234": "Inspector Neha Sharma",
    "7654301234": "Sub-Inspector Amit Yadav",
    "6543201234": "Subedar Rekha Singh",
    "5432101234": "Reserve Inspector Lalit Patel",
    "4321001234": "Inspector Priyanka Verma",
    "3210001234": "Sub-Inspector Harsh Kumar",
    "2100001234": "Subedar Geeta Sharma",
    "9988001122": "Reserve Inspector Anil Yadav",
    "8877002233": "Inspector Kavita Singh",
    "7766003344": "Sub-Inspector Satish Patel",
    "6655004455": "Subedar Ritu Verma",
    "5544005566": "Reserve Inspector Rajat Kumar",
    "4433006677": "Inspector Shalini Sharma",
    "3322007788": "Sub-Inspector Vivek Yadav",
    "2211008899": "Subedar Jyoti Singh",
    "1100009900": "Reserve Inspector Mohan Patel",
    "9999888877": "Inspector Sonali Verma",
    "8888777766": "Sub-Inspector Ajay Kumar",
    "7777666655": "Subedar Komal Sharma",
    "6666555544": "Reserve Inspector Arvind Yadav",
    "5555444433": "Inspector Nandini Singh",
    "4444333322": "Sub-Inspector Raj Kumar",
    "3333222211": "Subedar Tanvi Patel",
    "2222111100": "Reserve Inspector Yash Verma",
    "1111000099": "Inspector Swati Sharma",
    "9999000888": "Sub-Inspector Abhishek Yadav",
    "8888000777": "Subedar Poonam Singh",
    "7777000666": "Reserve Inspector Nikhil Patel",
    "6666000555": "Inspector Sneha Verma",
    "5555000444": "Reserve Inspector Gaurav Kumar",
    "4444000333": "Inspector Radhika Sharma",
    "3333000222": "Sub-Inspector Kunal Yadav",
    "2222000111": "Subedar Ishita Singh"
};

// Toggle Menu Function
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}

function verifyCaller() {
    const input = document.getElementById('searchInput').value.trim();
    const result = document.getElementById('result');

    if (input === "") {
        alert("Please enter a name or number.");
        return;
    }
    else if (input.length !== 10 || isNaN(input)) {
        result.innerHTML = `<span style="color: red;">⚠️ Invalid number! Please enter a valid 10-digit number.</span>`;
        return;
    }

    let reportedScammers = JSON.parse(localStorage.getItem('reportedScammers')) || [];

    if (policeDatabase[input]) {
        result.innerHTML = `<span style="color: green;">✅ Verified: ${policeDatabase[input]}</span>`;
    } else if (reportedScammers.includes(input)) {
        result.innerHTML = `<span style="color: red;">⚠️ This number has been reported as a scammer!</span>`;
    } else {
        result.innerHTML = `<span style="color: red;">❌ Not Verified! Be cautious of potential fraud.</span>`;
    }
}
