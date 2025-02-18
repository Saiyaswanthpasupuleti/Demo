import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Eligibility() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center text-black vh-100">
      <h1 className="fw-bold">Eligibility Page</h1>
      <p className="fs-5">Check your eligibility details here.</p>
      <Card className="my-4 w-100" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title className="fw-bold">Eligibility Criteria</Card.Title>
          <Card.Text>
            To be eligible for our program, please review the following:
            <ul className="text-start">
              <li>Must be a resident of the United States</li>
              <li>Age above 18</li>
              <li>Have a valid government-issued ID</li>
            </ul>
          </Card.Text>
          <Button variant="dark" className="w-100">Check Eligibility</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Eligibility;
