import CommandHandler from './CommandHandler';
import HelloCommand from '../Command/HelloCommand';

export default class HelloCommandHandler extends CommandHandler<HelloCommand> {
    public async execute(command: HelloCommand): Promise<string> {
        return command.output();
    }
}
