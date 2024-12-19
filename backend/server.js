const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatRoutes = require('./routes/chat');
const connectDB = require('./database/connect');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/chat', chatRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));