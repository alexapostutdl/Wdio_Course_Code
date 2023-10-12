import { faker } from '@faker-js/faker'

export default class RandomUserData {
    constructor() {
        this.randomUser = new RandomUser(
            faker.location.country(),
            faker.location.city(),
            faker.location.streetAddress(),
            faker.location.zipCode(),
            faker.phone.number()
        )
    }
}

class RandomUser {
    constructor(
        country,
        city,
        address,
        zipCode,
        phoneNumber
    ) {
        this.country = country,
        this.city = city,
        this.address = address,
        this.zipCode = zipCode,
        this.phoneNumber = phoneNumber
    }
}