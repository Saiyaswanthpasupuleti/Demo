import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css"; // Import custom CSS file

function About() {
  return (
    <div className="about-page">
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
        {/* Welcome Section - Profile image left, text right */}
        <div className="welcome-section d-flex align-items-center p-4 square-box fade-in">
          <Image
            src="https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc="
            roundedCircle
            className="profile-img mb-3 hover-img"
          />
          <div className="ml-4 text-right welcome-text">
            <h5 className="mt-3">Hello, Welcome 🎉</h5>
            <h6 className="mb-4">John Weak</h6>
            <Button className="contact-btn" variant="warning">
              Contact Me
            </Button>
          </div>
        </div>

        {/* About Us Section */}
        <div className="about-section text-center px-3 fade-in">
          <h3 className="about-title">About Us</h3>
          <Image
            src="https://www.shutterstock.com/image-photo/portrait-handsome-man-black-suit-600nw-460050457.jpg"
            fluid
            className="about-img rounded mb-4"
          />
          <p className="about-text">
            We are a team of dedicated professionals driven by creativity,
            innovation, and a passion for exceptional design. With years of
            expertise in mobile application and website design, we specialize in
            transforming ideas into captivating digital experiences that seamlessly
            combine functionality and aesthetics.
          </p>
          <p className="about-text">
            At the core of our work is our mastery of modern design tools like
            Figma, which allows us to bring concepts to life with precision and
            style. We take pride in crafting user-centric designs that are
            intuitive, visually appealing, and optimized for performance.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
