export default class Singleton {
    private static instance: Singleton;
    uid: number;

    private constructor() {
        this.uid = Math.floor(Math.random() * 100);
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
