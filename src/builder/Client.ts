import UserBuilder from "./UserBuilder";

const user = new UserBuilder("John")
    .setAge(18)
    .setPhone("99 999999999")
    .setAddress("Ocean Dr. 1000")
    .build();

console.log(user);
