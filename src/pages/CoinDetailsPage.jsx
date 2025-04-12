import { useParams } from "react-router-dom";



function CoinDetailsPage() {

       const { coinId } = useParams();

       return (
              <div>ConiDetails Page for {coinId}</div>
       )
}

export default CoinDetailsPage