import CommandHandler from './CommandHandler';
import EmailCommand from '../Command/EmailCommand';

export default class EmailCommandHandler extends CommandHandler<EmailCommand> {
    public async execute(command: EmailCommand): Promise<string> {
        return `You've got ${command.total()} new emails`;
    }
}
