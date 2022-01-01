const express = require('express');

const app = express();

const port = 3000;
app.all('/', (req, res) =>{
    res.write(`It\'s listen on port http://localhost${port}` )
    res.end();
});

app.listen(port, console.log.bind(console, `App is running on http://localhost${port}`));