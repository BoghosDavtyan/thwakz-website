const newsContent = [
    { title: "News Title 1", description: "Description for news 1" },
    { title: "News Title 2", description: "Description for news 2" },
    { title: "News Title 3", description: "Description for news 3" },
];

const newsContainer = document.getElementById("news-content");
newsContent.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p>`;
    newsContainer.appendChild(newsItem);
});
