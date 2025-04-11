import { useContext, useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query';
import { fetchCoinData } from "../../services/fetchCoinData";
import { CurrencyContext } from "../../context/currencyContext";
// import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable() {

       const { currency } = useContext(CurrencyContext);

       const [page, setPage] = useState(1);

       const { data, isPending, isError, error } = useQuery({
              queryKey: ['coins', page, currency],
              queryFn: () => fetchCoinData(page, currency),
              // retry: 2,
              // retryDelay: 1000,
              cacheTime: 1000 * 60 * 2,
              staleTime: 1000 * 60 * 2,
       });

       useEffect(() => {
              console.log(data);
       }, [data]);

       if (isError) {
              return <div>Error: {error.message}</div>
       }

       return (
              // <div>CoinTable <button onClick={() => setPage(page + 1)}>Click</button> {page} </div>
              // <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
              //        <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
              //               {/* Header of the table */}
              //               <div className="basis-[35%]">
              //                      Coin
              //               </div>
              //               <div className="basis-[25%]">
              //                      Price
              //               </div>
              //               <div className="basis-[20%]">
              //                      24h change
              //               </div>
              //               <div className="basis-[20%]">
              //                      Market Cap
              //               </div>
              //        </div>

              //        <div className="flex flex-col w-[80w] mx-auto">
              //               {data && data.map((coin) => {
              //                      return (
              //                             <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer gap-3">
              //                                    <div className="flex items-center justify-start gap-3 basis-[35%]">
              //                                           <div className="w-[5rem] h-[5rem]">
              //                                                  <img src={coin.image} className="w-full h-full" />
              //                                           </div>

              //                                           <div className="flex flex-col">
              //                                                  <div className="text-3xl">{coin.name}</div>
              //                                                  <div className="text-xl">{coin.symbol}</div>
              //                                           </div>
              //                                    </div>
              //                                    <div className="basis-[25%]">
              //                                           {coin.high_24h}
              //                                    </div>
              //                                    <div className="basis-[20%]">
              //                                           {coin.price_change_24h}
              //                                    </div>
              //                                    <div className="basis-[20%]">
              //                                           {coin.market_cap}
              //                                    </div>

              //                             </div>
              //                      );
              //               })}

              //        </div>

              // </div>
              <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                     {/* Header of the table */}
                     <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-between">
                            <div className="basis-[35%] text-center">
                                   Coin
                            </div>
                            <div className="basis-[25%] text-center">
                                   Price
                            </div>
                            <div className="basis-[20%] text-center">
                                   24h Change
                            </div>
                            <div className="basis-[20%] text-center">
                                   Market Cap
                            </div>
                     </div>

                     {/* Coin Data */}
                     <div className="flex flex-col w-[80vw] mx-auto">
                            {isPending && <div>Loadding...</div>}
                            {data && data.map((coin) => (
                                   <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer gap-3">
                                          {/* Coin Info */}
                                          <div className="flex items-center justify-start gap-3 basis-[35%]">
                                                 <div className="w-[5rem] h-[5rem]">
                                                        <img src={coin.image} className="w-full h-full" />
                                                 </div>
                                                 <div className="flex flex-col">
                                                        <div className="text-3xl">{coin.name}</div>
                                                        <div className="text-xl">{coin.symbol}</div>
                                                 </div>
                                          </div>

                                          {/* Coin Details */}
                                          <div className="basis-[25%] text-center">
                                                 ${coin.current_price}
                                          </div>
                                          <div className="basis-[20%] text-center">
                                                 {coin.price_change_24h}%
                                          </div>
                                          <div className="basis-[20%] text-center">
                                                 ${coin.market_cap}
                                          </div>
                                   </div>
                            ))}
                     </div>

                     <div className="flex gap-4 justify-center items-center">
                            <button
                                   disabled={page === 1}
                                   onClick={() => setPage(page - 1)}
                                   className="btn btn-primary btn-wide text-white text-2xl"
                            >
                                   Prev
                            </button>

                            <button
                                   onClick={() => setPage(page + 1)}
                                   className="btn btn-secondary btn-wide text-white text-2xl"
                            >
                                   Next
                            </button>
                     </div>
              </div>

       )
}

export default CoinTable