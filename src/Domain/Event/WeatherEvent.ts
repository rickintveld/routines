import Event from '../Contract/Event/Event';

export default class WeatherEvent implements Event {
    alias: string;

    constructor() {
        this.alias = 'weather';
    }
}
