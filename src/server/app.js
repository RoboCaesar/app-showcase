//const path = require('path');
//const express = require('express');
import path from 'path';
import express from 'express';

const app = express(),
	    PUBLIC_DIR = __dirname,
	    HTML_FILE = path.join(PUBLIC_DIR, '../public/html/index.html')
app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
});

app.get('/typing-test', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIR, './typing-test/typing-test.html'));
});

app.get('/card-matching', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIR, './card-matching-game/index.html'));
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`);
    console.log('Press Ctrl+C to quit.');
});
