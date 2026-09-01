const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 測試用 API 路由
app.get('/api/attractions', (req, res) => {
    res.json([
        { id: 1, name: 'Opera House', rating: 4.8 },
        { id: 2, name: 'Harbour Bridge', rating: 4.7 }
    ]);
});

app.get('/', (req, res) => {
    res.send('Tourist Attraction Review Platform API is running!');
});

app.listen(PORT, () => {
    console.log(Server running on port );
});
