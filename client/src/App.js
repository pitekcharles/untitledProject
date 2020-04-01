import React from 'react';
import AccountCreateForm from "./pages/AccountCreateForm";
import Container from "./Components/Container";
import Row from "./Components/Row";
import Column from "./Components/Column";

function App() {
  return (
    <Container>
      <Row>
        <Column colWidth="col-md-2"></Column>
      </Row>
      <Row>
        <Column colWidth="col-md-10">
          <AccountCreateForm />
        </Column>
      </Row>
    </Container>    
  );
}

export default App;
