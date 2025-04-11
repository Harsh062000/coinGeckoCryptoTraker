import { useState } from "react"
// import Banner from "./components/Banner/Banner"
// import CoinTable from "./components/CoinTable/CoinTable"
// import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home";
import { CurrencyContext } from "./context/currencyContext";

function App() {

  const [currency, setCurrency] = useState("usd");

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Home />
      </CurrencyContext.Provider>
    </>
  )
}

export default App
