export default interface Weather {
    description: string;
    minTemp: number;
    maxTemp: number;
    feelsLike: number;
    sunRise: string;
    sunSet: string;
    snow: boolean;
}
