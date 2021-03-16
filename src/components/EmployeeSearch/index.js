import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeDisplayResults from "../EmployeeDisplayResults";
import "./style.css";

class EmployeeSearch extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          EmployeeDisplayResults: res.data.results,
          filteredResults: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  filterEmployees = (query) => {
    API.getEmployees(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <EmployeeDisplayResults>
        <div className="row">
          <div className="col-sm">Image</div>
          <div className="col-sm">Name</div>
          <div className="col-sm">Email</div>
          <div className="col-sm">Phone</div>
          <div className="col-sm">Date of Birth</div>
          <div className="col-sm">Address</div>
        </div>
      </EmployeeDisplayResults>
    );
  }
}

export default EmployeeSearch;
