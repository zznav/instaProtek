const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', (path.join(__dirname, 'views')))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('home');
    // res.sendFile(path.)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
