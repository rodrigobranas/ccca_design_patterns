import User from "./User";

export default class UserBuilder {
    private name: string;
    private age?: number;
    private phone?: string;
    private address?: string;

    constructor(name: string) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }
    setAge(value: number): UserBuilder {
        this.age = value;
        return this;
    }
    get Age() {
        return this.age;
    }
    setPhone(value: string): UserBuilder {
        this.phone = value;
        return this;
    }
    get Phone() {
        return this.phone;
    }
    setAddress(value: string): UserBuilder {
        this.address = value;
        return this;
    }
    get Address() {
        return this.address;
    }

    build(): User {
        return new User(this);
    }
}
