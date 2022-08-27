import { createInjector } from 'typed-inject';
import { Logger } from 'tslog';
import eventTypes from '../../Domain/Types/EventTypes';
import EmailConfig from '../../Domain/Contract/Config/EmailConfig';
import HelloCommandHandler from '../../Application/CommandHandler/HelloCommandHandler';
import EmailCommandHandler from '../../Application/CommandHandler/EmailCommandHandler';
import WeatherCommandHandler from '../../Application/CommandHandler/WeatherCommandHandler';
import HelloRequestHandler from '../RequestHandler/HelloRequestHandler';
import EmailRequestHandler from '../RequestHandler/EmailRequestHandler';
import WeatherRequestHandler from '../RequestHandler/WeatherRequestHandler';
import RequestHandlerCollection from '../RequestHandler/RequestHandlerCollection';
import EmailRepository from '../Repository/Imap/EmailRepository';
import WeatherRepository from '../Repository/Api/Weather/WeatherRepository';
import Routine from '../Routine';
import Say from '../../Application/Output/Say';
import dotenv from 'dotenv';

export default class ServiceProvider {
    public register() {
        const dotenvConfig = dotenv.config().parsed;
        const injector = createInjector()
            .provideValue('EventTypes', eventTypes)
            .provideValue('EmailConfig', {
                user: dotenvConfig.EMAIL_ADDRESS,
                password: dotenvConfig.EMAIL_PASSWORD,
                host: dotenvConfig.EMAIL_HOST,
                port: Number(dotenvConfig.EMAIL_PORT),
                tls: Boolean(dotenvConfig.EMAIL_TLS),
                authTimeout: Number(dotenvConfig.EMAIL_AUTH_TIMEOUT),
            } as EmailConfig)
            .provideClass('Logger', Logger)
            .provideClass('Say', Say)
            .provideClass('EmailRepository', EmailRepository)
            .provideClass('WeatherRepository', WeatherRepository)
            .provideClass('HelloCommandHandler', HelloCommandHandler)
            .provideClass('EmailCommandHandler', EmailCommandHandler)
            .provideClass('WeatherCommandHandler', WeatherCommandHandler)
            .provideClass('HelloRequestHandler', HelloRequestHandler)
            .provideClass('EmailRequestHandler', EmailRequestHandler)
            .provideClass('WeatherRequestHandler', WeatherRequestHandler)
            .provideClass('RequestHandlerCollection', RequestHandlerCollection)
            .provideClass('Routine', Routine);

        return injector;
    }
}
