export default abstract class CommandHandler<T> {
    public async handle(command: T): Promise<void> {
        await this.updateState(command, 'Pending');

        try {
            await this.execute(command);
        } catch (e) {
            const output = await this.updateState(command, 'Failed');
            // let the terminal speak the output
        }

        await this.updateState(command, 'Finished');
    }

    protected abstract execute(command: T): Promise<string>;

    private async updateState(command: T, state: State): Promise<void> {
        // save command state in redis
    }
}

type State = 'Pending' | 'Finished' | 'Failed';
