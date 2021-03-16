import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeDisplayResults from "../EmployeeDisplayResults";
import SearchForm from "../SearchForm";
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
      <div>
    <SearchForm />
    <EmployeeDisplayResults />
    </div>
    );
  }
}

export default EmployeeSearch;
