import React from "react";
import { Card } from "react-bootstrap";

function Top() {
  const cardInfo = [
    {
      image: "https:/source.unsplash.com/random/200x200/?boy",
      title: "Akash",
      text: "he is good",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?girl",
      title: "Anshika",
      text: "he is second good",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?lady",
      title: "lavina",
      text: "he is third good",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?Men",
      title: "Noor",
      text: "he is forth good",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?teacher",
      title: "Rubika",
      text: "he is sixth good",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?Moms",
      title: "lavanya",
      text: "he is fifth good",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?toy",
      title: "lavanya",
      text: "he is fifth good",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?fish",
      title: "lavanya",
      text: "he is fifth good",
    },
  ];
  console.log(cardInfo, "shariq");

  return (
    <div className="row">
   {cardInfo.map((item,i) => {
       return  <div className="col-3 mt-3" > <Card  style={{ width: "18rem" }} key={i}>
          <Card.Img  variant="top" src={item.image} />
          <Card.Body  >
            <Card.Title  >{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
          </Card.Body>
        </Card></div>
      })}
    </div>
  );
}

export default Top;
