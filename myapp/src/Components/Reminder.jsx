import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Reminder() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center text-black vh-100">
      <h1 className="fw-bold">Reminder Page</h1>
      <p className="fs-5">Set reminders for important tasks and deadlines.</p>
      <Form className="w-100" style={{ maxWidth: "500px" }}>
        <Form.Group controlId="formTask" className="mb-3 text-start">
          <Form.Label className="fw-bold">Task Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your task" />
        </Form.Group>
        <Form.Group controlId="formDeadline" className="mb-3 text-start">
          <Form.Label className="fw-bold">Deadline</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Set Reminder
        </Button>
      </Form>
    </Container>
  );
}

export default Reminder;
