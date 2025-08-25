import React, { useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Link } from "react-router-dom";
export default function Nav() {
  const [isopen,setisOpen]= useState(false)
  function handleclick(){
    setisOpen(!isopen)
  }
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#6EA1CC",
          padding: "10px",
        }}
        fluid
        rounded
      >
        <NavbarBrand>
          <Link to="/Home" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Hurghada Fun
          </Link>
        </NavbarBrand>
        <div className="flex  md:order-2">
          <Button
            onClick={() => {
              window.open("https://wa.me/+2001010536102", "_blank");
            }}
            style={{
              cursor: "pointer",
              backgroundColor: "green",
            }}
          >
            To Book
          </Button>
          <NavbarToggle className="ms-12 bg-white" />
        </div>
        <NavbarCollapse onClick={()=>{
          handleclick()
        }} className="`{}`">
          
          <Link
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/Home"
            active
          >
            Home
          </Link>
          <Link
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/About"
          >
            About
          </Link>
          <Link
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/Contact"
          >
            Contact 
          </Link>
          <Link
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/RateUs"
          >
            Rate_Us
          </Link>
        </NavbarCollapse>
      </Navbar>
    </>
  ); 
}
