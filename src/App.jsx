import { useState } from "react"
import Banner from "./components/Banner/Banner"
import CoinTable from "./components/CoinTable/CoinTable"
import NavBar from "./components/NavBar/NavBar"

function App() {

  const [currency, setCurrency] = useState("usd");

  return (
    <>
      <NavBar setCurrency={setCurrency} />
      <Banner />
      <CoinTable currency={currency} />
    </>
  )
}

export default App
