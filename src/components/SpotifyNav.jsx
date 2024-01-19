import React from "react";
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import searchSongs, { setSearchResults } from "../redux/actions";

//Trovata questa sidebar: npm install --save cdbreact
// e customizzata
const SpotifyNav = () => {
  // Prendo il valore di searchValue dallo stato Redux
  //   const searchValue = useSelector((state) => state.search.searchValue);
  // Per le azioni redux == DISPATCH
  const dispatch = useDispatch();

  // Funzione gestore della ricerca
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchField.value;
    // Dispaccia l'azione di ricerca con il valore inserito
    dispatch(setSearchResults(inputValue));
  };

  // return
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#000" className="text-center">
        <CDBSidebarHeader>
          <a href="/" className="text-decoration-none" style={{ color: "inherit" }}>
            <img src={Logo} alt="logo Netflix" style={{ height: "6vmin" }} />
          </a>
        </CDBSidebarHeader>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem>
            {/* <div className="sidebar-btn-wrapper p-4 py-2"> */}
            <Link
              to="/"
              className="d-flex align-items-center text-white mx-2 my-2 link-underline link-underline-opacity-0"
            >
              <HouseDoorFill className="me-2" />
              Home
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem>
            <Link
              to="/"
              className="d-flex align-items-center text-white mx-2 my-2 link-underline link-underline-opacity-0"
            >
              <BookFill className="me-2" />
              Your Library
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                size="sm"
                type="search"
                placeholder="Search"
                className="me-0 rounded-start rounded-0 mt-2"
                aria-label="Search"
                // value={useSelector((state) => state.search.searchValue)}
                onChange={(e) => dispatch(setSearchResults(e.target.value))} // Dispatch diretto di l'azione
              />
              <Button size="sm" className="rounded-end rounded-0 mt-2" variant="outline-secondary" type="submit">
                GO
              </Button>
            </Form>
          </CDBSidebarMenuItem>
          {/* </div> */}
        </CDBSidebarMenu>
      </CDBSidebar>
    </div>
  );
};

export default SpotifyNav;
