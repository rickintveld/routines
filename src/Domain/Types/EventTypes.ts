import Event from '../Contract/Event/Event';
import HelloEvent from '../Event/HelloEvent';
import EmailEvent from '../Event/EmailEvent';

const eventTypes: Array<Event> = [new HelloEvent(), new EmailEvent()];

export default eventTypes;
