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
                    <li>Payee Name: {item.Payee.Name}</li>
                    <li>Payee Fax Number: {item.Payee.Fax}</li>
                    <li>Payee Phone Number: {item.Payee.Phone}</li>
              

                    
                        
                    

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