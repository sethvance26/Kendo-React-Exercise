import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import orders from '../Data/sample.json';
import { process } from "@progress/kendo-data-query";

const DATE_FORMAT = "yyyy-mm-dd hh:mm:ss.SSS";

const DetailComponent = (props) => {
  const dataItem = props.dataItem;
  
  return (
    <div>
      <section
        style={{
          width: "200px",
          float: "left",
        }}
      >
        <div className="details-view">
          <div className="details-view-element">
            <h4>Address</h4>
            <p>
              <strong>Street Address 1:</strong> {dataItem.Payee.Address.Address1}
            </p>
            <p>
              <strong>Street Address 2:</strong> {dataItem.Payee.Address.Address2}
            </p>
            <p>
              <strong>City:</strong> {dataItem.Payee.Address.City}
            </p>
            <p>
              <strong>State or Province:</strong> {dataItem.Payee.Address.StateOrProvince}
            </p>
            <p>
              <strong>Country:</strong> {dataItem.Payee.Address.Country}
            </p>
            <p>
              <strong>Postal Code:</strong> {dataItem.Payee.Address.PostalCode}
            </p>
          </div>

          <div className="details-view-element">
            <h4>Payment</h4>
            <p>
              <strong>PAN:</strong> {dataItem.Payment.PAN}
            </p>
            <p>
              <strong>CVV:</strong> {dataItem.Payment.CVV}
            </p>
            <p>
              <strong>Expired Date:</strong> {dataItem.Payment.Exp}
            </p>
          </div>
          <Grid
        style={{
          minWidth:"50vw"
        }}
        data={dataItem.Remittance}
      />
        </div>
      </section>
    
    </div>
  );
};



const GridPage = () => {
  
  const [dataState, setDataState] = React.useState({
    skip: 0,
    take: 20,
    sort: [
      
    ],
    group: [
     
    ],
  });

  const [dataResult, setDataResult] = React.useState(
    process(orders, dataState)
  );
  
  const dataStateChange = (event) => {
    setDataResult(process(orders, event.dataState));
    setDataState(event.dataState);
  };

  const expandChange = event => {
    const isExpanded = event.dataItem.expanded === undefined ? event.dataItem.aggregates : event.dataItem.expanded;
    event.dataItem.expanded = !isExpanded;
    setDataResult({ ...dataResult });
    
  };

  console.log("orders", orders);

  return (
  <div>
    <Grid style={{
      width: "100vw",
      height: "95vh"
    }} sortable={true} filterable={true} groupable={true} reorderable={true} pageable={{
      buttonCount: 4,
      pageSizes: true
      }} data={dataResult} {...dataState} detail={DetailComponent} onDataStateChange={dataStateChange} expandField="expanded" onExpandChange={expandChange}>
      <GridColumn  field="Payee.Name" title="Payee Name" />
      <GridColumn field="Payee.Fax" title="Payee Fax Number"  />
      <GridColumn field="Payee.Phone" title="Payee Phone Number" />
      <GridColumn field="Payee.Attention" title="Payee Attention" filter="numeric"  />
      <GridColumn field="Payee.SubmissionDate" title="Payee Submission Date" filter="date" format="{0:yyyy/MM/dd}"  />
      
    
    </Grid>
  </div>
  )
}
  export default GridPage;
