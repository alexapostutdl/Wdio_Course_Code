import RandomUserData from "./data/randomUser.js";
import UserData from "./data/userData.js";

class Data {
    constructor() {
        this.userData = new UserData()
        this.randomUserData = new RandomUserData()
    }
}

export const data = new Data()