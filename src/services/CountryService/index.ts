import axios, { AxiosInstance } from "axios";

import { Country } from "../../types";
import config from "../../config";

class CountryService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: config.API_BASE_URL
    });
  }

  async getAll() {
    var response = await this.client.get<Country[]>("/all");
    return response.data;
  }

  async getByName(name: string) {
    var response = await this.client.get<Country[]>(`/name/${name}?fullText=true`);
    return response.data[0];
  }
}

export default CountryService;