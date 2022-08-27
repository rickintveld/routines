import ImapSimple from 'imap-simple';
import EmailConfig from '../../../Domain/Contract/Config/EmailConfig';
import Email from '../../../Domain/Contract/Model/Email';

export default class EmailRepository {
    public static inject = ['EmailConfig'] as const;

    constructor(private emailConfig: EmailConfig) {}

    public async fetch(): Promise<Array<Email>> {
        const emails: Array<Email> = [];

        const connection = await ImapSimple.connect({ imap: this.emailConfig });
        await connection.openBox('INBOX').then(() => {
            const searchCriteria = ['UNSEEN'];

            const fetchOptions = {
                bodies: ['HEADER', 'TEXT'],
                markSeen: false,
            };

            return connection.search(searchCriteria, fetchOptions).then((results) => {
                const subjects = results.map((result) => {
                    return result.parts.filter((part) => {
                        return part.which === 'HEADER';
                    })[0].body.subject[0];
                });

                subjects.forEach((subject) => {
                    emails.push({
                        address: '',
                        name: '',
                        subject,
                    });
                });
            });
        });

        await connection.end();

        return emails;
    }
}
