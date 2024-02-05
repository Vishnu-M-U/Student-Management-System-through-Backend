import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center">
        <a className="navbar-brand mx-auto my-2" href="#">
          Student Management System
        </a>
        <form className="form-inline">
          <Link
            className="btn btn-outline-success mx-2 my-2 my-sm-0"
            type="submit"
            to="/adduser"
          >
            Add Student
          </Link>
        </form>
      </nav>
    </div>
  );
}
