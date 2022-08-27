import CommandHandler from './CommandHandler';
import WeatherCommand from '../Command/WeatherCommand';

export default class WeatherCommandHandler extends CommandHandler<WeatherCommand> {
    public async execute(command: WeatherCommand): Promise<string> {
        return command.output();
    }
}
