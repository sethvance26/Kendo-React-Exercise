import React, { Component } from 'react'
import Jsondata from '../Data/sample.json'


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
                    <br></br>
                    <li>Payee Name: {item.Payee.Name}</li>
                    <li>Fax Number: {item.Payee.Fax}</li>
                    <li>Phone Number: {item.Payee.Phone}</li>
                    <li>Address 1: {item.Payee.Address.Address1}</li>
                    <li>Address 2: ""{item.Payee.Address.Address2}</li>
                    <li>City: {item.Payee.Address.City}</li>
                    <li>State or Province: {item.Payee.Address.StateOrProvince}</li>
                    <li>Country: {item.Payee.Address.Country}</li>
                    <li>Country: {item.Payee.Address.PostalCode}</li>

                    <br></br>

                    <li>Attention: {item.Payee.Attention}</li>
                    <li>Attention: {item.Payee.SubmissionDate}</li>

                    <br></br>

                    <li>Payment-PAN: {item.Payment.PAN}</li>
                    <li>Payment-CVV: {item.Payment.CVV}</li>
                    <li>Payment-EXP: {item.Payment.Exp}</li>
                    
                    <br></br>   
                    <h3>New Payee Below</h3>
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