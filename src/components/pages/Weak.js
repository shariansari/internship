import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Weak() {
  const cardInfo = [
    {
      image: "https:/source.unsplash.com/random/200x200/?table",
      title: "Akash",
      text: "Top First",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?mirror",
      title: "Anshika",
      text: "Top Second",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?door",
      title: "lavina",
      text: "Top Third",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?handle",
      title: "Noor",
      text: "Top Fourth",
    },
    {
      image: "https:/source.unsplash.com/random/200x200/?car",
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
    <div className='colour mt-4'>
    <div className='container'>
      <div>
        <Row xs={1} md={3} className="g-4">
      {cardInfo.map((item, idx) => (
        <Col> 
          <Card className='container mt-3 p-4 shadow p-3 mb-5 bg-body rounded' key={idx} >
            <Card.Img variant="top" src={item.image}/>
            <Card.Body className='text-center'>
              <Card.Title className='text-primary'>{item.title}</Card.Title>
              <Card.Text style={{fontWeight:"700"}}>
              {item.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>
    </div>
   
  )
}

export default Weak