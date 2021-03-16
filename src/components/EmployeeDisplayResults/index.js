import React from "react";

function EmployeeDisplayResults(props) {
  return (
    <div className="employeeDisplayResults">
      {props.children}
      <div className="row">
          <div className="col-sm">Image</div>
          <div className="col-sm">Name</div>
          <div className="col-sm">Email</div>
          <div className="col-sm">Phone</div>
          <div className="col-sm">Date of Birth</div>
          <div className="col-sm">Address</div>
        </div>
    </div>
  );
}
export default EmployeeDisplayResults;
