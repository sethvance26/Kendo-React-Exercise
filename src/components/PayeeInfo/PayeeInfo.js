import React, { Component } from 'react'
import Jsondata from '../Data/sample.json'
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

const sampleData = Jsondata;

console.log("Hi", Jsondata)


class PayeeInfo extends Component{
    render(){
        return(
            <div>
{
    sampleData.map((item)=>{
        return(
            <div>
                <ul>
                    <Card className="Payee-Card">
                    <Card.Header><p>Payee Name: {item.Payee.Name}</p></Card.Header>
                    <ListGroup.Item><p>Fax Number: {item.Payee.Fax}</p></ListGroup.Item>
                    <ListGroup.Item><p>Phone Number: {item.Payee.Phone}</p></ListGroup.Item>
                    <ListGroup.Item><p>Address 1: {item.Payee.Address.Address1}</p></ListGroup.Item>
                    <ListGroup.Item><p>Address 2: ""{item.Payee.Address.Address2}</p></ListGroup.Item>
                    <ListGroup.Item><p>City: {item.Payee.Address.City}</p></ListGroup.Item>
                    <ListGroup.Item><p>State or Province: {item.Payee.Address.StateOrProvince}</p></ListGroup.Item>
                    <ListGroup.Item><p>Country: {item.Payee.Address.Country}</p></ListGroup.Item>
                    <ListGroup.Item><p>Country: {item.Payee.Address.PostalCode}</p></ListGroup.Item>
                    </Card>
                    <br></br>

                    <li>Attention: {item.Payee.Attention}</li>
                    <li>Attention: {item.Payee.SubmissionDate}</li>

                    <br></br>

                    <li>Payment-PAN: {item.Payment.PAN}</li>
                    <li>Payment-CVV: {item.Payment.CVV}</li>
                    <li>Payment-EXP: {item.Payment.Exp}</li>

                    <br></br>   
                   
                    
                    {/* <li>[{item.Remittance}]</li> */}
                
                    

                </ul>
            </div>
        );
    })
}
            </div>
        )
    }
}



export default PayeeInfo