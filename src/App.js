// The React is the module that we required in all the Components
// {useState} is added for using the States in React
import React, { useState } from "react";
// This is to import the Icon Component 
import Icon from "./components/Icon"
// for importing the ToastContainer and Toast and the CSS files
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// For Boostraping some elements from ReactStrap
import { Card, CardBody, Button, Container, Col, Row } from "reactstrap";
// Adding the CSS files
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Array used for storing the values
const itemArray = new Array(9).fill("empty");

function App() {
  // two states we using 
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  // function to reload the game
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  //function to check if the game is finished or not
  const checkIsWinner = () => {
    if (itemArray[0] !== "empty" && itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2]) {
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5]) {
      setWinMessage(`${itemArray[3]} wins`)
    }
    else if (itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8]) {
      setWinMessage(`${itemArray[6]} wins`)
    }
    else if (itemArray[0] !== "empty" && itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6]) {
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (itemArray[1] !== "empty" && itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7]) {
      setWinMessage(`${itemArray[1]} wins`)
    }
    else if (itemArray[2] !== "empty" && itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8]) {
      setWinMessage(`${itemArray[8]} wins`)
    }
    else if (itemArray[0] !== "empty" && itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8]) {
      setWinMessage(`${itemArray[3]} wins`)
    }
    else if (itemArray[2] !== "empty" && itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6]) {
      setWinMessage(`${itemArray[3]} wins`)
    }
  }

  //function to handle the change of items
  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    }
    else {
      return toast("Already Filled", { type: "error" })
    }
    checkIsWinner();
  }

  return (
    <div style={{ backgroundImage: `url("https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png")`, height: "750px" }} >

      <Container className="p-5" >
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mt-4 mb-2">
                <h1 className="text-success text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button color="success" style={{ marginLeft: "240px" }} block onClick={reloadGame}>
                  Reload Game
              </Button>
              </div>) : (
              <h1 className="text-warning text-center">
                {isCross ? "Cross" : "Circle"} turns
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card onClick={() => changeItem(index)} color="" className="cards">
                  <CardBody className="box" >
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
