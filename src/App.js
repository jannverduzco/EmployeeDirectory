import React from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import EmployeeSearch from "./Components/EmployeeSearch";
import Wrapper from "./Wrapper";

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
