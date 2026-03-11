import express from 'express';
import path from 'path';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`server is running on port ${PORT}`));