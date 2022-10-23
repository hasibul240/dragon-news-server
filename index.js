const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const news = require('./data/news.json');
const categories = require('./data/categories');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    } else {
        const categoryNews = news.filter(item => item.category_id === id);
        res.send(categoryNews);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const newsItem = news.find(item => item._id === id);
    res.send(newsItem);
});

app.get('/news', (req, res) => {
    res.send(news);
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});