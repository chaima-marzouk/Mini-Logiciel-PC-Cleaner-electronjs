import express from 'express';
import dotenv  from 'dotenv';
const app =  express();
// import AuthRoute  from './src/router/Auth.router';
// import AnalyseRoute  from './src/router/analyse.route';
// import '../src/db/database';


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/api/users', AuthRoute);
// app.use('/', AnalyseRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});