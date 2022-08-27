import Event from '../Contract/Event/Event';
import HelloEvent from '../Event/HelloEvent';
import EmailEvent from '../Event/EmailEvent';
import WeatherEvent from '../Event/WeatherEvent';

const eventTypes: Array<Event> = [new HelloEvent(), new EmailEvent(), new WeatherEvent()];

export default eventTypes;
