import { Logger } from 'tslog';
import EmailCommand from '../../../src/Application/Command/EmailCommand';
import EmailCommandHandler from '../../../src/Application/CommandHandler/EmailCommandHandler';
import EmailEvent from '../../../src/Domain/Event/EmailEvent';

jest.mock('../../../src/Application/CommandHandler/EmailCommandHandler');

beforeEach(() => {
    EmailCommandHandler.mockClear();
});

describe('Handles the email request', () => {
    test('Calls the command handler successfull', async () => {});
});
