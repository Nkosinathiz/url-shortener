const express = require('express');
const { nanoid } = require('nanoid');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// POST /shorten - create a short URL
app.post('/shorten', (req, res) => {
    const { url } = req.body;

    if (!url) return res.status(400).json({ error: 'URL is required'});

    const short_code = nanoid(6);
    db.prepare('INSERT INTO urls (short_code, original_url) VALUES (?, ?)').run(short_code, url);

    res.json({ short_url: `http://localhost:${PORT}/${short_code}`});

});

//GET /:code - redirect to original URL
app.get('/:code', (req, res) => {
    const { code } = req.params;
    const row = db.prepare('SELECT original_url FROM urls WHERE short_code = ?').get(code);

    if (!row) return res.status(404).send('Short URL not found');

    res.redirect(row.original_url);

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

});
