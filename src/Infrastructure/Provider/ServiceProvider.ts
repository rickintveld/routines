import { createInjector } from 'typed-inject';

export default class ServiceProvider {
    public register(): void {
        const injector = createInjector();
        // injector.provideClass('type', 'injectable className').injectClass('class for the injection');
    }
}
