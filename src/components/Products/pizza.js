import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import DashboardCustomizeSharpIcon from "@mui/icons-material/DashboardCustomizeSharp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./pizza.css";

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varients, setVarients] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        margin: "20px",
        textAlign: "center",
      }}
      className="shadow-lg p-3 mb-1 bg-black rounded"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          alt="pizza"
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
        <div>
          <button className="btn">
            <span>
              Customize <DashboardCustomizeSharpIcon />
            </span>
            <div></div>
          </button>
        </div>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <FormControl sx={{ m: 1, minWidth: 90 }} error>
            <InputLabel id="demo-simple-select-error-label">Size</InputLabel>
            <Select
              style={{ color: "white" }}
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={varients}
              onChange={(e) => {
                setVarients(e.target.value);
              }}
            >
              {pizza.varients.map((varients) => {
                return <MenuItem value={varients}>{varients}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>

        <div className="w-100 m-1">
          <FormControl sx={{ m: 1, minWidth: 90 }} error>
            <InputLabel
              style={{ color: "white" }}
              id="demo-simple-select-error-label"
            >
              Quantity
            </InputLabel>
            <Select
              style={{ color: "white" }}
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <MenuItem value={i + 1}>{i + 1}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <h1 className="mt-1">
            price: ₹{pizza.prices[0][varients] * quantity}
          </h1>
        </div>
        <div className="w-100 m-1">
          <button className="btn">
            Add to cart <AddShoppingCartSharpIcon />
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            alt="pizza"
            className="img-fluid"
            style={{ height: "400px", width: "400px" }}
            src={pizza.image}
          />
          <p>{pizza.description}</p>
          <div className="flex-container">
            <div className="w-100 m-1">
              <p className="m-1">Select crust</p>
              <select className="form-control">
                {pizza.Base.map((Base) => {
                  return <option value={Base}>{Base}</option>;
                })}
              </select>
            </div>
            <div className="w-100 m-1">
              <p className="m-1">Select Cheese</p>
              <select className="form-control">
                {pizza.cheese.map((cheese) => {
                  return <option value={cheese}>{cheese}</option>;
                })}
              </select>
            </div>
          </div>
          <p className="mt-5">Add Toppings :</p>
          <div className="flex-container">
            <div className="w-100 m-1">
              <p className="m-1">Add Veg Toppings</p>
              <select className="form-control">
                {pizza.veggies.map((veggies) => {
                  return <option value={veggies}>{veggies}</option>;
                })}
              </select>
            </div>
            <div className="w-100 m-1">
              <p className="m-1">Add Non-veg Toppings</p>
              <select className="form-control">
                {pizza.meat.map((meat) => {
                  return <option value={meat}>{meat}</option>;
                })}
              </select>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn">
            Add to cart <AddShoppingCartSharpIcon />
          </button>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
