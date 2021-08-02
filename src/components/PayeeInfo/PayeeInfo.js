import React, { Component } from 'react';
import Jsondata from '../Data/sample.json';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

const sampleData = Jsondata;

console.log("Hi", Jsondata)


class PayeeInfo extends Component{
    render(){
        return(
            <div>
                
{
    
    sampleData.map(({Payee, Payment, Remittance } )=>{
        return(
            
            <div>
                <ul>
                    <Card className="Payee-Card">
                    <Card.Header><p>Payee Name: {Payee.Name}</p></Card.Header>
                    <ListGroup.Item><p>Fax Number: {Payee.Fax}</p></ListGroup.Item>
                    <ListGroup.Item><p>Phone Number: {Payee.Phone}</p></ListGroup.Item>
                    <ListGroup.Item><p>Address 1: {Payee.Address.Address1}</p></ListGroup.Item>
                    <ListGroup.Item><p>Address 2: ""{Payee.Address.Address2}</p></ListGroup.Item>
                    <ListGroup.Item><p>City: {Payee.Address.City}</p></ListGroup.Item>
                    <ListGroup.Item><p>State or Province: {Payee.Address.StateOrProvince}</p></ListGroup.Item>
                    <ListGroup.Item><p>Country: {Payee.Address.Country}</p></ListGroup.Item>
                    <ListGroup.Item><p>Country: {Payee.Address.PostalCode}</p></ListGroup.Item>
                    </Card>
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
                   ))
                   
                   }
                    
                    
                
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