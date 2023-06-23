import React,{useState} from "react";

const Card = () => {

   let time = new Date().toLocaleTimeString();

   const[ctime,setCtime] = useState(time);
   

   const UpdateTime =  () => {
    new Date().toLocaleTimeString();
    setCtime(time);
   }

   setInterval(UpdateTime,1000);


   return(
    <h1>{time}</h1>
   )
};

export default Card;