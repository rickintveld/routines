export default interface EmailConfig {
    user: string;
    password: string;
    host: string;
    port: number;
    tls: boolean;
    authTimeout: number;
}
