import { Logger } from 'tslog';

export default abstract class CommandHandler<T> {
    public static inject = ['Logger'] as const;

    constructor(private logger: Logger) {}

    public async handle(command: T): Promise<void> {
        this.logger.info('Update command state to: Pending');
        await this.updateState(command, 'Pending');

        try {
            const output = await this.execute(command);
            this.logger.info(output);
        } catch (e) {
            this.logger.error(e.message);
            this.logger.info('Update command state to: Failed');
            await this.updateState(command, 'Failed');
        }

        this.logger.info('Update command state to: Finished');
        await this.updateState(command, 'Finished');
    }

    protected abstract execute(command: T): Promise<string>;

    private async updateState(command: T, state: State): Promise<void> {
        // save command state in redis
    }
}

type State = 'Pending' | 'Finished' | 'Failed';
