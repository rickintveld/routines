export default abstract class CommandHandler<T> {
    public async handle(command: T): Promise<void> {
        await this.updateState(command, 'Pending');

        try {
            await this.execute(command);
        } catch (e) {
            await this.updateState(command, 'Failed');
        }

        await this.updateState(command, 'Finished');
    }

    protected abstract execute(command: T): Promise<void>;

    private async updateState(command: T, state: State): Promise<void> {
        // save command state in redis
    }
}

type State = 'Pending' | 'Finished' | 'Failed';
