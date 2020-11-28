const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static(__dirname));
app.use(cors());

app.get('/', () => {
    app.render("index.ejs");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port *:${PORT}`);
})