import Event from '../Contract/Event/Event';

export default class EmailEvent implements Event {
    alias: string;

    constructor() {
        this.alias = 'email';
    }
}
