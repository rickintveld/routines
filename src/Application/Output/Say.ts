import say from 'say';

export default class Say {
    public speak(text: string): void {
        say.speak(text);
    }
}
