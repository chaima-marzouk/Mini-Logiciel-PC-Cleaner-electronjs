import express from 'express';
import dotenv  from 'dotenv';
const app =  express();
// import AuthRoute  from './src/router/Auth.router';
const AnalyseRoute  = './src/router/analyse.route';
// require ('../src/db/database');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/api/users', AuthRoute);
app.use('/', AnalyseRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});