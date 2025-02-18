import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Resource() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center text-black vh-100">
      <h1 className="fw-bold">Resource Page</h1>
      <p className="fs-5">Access valuable resources to help you achieve your goals.</p>
      <Card className="my-4 w-100" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title className="fw-bold">Available Resources</Card.Title>
          <Card.Text>
            Explore the following resources:
            <ul className="text-start">
              <li>Guides & Documentation</li>
              <li>Case Studies</li>
              <li>Webinars and Workshops</li>
            </ul>
          </Card.Text>
          <Button variant="dark" className="w-100">View Resources</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Resource;
