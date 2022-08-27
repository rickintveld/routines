import Command from '../../Domain/Command/Command';
import Weather from '../../Domain/Contract/Model/Weather';

export default class WeatherCommand implements Command {
    constructor(private weather: Weather) {}

    public output(): string {
        return `Today will be ${this.weather.description}. The temprature feelds like ${this.weather.feelsLike} degrees`;
    }
}
