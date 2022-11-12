import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Top() {
  const cardInfo = [
    {
      image:
        "https://images.unsplash.com/photo-1625181067043-42eff3270801?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym95fHx8fHx8MTY2ODA2MzQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Akash",
      text: "Top First",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535927853242-fa2bde74fb7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybHx8fHx8fDE2NjgwNjM0MTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Anshika",
      text: "Top Second",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617339847756-976edbc411e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFkeXx8fHx8fDE2NjgwNjM1MzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "lavina",
      text: "Top Third",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558021212-de11490231be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHx8fHx8fDE2NjgwNjM1ODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Noor",
      text: "Top Fourth",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558443957-d056622df610?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVhY2hlcnx8fHx8fDE2NjgwNjM2MTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "Rubika",
      text: "Top Fifth",
    },
    {
      image:
        "https://images.unsplash.com/photo-1629845964841-7e4287c36c71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8dGhvcnx8fHx8fDE2NjgwNjM5Mzg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
      title: "lavanya",
      text: "Top Sixth",
    },
  ];
  return (
    <div className="colour mt-4">
      <div className="container">
        <div>
          <Row xs={1} md={3} className="g-4">
            {cardInfo.map((item, idx) => (
              <Col>
                <Card
                  className="container mt-3 p-4 shadow p-3 mb-5 bg-body rounded"
                  key={idx}
                >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body className="text-center">
                    <Card.Title className="text-primary">
                      {item.title}
                    </Card.Title>
                    <Card.Text style={{ fontWeight: "700" }}>
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
  );
}

export default Top;
