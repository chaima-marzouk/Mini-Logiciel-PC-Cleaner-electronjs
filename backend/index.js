const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const AnalyseRouter = require('./src/router/anlyse.router');
const DeleteRouter = require('./src/router/delete.router');
const cleanerRoutes = require('./src/router/cleaner.router');
const historyRoutes = require('./src/router/history.router');
const cookieParser = require('cookie-parser');
require('./src/db/db');
const app = express();

app.use(cors());

app.options('*', cors()); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())



app.use('/analyse', AnalyseRouter);
app.use('/delete', DeleteRouter);

app.use("/cleaner", cleanerRoutes);
app.use("/history", historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});