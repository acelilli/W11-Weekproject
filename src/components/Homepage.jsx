// piccolo carosello
// npm install react-slick --save
// // npm install slick-carousel --save
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";
import AlbumsGallery from "./AlbumsGallery";
//single album card

const Homepage = () => {
  return (
    <Container fluid className="px-4">
      <Row>
        <Col sm={12}>
          <h2>Kpop</h2>
        </Col>
        <Col>
          <AlbumsGallery searchQuery="twice, blackpink, ive, lesserafim, g-idle" />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h2>JMusic</h2>
        </Col>
        <Col>
          <AlbumsGallery searchQuery="chanmina, bandmaid, official hige dandism, fuji kaze, kenshi yonezu" />
        </Col>
      </Row>
    </Container>
    //
  );
};
export default Homepage;
