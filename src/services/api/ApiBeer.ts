import axios from "axios"
import { errorCatch } from "./errorCatch";



axios.defaults.baseURL = "https://api.punkapi.com/v2/";


export const fetchBeerById = async (id: string ) => {
try {
    const { data } = await axios.get(`beers/${id}`);
    return data;
} catch (error) {
    errorCatch(error)
}
}