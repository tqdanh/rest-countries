import axios, { AxiosInstance } from "axios";

import { Country } from "../../types";
import config from "../../config";

class CountryService {
  client: AxiosInstance;

  constructor(){
    this.client = axios.create({
      baseURL: config.countryBaseUrl
    });
  }

  async getAll(){
    var response = await this.client.post<Country[]>("/all");
    return response.data;
  }
}

export default CountryService;