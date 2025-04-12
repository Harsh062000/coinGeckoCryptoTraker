// import { useState } from "react"
// import { CurrencyContext } from "./context/currencyContext";
import Routing from "./components/Routing/Routing";

function App() {

  // const [currency, setCurrency] = useState("usd");

  return (
    <>
      {/* <CurrencyContext.Provider value={{ currency, setCurrency }}> */}
      <Routing />
      {/* </CurrencyContext.Provider> */}
    </>
  )
}

export default App
