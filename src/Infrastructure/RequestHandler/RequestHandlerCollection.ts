import Event from '../../Domain/Contract/Event/Event';
import HelloRequestHandler from './HelloRequestHandler';
import RequestHandler from '../Contract/RequestHandler/RequestHandler';

export default class RequestHandlerCollection {
    public static inject = ['HelloRequestHandler'] as const;
    private collection: Array<object> = [];

    constructor(private helloRequestHandler: HelloRequestHandler) {
        this.collection.push(helloRequestHandler);
    }

    public async handle(event: Event): Promise<void> {
        this.collection.forEach((requestHandler: RequestHandler<Event>) => {
            if (requestHandler.supports(event)) {
                requestHandler.handle(event);
            }
        });
    }
}
