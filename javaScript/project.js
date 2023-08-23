const projectsList = document.getElementById('projects-list');

// Sample JSON data (replace with your actual JSON file)
const projectsData = [
    {
        title: "CSE 12 Batch all students",
        description: "In this project you will find 12 batch cse students of PUSt",
        link: "https://mijanur-rahman-12.github.io/PUST-CSE-12/"
    },
    {
        title: "My Portfoli Projecty",
        description: "You can know my details about this project",
        link: "https://mijancse19.wixsite.com/mijan"
    },
    // Add more projects here...
];

// Function to create and append projects to the DOM
function createProject(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;

    const linkElement = document.createElement('a');
    linkElement.textContent = "View Project";
    linkElement.href = project.link;
    linkElement.target = "_blank"; // Open link in a new tab

    projectElement.appendChild(titleElement);
    projectElement.appendChild(descriptionElement);
    projectElement.appendChild(linkElement);

    projectsList.appendChild(projectElement);
}

// Fetch projects and populate the DOM
function fetchProjects() {
    for (const project of projectsData) {
        createProject(project);
    }
}

// Call the fetchProjects function when the page loads
window.onload = fetchProjects;
