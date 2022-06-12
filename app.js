const express =  require('express')
const connectDB = require('./config/db');

const games = require('./routes/api/games');

const app = express();

// Connect to Database
connectDB();

app.get('/', (req, res) => res.send('Hello, World!'));

//use routes
app.use('/api/games', games);

const port = process.env.PORT || 8082; 

app.listen(port, () => console.log(`Server is running on ${port}`));

