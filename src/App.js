import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import EmployeeSearch from "./components/EmployeeSearch";
import Wrapper from "./components/Wrapper";

function App() {
  return (
      <Wrapper>
        <Header />
        <Container>
          <EmployeeSearch />
        </Container>
        <Footer />
      </Wrapper>
  );
}

export default App;
