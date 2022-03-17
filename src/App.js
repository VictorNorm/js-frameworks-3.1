import "./App.css";
import Nav from "./components/Nav";
import Container from "./components/layout/Container";

function App() {
  return (
    <div>
      <Container className="container">
        <Nav />
        <p>App</p>
        <div>Environment: {process.env.NODE_ENV}</div>
      </Container>
    </div>
  );
}

export default App;
