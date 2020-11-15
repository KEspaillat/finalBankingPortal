import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import "../../styles/Dashboard.css"


function Home () {
    return (
        //Home component with 3 cards
        //One header and two content cards

      <div>
          <Card className="Header">
              <Card.Body>
                <h2>Home</h2>
              </Card.Body>
          </Card>

          <Card className="Content">
            <Card.Body>
                <h3>Bank Accounts</h3>
                <ListGroup>
                    <ListGroup.Item>Checking Account</ListGroup.Item>
                    <ListGroup.Item>Savings Account</ListGroup.Item>
                    <ListGroup.Item>Money Market Account</ListGroup.Item>
                </ListGroup>
            </Card.Body>
          </Card>

          <Card className="Content">
              <Card.Body>
                  <h3>Asset Summary</h3>
              </Card.Body>
          </Card>
      </div>  
    );
}

export default Home