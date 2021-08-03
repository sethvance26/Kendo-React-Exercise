import React, { Component } from 'react';
import Jsondata from '../Data/sample.json';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'


const sampleData = Jsondata;

console.log("Hi", Jsondata)


class PayeeInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Payees: []
        };
    }
    componentDidMount(){
        let payees = [];
        sampleData.forEach((element) => {
            payees.push(element.Payee);
        });

        this.setState({
            Payees: [...this.state.Payees, payees]
        })
        
    } 

    render(){
        console.log("Hello", this.state);
        return(
            <div>
                
{
    
    sampleData.map(({Payee, Payment, Remittance } )=>{
        return(
            
            <div>
                <ul>
                

                    <br></br>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Choose </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                     navbarScroll
                    >
                    <NavDropdown title="Payee By Name" id="navbarScrollingDropdown">
                   <li>Hi</li>
                    </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    <br></br>
                    
                    
                    <Card className="attention-payment">
                    <Card.Header>
                    <p>Attention: {Payee.Attention}</p>
                    <p>Attention: {Payee.SubmissionDate}</p>
                    </Card.Header>
                    

                    <ListGroup.Item><p>Payment-PAN: {Payment.PAN}</p></ListGroup.Item>
                    <ListGroup.Item> <p>Payment-CVV: {Payment.CVV}</p></ListGroup.Item>
                    <ListGroup.Item><p>Payment-EXP: {Payment.Exp}</p></ListGroup.Item>
                    </Card>
                    
                    <br></br>   
                   
                   {Remittance.map((Remittance) => (
                    <div className="remittance-cards">
                    <Card>
                    <Card.Header><p>Payor Name: {Remittance.PayorName}</p></Card.Header>
                    <ListGroup.Item><p>Invoice Number: {Remittance.InvoiceNo}</p></ListGroup.Item>
                    <ListGroup.Item><p>Description: {Remittance.Description}</p></ListGroup.Item>
                    <ListGroup.Item><p>Amount: {Remittance.Amount}</p></ListGroup.Item>
                    </Card>
                    <br></br>
                    </div>
                   ))}


                </ul>
            </div>
            
        );
    })
}
            </div>
        )
    }
}



export default PayeeInfo;