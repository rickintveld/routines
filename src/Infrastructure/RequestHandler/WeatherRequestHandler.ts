import WeatherCommand from '../../Application/Command/WeatherCommand';
import WeatherEvent from '../../Domain/Event/WeatherEvent';
import RequestHandler from '../Contract/RequestHandler/RequestHandler';
import WeatherCommandHandler from '../../Application/CommandHandler/WeatherCommandHandler';
import WeatherRepository from '../Repository/Api/Weather/WeatherRepository';

export default class WeatherRequestHandler implements RequestHandler<WeatherEvent> {
    public static inject = ['WeatherCommandHandler', 'WeatherRepository'] as const;

    constructor(private commandHandler: WeatherCommandHandler, private weatherRepository: WeatherRepository) {}

    public async handle(event: WeatherEvent): Promise<void> {
        const weather = await this.weatherRepository.fetch();

        const command = new WeatherCommand(weather);
        await this.commandHandler.handle(command);
    }

    public supports(event: object): boolean {
        return event instanceof WeatherEvent;
    }
}
