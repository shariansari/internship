import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Weak() {
  const cardInfo = [
    {
      image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFibGV8fHx8fHwxNjY4MDYzNjc4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Akash",
      text: "Top First",
    },
    {
      image: "https://images.unsplash.com/photo-1600353068867-5b4de71e3afb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlycm9yfHx8fHx8MTY2ODA2MzcwMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Anshika",
      text: "Top Second",
    },
    {
      image: "https://images.unsplash.com/photo-1578772732210-2e4678f141fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9vcnx8fHx8fDE2NjgwNjM3MjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "lavina",
      text: "Top Third",
    },
    {
      image: "https://images.unsplash.com/photo-1541870132-ecf16aeed15f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFuZGxlfHx8fHx8MTY2ODA2Mzc0MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Noor",
      text: "Top Fourth",
    },
    {
      image: "https://images.unsplash.com/photo-1506719040632-7d586470c936?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY2ODA2Mzc2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Rubika",
      text: "Top Fifth",
    },
    {
      image: "https://images.unsplash.com/photo-1514922130690-95dcdfbe563f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8TW9tc3x8fHx8fDE2NjgwNjM3ODU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
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