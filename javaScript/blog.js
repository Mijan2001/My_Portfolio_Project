const articlesList = document.getElementById('articles-list');

// Sample JSON data (replace with your actual JSON file)
const articlesData = [
    {
        title: "How to become a web developer",
        content: "To become a web developer, learn HTML, CSS, and a programming language like JavaScript, build projects, and create a portfolio to showcase your skills."
    },
    {
        title: "Article 2 Title",
        content: "Content of Article 2..."
    },

    {
        title: "Article 3 Title",
        content: "Content of Article 1..."
    },
    {
        title: "Article 4 Title",
        content: "Content of Article 2..."
    },
    // Add more articles here...
];

// Function to create and append articles to the DOM
function createArticle(article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    const titleElement = document.createElement('h2');
    titleElement.textContent = article.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = article.content;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(contentElement);

    articlesList.appendChild(articleElement);
}

// Fetch articles and populate the DOM
function fetchArticles() {
    for (const article of articlesData) {
        createArticle(article);
    }
}

// Call the fetchArticles function when the page loads
window.onload = fetchArticles;
