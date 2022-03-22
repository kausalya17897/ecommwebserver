import express, { response } from  'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import { shirtsRouter } from './routes/shirts.js';


dotenv.config();
console.log(process.env);
const app=express();

const PORT=process.env.PORT;
const shirts= [
    {
        id:"1",
        img:"https://i5.walmartimages.com/asr/94c411ac-4df0-41e9-b491-2f894badfcd2.fbb35fb5ffcb5fbc3eabd98a22061bcc.jpeg",
        price:450,
        quantity:1,
        off:50,
        color:"blue",
  
      },
      {
        id:"2",
        img:"https://i5.walmartimages.com/asr/b1d7030b-2951-4b38-a5b5-e176e48f7d72.e658a69a882244d9d1fcefb9c09ffa74.jpeg",
        price:500,
        quantity:1, 
        off:50,
        color:"blue",    
      },
      {
        id:"3",
        img:"https://th.bing.com/th/id/OIP.Zb4iGo7UzqQ3JP20b7a_ngHaLA?pid=ImgDet&w=1480&h=2200&rs=1",
        price:470,
        quantity:1,
        off:50,
        color:"white",
      },
      {
        id:"4",
        img:"https://images-na.ssl-images-amazon.com/images/I/71m5A0YlJlL._UX522_.jpg",
        price:500,
        quantity:1,
        off:50,
        color:"lightgreen",
      },
      {
        id:"5",
        img:"https://th.bing.com/th/id/OIP.Ra6Vef4-WuUcVzBsxiAb_wHaJE?pid=ImgDet&w=1320&h=1616&rs=1",
        price:470,
        quantity:1,
         off:50,
         color:"red",
      },
      {
        id:"6",
        img:"https://th.bing.com/th/id/OIP.HzISzqpER3kRmn5tqkHVawHaHa?pid=ImgDet&w=800&h=800&rs=1",
        price:380,
        quantity:1,
         off:50,
         color:"sandal",
      },
      {
        id:"7",
        img:"https://th.bing.com/th/id/OIP.MXbFE_iCQ3Gx8a4qF66BlQHaHa?pid=ImgDet&w=2000&h=2000&rs=1",
        price:400,
        quantity:1,
         off:50,
         color:"pink",
      },
      {
        id:"8",
        img:"https://th.bing.com/th/id/OIP.arLAXCN1wVrf3MaYzeZd1wHaJC?pid=ImgDet&w=600&h=732&rs=1",
        price:430,
        quantity:1,
        off:50,
        color:"blue",
      },
      {
        id:"9",
        img:"https://th.bing.com/th/id/OIP.x14gbvbUicAnBCg-F14a2gAAAA?pid=ImgDet&w=357&h=633&rs=1",
        price:480,
        quantity:1,
        off:50,
        color:"blue",
      },
      
  ];
  app.use(express.json());
  app.use(cors());
//const  MONGO_URL="mongodb://localhost";
const MONGO_URL=process.env.MONGO_URL;//hide password through dotenv file
async function createConnection(){
  const client=new MongoClient(MONGO_URL);
  await client.connect();//promise
  console.log("Mongodb connected");
  return client
}
export const client=await createConnection();
app.get('/',(request,response)=>{
    response.send("hello customers");
})

app.use('/shirts',shirtsRouter)
app.listen(PORT,()=>console.log(`App is started ${PORT}`))


