import axiosInstance from "../helpers/axiosInstances";

export async function fetchCoinData(page = 1, currency = 'usd') {

       const perPage = 10;
       try {

              const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_dec&per_page=${perPage}&page=${page}`);
              // console.log(response);
              return response;

       } catch (error) {
              console.log(error);
              return error;
       }
}