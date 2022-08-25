import Routines from './Infrastructure/Routines';
import ServiceProvider from './Infrastructure/Provider/ServiceProvider';

const routines = new Routines();
const serviceProvider = new ServiceProvider();

serviceProvider.register();
routines.start();
