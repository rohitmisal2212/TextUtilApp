import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  let removColor = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
  }


  let heloo = (colorName) => {
    removColor();

    document.body.classList.add("bg-" + colorName)

  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className="bg-primary rounded mx-1" onClick={() => { heloo("primary") }} style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
          <div className="bg-success rounded mx-1" onClick={() => { heloo("success") }} style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
          <div className="bg-danger rounded mx-1" onClick={() => { heloo("danger") }} style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
          <div className="bg-warning rounded ms-1 me-5" onClick={() => { heloo("warning") }} style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={` mx-2 form - check form-switch text-${props.mode === "light" ? "dark" : "light"} d-flex`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeTheme} />
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{props.mode} Mode On</label>
          </div>
        </div>
      </div>
    </nav >
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired,
};
// Navbar.defaultProps = {
//   title: "Set Title Here", aboutText: "set text Here",
// };
