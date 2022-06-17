export type EnvironmentType = NodeJS.ProcessEnv["NODE_ENV"];

export type ConfigValues = {
  API_BASE_URL: string
};

export type Config = { [key in EnvironmentType]: ConfigValues };

const environment: EnvironmentType = "development";

const config: Config = {
  development: {
    API_BASE_URL: "https://restcountries.com/v3.1"
  },
  production: {
    API_BASE_URL: "https://restcountries.com/v3.1"
  },
  test: {
    API_BASE_URL: "https://restcountries.com/v3.1"
  }
}

export default config[environment];