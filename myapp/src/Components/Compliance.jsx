import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Compliance() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center text-black vh-100">
      <h1 className="fw-bold">Compliance Page</h1>
      <p className="fs-5">
        Ensure that your company complies with all necessary regulations.
      </p>
      <Card className="my-4 w-100" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title className="fw-bold">Compliance Checklist</Card.Title>
          <Card.Text>
            Ensure you have reviewed the following compliance standards:
            <ul className="text-start">
              <li>Data Privacy Policies</li>
              <li>Security Protocols</li>
              <li>Employee Certifications</li>
            </ul>
          </Card.Text>
          <Button variant="dark" className="w-100">
            Download Full Compliance Guide
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Compliance;
