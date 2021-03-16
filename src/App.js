import React from "react";
import Wrapper from "./Components/Wrapper";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import EmployeeSearch from "./Components/EmployeeSearch";

function App() {
  return (
    <div>
      <Wrapper />
      <Container>
        <EmployeeSearch />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
