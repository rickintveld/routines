import Command from './Command';

export default interface CommandBus {
    handle(command: Command): Promise<void>;
}
