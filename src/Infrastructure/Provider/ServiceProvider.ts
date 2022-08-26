import { createInjector, Injector } from 'typed-inject';
import HelloCommandHandler from '../../Application/CommandHandler/HelloCommandHandler';
import eventTypes from '../../Domain/Types/EventTypes';
import HelloRequestHandler from '../RequestHandler/HelloRequestHandler';
import RequestHandlerCollection from '../RequestHandler/RequestHandlerCollection';
import Routine from '../Routine';

export default class ServiceProvider {
    public register() {
        const injector = createInjector()
            .provideValue('EventTypes', eventTypes)
            .provideClass('HelloCommandHandler', HelloCommandHandler)
            .provideClass('HelloRequestHandler', HelloRequestHandler)
            .provideClass('RequestHandlerCollection', RequestHandlerCollection)
            .provideClass('Routine', Routine);

        return injector;
    }
}
