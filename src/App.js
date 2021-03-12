import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeDisplay from "./components/EmployeeDisplay";
import API from "./utils/API";

function App() {
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.getEmployees().then(res => {setEmployeeState(res.data.results)})
  }, []);
  return (
    <div>
      <Wrapper>
        <Container>
          <EmployeeSearch />
          <EmployeeDisplay />
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
