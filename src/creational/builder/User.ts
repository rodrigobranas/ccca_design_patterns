import UserBuilder from "./UserBuilder";

export default class User {
        private name: string;
        private age: number | undefined;
        private phone: string | undefined;
        private address: string | undefined;

        constructor(builder: UserBuilder) {
            this.name = builder.Name;
            this.age = builder.Age;
            this.phone = builder.Phone;
            this.address = builder.Address
        }

        get Name() {
            return this.name;
        }
        get Age() {
            return this.age;
        }
        get Phone() {
            return this.phone;
        }
        get Address() {
            return this.address;
        }
    }