import "./App.css";
import "./globalstyle.css"; // rip
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SpotifyNav from "./components/SpotifyNav";
// // import SearchPage from "./components/SearchPage";
import HomePage from "./components/Homepage";
import PlayerFooter from "./components/PlayerFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid className="py-0 my-0">
          <Row>
            <Col md={3} className="py-0">
              <SpotifyNav style={{ margin: 0, padding: 0 }} />
            </Col>
            <Col>
              <HomePage md={9} />
              {/* <Routes>
          </Routes>
          */}
            </Col>
          </Row>
          <PlayerFooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

// mi sovrascrive gli album in home, non sono riuscita a risolvere questo problema, mettendomi un artista o un'altro (invece di uno E un altro).
// No ricerca funzionante (non ho fatto la pagina di search)
// No gestione dei like nè canzone
// stile globale sparito per qualche motivo sconosciuto
// togliendo  il container la pagina si allarga, per ora l'ho mantenuto.
