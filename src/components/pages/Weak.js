import React from 'react'
import { Card } from "react-bootstrap";

function Weak() {
  const cardInfo = [
    {
      image: "https:/source.unsplash.com/random/200x200/?boy",
      title: "Akash",
      text: "Top First",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?girl",
      title: "Anshika",
      text: "Top Second",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?lady",
      title: "lavina",
      text: "Top Third",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?Men",
      title: "Noor",
      text: "Top Fourth",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?teacher",
      title: "Rubika",
      text: "Top Fifth",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?Moms",
      title: "lavanya",
      text: "Top Sixth",
    },
    
  
  ];
  return (
   
    <div className='container'>
    <div className="row ">
    {cardInfo.map((item,i) => {
        return  <div className="col-4  mt-3"> <Card  style={{ width: "18rem" }} key={i}>
           <Card.Img  variant="top" src={item.image} />
           <Card.Body className='text-center' >
             <Card.Title className='text-primary'  >{item.title}</Card.Title>
             <Card.Text>{item.text}</Card.Text>
           </Card.Body>
         </Card></div>
       })}
     </div>
     </div>
   
  )
}

export default Weak