import Event from '../Contract/Event/Event';

export default class HelloEvent implements Event {
    alias: string;

    constructor() {
        this.alias = 'hello';
    }
}
