// piccolo carosello
// npm install react-slick --save
// // npm install slick-carousel --save
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AlbumsGallery from "./AlbumsGallery";
//single album card

const Homepage = ({ artistName }) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={10}>
          <h2>Kpop</h2>
        </Col>
        <Col sm={10}>
          <AlbumsGallery artistName="twice" />
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <h2>JMusic</h2>
        </Col>
        <Col sm={10}>
          <AlbumsGallery artistName="chanmina" />
        </Col>
      </Row>
    </Container>
    //
  );
};
export default Homepage;
