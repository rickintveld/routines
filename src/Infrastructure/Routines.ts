import Application from '../Domain/Application';

export default class Routines implements Application {
    public async start(): Promise<void> {
        console.log('start');
    }
}
