import axios, { AxiosInstance } from "axios";

import { Country } from "../../types";
import config from "../../config";

class CountryService {
  client: AxiosInstance;

  constructor(){
    this.client = axios.create({
      baseURL: config.API_BASE_URL
    });
  }

  async getAll(){
    var response = await this.client.get<Country[]>("/all");
    return response.data;
  }
}

export default CountryService;