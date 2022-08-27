import HelloCommand from '../../Application/Command/HelloCommand';
import HelloEvent from '../../Domain/Event/HelloEvent';
import RequestHandler from '../Contract/RequestHandler/RequestHandler';
import HelloCommandHandler from '../../Application/CommandHandler/HelloCommandHandler';

export default class HelloRequestHandler implements RequestHandler<HelloEvent> {
    public static inject = ['HelloCommandHandler'] as const;
    constructor(private commandHandler: HelloCommandHandler) {}

    public async handle(event: HelloEvent): Promise<void> {
        const command = new HelloCommand();
        await this.commandHandler.handle(command);
    }

    public supports(event: object): boolean {
        return event instanceof HelloEvent;
    }
}
