import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Month() {
  const cardInfo = [
    {
      image: "https://images.unsplash.com/photo-1629003493933-662e48475e89?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8YmF0bWFufHx8fHx8MTY2ODA2MzgzNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Akash",
      text: "Top First",
    },
    {
      image: "https://images.unsplash.com/photo-1582260914608-51456c78d2e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BpZGVybWFufHx8fHx8MTY2ODA2Mzg1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Anshika",
      text: "Top Second",
    },
    {
      image: "https://images.unsplash.com/photo-1608889335681-943464862d95?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8aXJvbm1hbnx8fHx8fDE2NjgwNjM4NzU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "lavina",
      text: "Top Third",
    },
    {
      image: "https://images.unsplash.com/photo-1566924213788-2d32ac4f861e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8a3Jpc2h8fHx8fHwxNjY4MDYzODk2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Noor",
      text: "Top Fourth",
    },
    {
      image: "https://images.unsplash.com/photo-1541121546531-7c09149f6181?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VwZXJtYW58fHx8fHwxNjY4MDYzOTE3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Rubika",
      text: "Top Fifth",
    },
    {
      image: "https://images.unsplash.com/photo-1629845964841-7e4287c36c71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8dGhvcnx8fHx8fDE2NjgwNjM5Mzg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
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
          <Card className='container mt-3 p-4container mt-3 p-4 shadow p-3 mb-5 bg-body rounded' key={idx}>
            <Card.Img variant="top" src={item.image}/>
            <Card.Body className='text-center'>
              <Card.Title className='text-primary'>{item.title}</Card.Title>
              <Card.Text  style={{fontWeight:"700"}}>
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

export default Month