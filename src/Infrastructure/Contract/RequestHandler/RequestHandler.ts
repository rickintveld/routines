export default interface RequestHandler<T> {
    handle(event: T): Promise<void>;
    supports(event: object): boolean;
}
