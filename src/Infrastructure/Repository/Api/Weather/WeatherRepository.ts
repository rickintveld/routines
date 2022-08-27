import axios from 'axios';
import config from 'config';
import { Logger } from 'tslog/dist/types/Logger';
import Weather from '../../../../Domain/Contract/Model/Weather';

export default class WeatherRepository {
    public static inject = ['Logger'] as const;

    constructor(private logger: Logger) {}

    public async fetch(): Promise<Weather> {
        const url = new URL(
            String(config.get('parameters.weather.baseUrl')).replace(
                'API_KEY',
                String(config.get('parameters.weather.apiKey'))
            )
        );

        try {
            const weather = await axios.get(url.href).then((result) => {
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
        } catch (error) {
            if (axios.isAxiosError(error)) {
                this.logger.warn(`Axios error: ${error.message}`);
            }

            this.logger.fatal(`Error occured: ${error.message}`);
        }
    }
}
