import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center text-black vh-100">
      <h1 className="fw-bold">Contact Us</h1>
      <p className="fs-5">If you have any questions, feel free to reach out to us.</p>
      <Card className="w-100 p-4 shadow" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title className="fw-bold mb-3">Get in Touch</Card.Title>
          <Form>
            <Form.Group controlId="formName" className="mb-3 text-start">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3 text-start">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3 text-start">
              <Form.Label className="fw-bold">Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="dark" className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
