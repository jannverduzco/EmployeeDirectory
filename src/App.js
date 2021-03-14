import React, { Component } from "react";
import API from "../utils/API";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeDisplay from "./components/EmployeeDisplay";

class App extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.filterEmployees("employees");
  }

  filterEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  // return (
  //   <div>
  //     <Wrapper>
  //       <Container>
  //         <EmployeeSearch />
  //         <EmployeeDisplay />
  //       </Container>
  //     </Wrapper>
  //     <Footer />
  //   </div>
  // );
}

export default App;
