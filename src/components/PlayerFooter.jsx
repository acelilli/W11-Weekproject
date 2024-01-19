import React from "react";
import {
  PlayFill,
  PauseFill,
  SkipForwardFill,
  SkipBackwardFill,
  VolumeUpFill,
  VolumeDownFill,
} from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";

const PlayerFooter = () => {
  return (
    <Container fluid>
      <Row
        className="justify-content-between align-items-center w-100"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <Col md={6}>
          <div>
            <h5>Song Title</h5>
            <p>Artist Name</p>
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <SkipBackwardFill className="mx-2" />
          <PlayFill className="mx-2" />
          <PauseFill className="mx-2" />
          <SkipForwardFill className="mx-2" />
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <VolumeDownFill className="mx-2" />
          <input type="range" className="form-range mx-2" />
          <VolumeUpFill className="mx-2" />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerFooter;
