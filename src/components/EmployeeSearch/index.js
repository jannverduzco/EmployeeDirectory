import React, { Component } from "react";
import API from "../utils/API";



class EmployeeSearch extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.filterEmployees("employees");
  }

  filterEmployees = (query) => {
    API.getEmployees(query)
      .then((res) => this.setState({ results: res.data}))
      .catch((err) => console.log(err));
  };
}

export default EmployeeSearch;