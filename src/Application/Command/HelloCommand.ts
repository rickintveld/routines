import Command from '../../Domain/Command/Command';

export default class HelloCommand implements Command {
    dateTime: Date;

    constructor() {
        this.dateTime = new Date();
    }

    public output(): string {
        return `Good ${this.pieceOfTheDay()}`;
    }

    public hours(): number {
        return this.dateTime.getHours();
    }

    public morning(): string {
        return 'morning';
    }

    public afternoon(): string {
        return 'afternoon';
    }

    public evening(): string {
        return 'evening';
    }

    public pieceOfTheDay(): string {
        if (this.hours() < 12) {
            return this.morning();
        } else if (this.hours() < 18) {
            return this.afternoon();
        } else {
            return this.evening();
        }
    }
}
