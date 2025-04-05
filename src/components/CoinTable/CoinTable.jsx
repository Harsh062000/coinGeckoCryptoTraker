import { useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query';
import { fetchCoinData } from "../../services/fetchCoinData";
// import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable() {

       // useEffect(() => {
       //        fetchCoinData(1, 'usd');
       // }, []);

       const [page, setPage] = useState(1);
       // useQuery(['coins'], () => {
       //        fetchCoinData(page, 'usd'), {
       //               retry: 2,
       //               retryDelay: 1000,
       //        }
       // });

       const { data, isPending, isError, error } = useQuery({
              queryKey: ['coins', page],
              queryFn: () => fetchCoinData(page, 'usd'),
              retry: 2,
              retryDelay: 1000,
              cacheTime: 1000 * 60 * 2,
       });

       useEffect(() => {
              console.log(data);
       }, [data]);

       if (isPending) {
              return <div>Loadding...</div>
       }

       if (isError) {
              return <div>Error: {error.message}</div>
       }

       return (
              <div>CoinTable <button onClick={() => setPage(page + 1)}>Click</button> {page} </div>
       )
}

export default CoinTable