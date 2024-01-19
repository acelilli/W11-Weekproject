import React from "react";
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact";
import { Col } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults, searchSongs } from "../redux/actions";

//Trovata questa sidebar: npm install --save cdbreact
// e customizzata
const SpotifyNav = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSearchResults(query));
  }

  // return
  return (
    <>
      <Col className="sidebar d-flex flex-column h-100">
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
              <Form onSubmit={handleSubmit} className="input-group mt-3">
                <Form.Control
                  type="text"
                  id="searchField"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <Button variant="outline-secondary" className="h-100" type="submit">
                  GO
                </Button>
              </Form>
            </CDBSidebarMenuItem>
            {/* </div> */}
          </CDBSidebarMenu>
        </CDBSidebar>
        {/* </div> */}
      </Col>
    </>
  );
};

export default SpotifyNav;
