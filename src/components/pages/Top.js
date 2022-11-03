import React from "react";
import { Card } from "react-bootstrap";

function Top() {
  const Cardinfo = [
    {
      image: "https:/source.unsplash.com/random/?boy",
      title: "Akash",
      text: "he is good",
    },
    {
      image: "https:/source.unsplash.com/random/?girl",
      title: "Anshika",
      text: "he is second good",
    },
    {
      image: "https:/source.unsplash.com/random/?lady",
      title: "lavina",
      text: "he is third good",
    },
    {
      image: "https:/source.unsplash.com/random/?Men",
      title: "Noor",
      text: "he is forth good",
    },
    {
      image: "https:/source.unsplash.com/random/?teacher",
      title: "Rubika",
      text: "he is sixth good",
    },
    {
      image: "https:/source.unsplash.com/random/?Moms",
      title: "lavanya",
      text: "he is fifth good",
    },
  ];
  console.log(Cardinfo,"shariq")
 
  const rendercards = (card ,index)=>{
<Card style={{ width: "18rem" }}> key={index}
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
        </Card.Body>
      </Card>
  }
  return (

    <div>
      {Cardinfo.map(rendercards)}
    </div>
  );
}

export default Top;
