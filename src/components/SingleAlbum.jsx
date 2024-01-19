import React from "react";
import { Card } from "react-bootstrap";

const SingleAlbum = ({ artist, album }) => {
  return (
    <Card>
      <Card.Img variant="top" src={album.cover_medium} alt={`${artist} - ${album.title}`} />
      <Card.Body>
        <Card.Title>{album.title}</Card.Title>
        <Card.Text>{artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleAlbum;
