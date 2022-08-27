import Event from '../../Domain/Contract/Event/Event';
import HelloRequestHandler from './HelloRequestHandler';
import EmailRequestHandler from './EmailRequestHandler';
import RequestHandler from '../Contract/RequestHandler/RequestHandler';
import { Logger } from 'tslog';

export default class RequestHandlerCollection {
    public static inject = ['HelloRequestHandler', 'EmailRequestHandler', 'Logger'] as const;
    private collection: Array<object> = [];

    constructor(
        private helloRequestHandler: HelloRequestHandler,
        private emailRequestHandler: EmailRequestHandler,
        private logger: Logger
    ) {
        this.collection.push(helloRequestHandler);
        this.collection.push(emailRequestHandler);
    }

    public async handle(event: Event): Promise<void> {
        this.collection.forEach((requestHandler: RequestHandler<Event>) => {
            if (requestHandler.supports(event)) {
                this.logger.info(`Handle event`, event);
                requestHandler.handle(event);
            }
        });
    }
}
