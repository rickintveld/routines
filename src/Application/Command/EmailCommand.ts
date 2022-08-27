import Command from '../../Domain/Command/Command';

export default class EmailCommand implements Command {
    constructor(private amount: number) {}

    public total(): number {
        return this.amount;
    }
}
