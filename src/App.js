import Header from "./components/Header";
import Transaction from "./components/Transaction";
import TransactionCharts from "./components/TransactionCharts";
import TransactionStatistics from "./components/TransactionStatistics";
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/transaction" component={Transaction}/>
      <Route path="/transaction-charts" component={TransactionCharts}/>
      <Route path="/transaction-statistics" component={TransactionStatistics}/>
    </BrowserRouter>
  );
}

export default App;
