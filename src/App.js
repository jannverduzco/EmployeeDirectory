import React from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import EmployeeSearch from "./Components/EmployeeSearch";

function App() {
  return (
    <div>
     <Header />
      <Container>
        <EmployeeSearch />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
