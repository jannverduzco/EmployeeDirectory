import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import "./style.css";

class EmployeeSearch extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = () => {
    API.getEmployees()
      .then((res) =>
        this.setState({
          results: res.data.results,
          filteredResults: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  renderResults = () => {
    return this.state.filteredResults.map((results) => {
      return (
        <div className="row">
          <img src={results.picture.thumbnail} alt="image"></img>
          {/* <div className="col-sm">Name {results.name.first}{results.name.last}</div>
          <div className="col-sm">Email {results.email}</div>
          <div className="col-sm">Phone {results.cell}</div>
          <div className="col-sm">Date of Birth {results.dob}</div>
          <div className="col-sm">State {results.location.state}</div> */}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <SearchForm />
        {this.renderResults()}
      </div>
    );
  }
}
export default EmployeeSearch;
