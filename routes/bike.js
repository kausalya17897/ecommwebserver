import express from 'express';

import { getShirt, getShirtById, deleteShirtById, addShirt, updateShirtById } from '../Helper.js';
const router=express.Router();



router.get('/',async(request,response)=>{
    console.log(request.query);
    const color=request.query;
    {/*console.log(color);
  
    let filterColor=shirts;
    if(color){
    filterColor=filterColor.filter((a)=>a.color===color)
    
    }*/}
    const shirts=await getShirt(color);
    response.send(shirts);
    
  });
  router.get('/:id',async(request,response)=>{
      const {id}=request.params;
      console.log(id);
      //db.colection.find({})
      const shirt=await getShirtById(id);
      //const shirt=shirts.find((a)=>a.id===id);
      console.log(shirt);
     shirt
     ?response.send(shirt)
     :response.send({message:"no matching shirt"});
  })
  router.delete('/:id',async(request,response)=>{
    const {id}=request.params;
    console.log(id);
    //db.colection.find({})
    const shirt=await deleteShirtById(id);
    //const shirt=shirts.find((a)=>a.id===id);
    console.log(shirt);
   shirt.deletedCount>0
   ?response.send(shirt)
   :response.send({message:"no matching shirt"});
  })
  router.post('/',async(request,response)=>{
    const data=request.body;
    const postdata=await addShirt(data);
    response.send(postdata);
  })
  router.put('/:id',async(request,response)=>{
    const {id}=request.params;
    const data=request.body;
    const result=await updateShirtById(id, data);
    response.send(result);
  })
  
  export const shirtsRouter=router;