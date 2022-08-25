import config from 'config';
import Routines from './Infrastructure/Routine';
import ServiceProvider from './Infrastructure/Provider/ServiceProvider';

const serviceProvider = new ServiceProvider();
serviceProvider.register();

if (process.argv.length < 2) {
    console.log('No routine given');
    process.exit(0);
}

const routines: string[] = config.get('parameters.routines');
const routine = process.argv.slice(2).shift();

if (routine in routines) {
    new Routines().start(routine);
} else {
    console.log(`No matching routine found for ${routine}`);
    process.exit(0);
}
