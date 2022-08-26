import config from 'config';
import Event from '../Domain/Contract/Event/Event';
import RequestHandlerCollection from './RequestHandler/RequestHandlerCollection';

export default class Routine {
    public static inject = ['EventTypes', 'RequestHandlerCollection'] as const;

    constructor(private eventTypes: Array<Event>, private requestHandlerCollection: RequestHandlerCollection) {}

    public async start(routine: string): Promise<void> {
        const routines = config.get('parameters.routines');
        const events: Array<string> = routines[routine];

        for (const eventType of events) {
            const event = this.eventTypes.find((event) => event.alias === eventType);
            await this.requestHandlerCollection.handle(event);
        }
    }
}
