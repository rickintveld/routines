import config from 'config';
import ServiceProvider from './Infrastructure/Provider/ServiceProvider';
import Routine from './Infrastructure/Routine';

console.log('Binding all services...');
const provider = new ServiceProvider().register();

if (process.argv.length < 2) {
    console.log('No routine given');
    process.exit(0);
}

const routines: string[] = config.get('parameters.routines');
const routine = process.argv.slice(2).shift();

if (routine in routines) {
    const application: Routine = provider.resolve('Routine');
    application.start(routine);
} else {
    console.log(`No matching routine found for ${routine}`);
    process.exit(0);
}
