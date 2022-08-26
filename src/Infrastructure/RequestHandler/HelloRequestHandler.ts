import HelloCommand from '../../Application/Command/HelloCommand';
import HelloEvent from '../../Domain/Event/HelloEvent';
import RequestHandler from '../Contract/RequestHandler/RequestHandler';
import HelloCommandHandler from '../../Application/CommandHandler/HelloCommandHandler';
import { Logger } from 'tslog';

export default class HelloRequestHandler implements RequestHandler<HelloEvent> {
    public static inject = ['HelloCommandHandler', 'Logger'] as const;
    constructor(private commandHandler: HelloCommandHandler, private logger: Logger) {}

    public async handle(event: HelloEvent): Promise<void> {
        const command = new HelloCommand();
        this.logger.info(`Sending command`, command);
        await this.commandHandler.handle(command);
    }

    public supports(event: object): boolean {
        return event instanceof HelloEvent;
    }
}
