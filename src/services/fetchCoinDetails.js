import axiosInstance from "../helpers/axiosInstances";

export async function fetchCoinDetails(id) {

       try {

              const response = await axiosInstance.get(`/coins/${id}`);
              // console.log(response);
              return response.data;

       } catch (error) {
              console.log(error);
              return error;
       }
}