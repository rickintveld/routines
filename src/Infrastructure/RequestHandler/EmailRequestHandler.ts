import EmailCommand from '../../Application/Command/EmailCommand';
import EmailEvent from '../../Domain/Event/EmailEvent';
import RequestHandler from '../Contract/RequestHandler/RequestHandler';
import EmailCommandHandler from '../../Application/CommandHandler/EmailCommandHandler';
import { Logger } from 'tslog';
import EmailRepository from '../Repository/Imap/EmailRepository';

export default class EmailRequestHandler implements RequestHandler<EmailEvent> {
    public static inject = ['EmailCommandHandler', 'EmailRepository', 'Logger'] as const;

    constructor(
        private commandHandler: EmailCommandHandler,
        private emailRepository: EmailRepository,
        private logger: Logger
    ) {}

    public async handle(event: EmailEvent): Promise<void> {
        const emails = await this.emailRepository.fetch();
        const command = new EmailCommand(emails.length);

        this.logger.info(`Sending command`, command);
        await this.commandHandler.handle(command);
    }

    public supports(event: object): boolean {
        return event instanceof EmailEvent;
    }
}
