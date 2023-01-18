import getAxios from "../utils/getAxios";

const axios = getAxios();

export const getWeather = () => axios.get("/WeatherForecast");
