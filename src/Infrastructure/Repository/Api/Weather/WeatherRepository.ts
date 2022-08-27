import axios from 'axios';
import config from 'config';
import Weather from '../../../../Domain/Contract/Model/Weather';

export default class WeatherRepository {
    public async fetch(): Promise<Weather> {
        const uri = String(config.get('parameters.weather.baseUrl'));
        const apiKey = String(config.get('parameters.weather.apiKey'));

        const weather = await axios.get(uri.replace('API_KEY', apiKey)).then((result) => {
            const today = result.data.days.shift();

            return {
                description: today.description,
                minTemp: today.tempmin,
                maxTemp: today.tempmax,
                feelsLike: today.feelslike,
                sunRise: today.sunrise,
                sunSet: today.sunset,
                snow: today.snow,
            };
        });

        return weather;
    }
}
