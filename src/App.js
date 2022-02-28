// import logo from './logo.svg';
// import './App.css';
import './Portfolio.css';
import Head from "./Components/Head";
import Portfolio from "./Components/Portfolio";
import NewPortfolio from "./Components/NewPortfolio";

function App() {
  return (
    <>
      <header className="Portfolio-header">
        <Head/>
      </header>
      <body className="Portfolio-body">
        <Portfolio/>
      </body>
      {/* <NewPortfolio/> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Sofen Chowdhury Portfolio 
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
