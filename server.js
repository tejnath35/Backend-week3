import exp from 'express';
import { userApp } from './APIS/User-Api.js';
import { productApp } from './APIS/Product-Api.js';
import {connect} from  'mongoose';
import cookieParser from 'cookie-parser';
const app=exp();
const port=4000;
async function connection(){
    try{
    await connect('mongodb://localhost:27017/anuragdb1');
    console.log("DB connected");
    app.listen(port,()=>console.log(`Server listening on port ${port}`));
    }
    catch(err){
        console.log("Error connecting to DB:", err);
}
}
connection();
app.use(exp.json());
app.use(cookieParser())
app.use('/userapi',userApp);
app.use('/productapi',productApp);

