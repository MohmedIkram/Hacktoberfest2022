import React, {useState} from 'react';
import Icon from "./components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Button, Row, Col, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMsg("");
    itemArray.fill("empty");
  }

  const checkIsWinner = () => {
    if( itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[1] &&
        itemArray[1] === itemArray[2]
    ){
      setWinMsg(`${itemArray[0]} wins`);
    } else if(
        itemArray[3] !== "empty" &&
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5]
    ){
      setWinMsg(`${itemArray[3]} wins`);
    } else if(
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
  ){
    setWinMsg(`${itemArray[6]} wins`);
  } else if(
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[3] &&
    itemArray[3] === itemArray[6]
  ){
    setWinMsg(`${itemArray[0]} wins`);
  } else if(
    itemArray[1] !== "empty" &&
    itemArray[1] === itemArray[4] &&
    itemArray[4] === itemArray[7]
  ){
    setWinMsg(`${itemArray[1]} wins`);
  } else if(
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[5] &&
    itemArray[5] === itemArray[8]
  ){
    setWinMsg(`${itemArray[2]} wins`);
  } else if(
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[4] &&
    itemArray[4] === itemArray[8]
  ){
    setWinMsg(`${itemArray[0]} wins`);
  } else if(
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[4] &&
    itemArray[4] === itemArray[6]
  ){
    setWinMsg(`${itemArray[2]} wins`);
  }
  }

  const changeItem = (itemNumber) => {
    if(winMsg){
      return toast(winMsg, {type: "success"});
    }
    else if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross": "circle";
      setIsCross(!isCross);
    } else{
      return toast("Already filled!", {type: "error"});
    }
    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={4} className="offset-md-4">
          {winMsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-centre text-uppercase">
                {winMsg}
              </h1>
              <Button color="success" onClick={reloadGame}>
                  Reload The Game
              </Button>
            </div>
          ) : (
              <h1 className="text-centre text-uppercase">
                {isCross ? "Cross" : "Circle"}'s turn.
              </h1>
          )}
          <div className='grid'>
              {itemArray.map((item, index) => (
                  <Card onClick={ () => {changeItem(index)}}>
                    <CardBody className="box">
                      <Icon name={item}/>
                    </CardBody>
                  </Card>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
