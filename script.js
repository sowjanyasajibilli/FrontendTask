const jobs = [
    { title: "Frontend Developer", salary: "$80,000", location: "New York" },
    { title: "Backend Developer", salary: "$90,000", location: "San Francisco" },
    { title: "Full Stack Developer", salary: "$100,000", location: "Remote" },
    { title: "DevOps Engineer", salary: "$95,000", location: "New York" },
    { title: "Data Scientist", salary: "$110,000", location: "San Francisco" },
    { title: "ML Engineer", salary: "$120,000", location: "Remote" },
    { title: "Cybersecurity Analyst", salary: "$85,000", location: "New York" },
    { title: "Cloud Engineer", salary: "$105,000", location: "San Francisco" },
    { title: "Product Manager", salary: "$115,000", location: "Remote" }
];

let currentPage = 1;
const pageConfig = [4, 3, 2]; // First page: 4 jobs, Second: 3, Third: 2

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("job-listings").classList.remove("hidden");
        displayJobs();
    } else {
        alert("Invalid Username or Password");
    }
}

function logout() {
    document.getElementById("login-page").classList.remove("hidden");
    document.getElementById("job-listings").classList.add("hidden");
}

function displayJobs() {
    const container = document.getElementById("jobs-container");
    container.innerHTML = "";

    const start = pageConfig.slice(0, currentPage - 1).reduce((a, b) => a + b, 0);
    const end = start + pageConfig[currentPage - 1];
    const paginatedJobs = jobs.slice(start, end);

    paginatedJobs.forEach(job => {
        container.innerHTML += `
            <tr>
                <td>${job.title}</td>
                <td>${job.salary}</td>
                <td>${job.location}</td>
                <td><button onclick="openModal()">Apply</button></td>
            </tr>
        `;
    });

    document.getElementById("page-info").innerText = `Page ${currentPage} of ${pageConfig.length}`;
}

function nextPage() {
    if (currentPage < pageConfig.length) {
        currentPage++;
        displayJobs();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayJobs();
    }
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onload = displayJobs;
