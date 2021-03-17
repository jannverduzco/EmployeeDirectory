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
      .then((res) => {
        console.log("res.data.results", res.data.results);
        this.setState({
          results: res.data.results,
          filteredResults: res.data.results,
        });
      })
      .then(() => {
        console.log("this.state.results", this.state.results);
      })
      .catch((err) => console.log(err));
  };

  renderResults = () => {
    return this.state.filteredResults.map((results, idx) => {
      return (
        <div className="row" key={idx}>
          <img src={results.picture.thumbnail} alt="image"></img>
          <div className="col-sm">
            Name {results.name.first}
            {results.name.last}
          </div>
          <div className="col-sm"> {results.email}</div>
          <div className="col-sm"> {results.cell}</div>
          <div className="col-sm">{results.dob.age}</div>
          <div className="col-sm"> {results.location.state}</div>
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
