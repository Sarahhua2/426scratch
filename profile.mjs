export class Profile {

    #name
    #email

    static #all_profiles = [];


    constructor (name, email) {
        this.#name = name;
        this.#email = email;
    }

    static create(data) {
        let p = new Profile(data.name, data.email);
        Profile.#all_profiles.push(p);
        
        return p;
    }

    static getProfiles() {
        return Profile.#all_profiles;
    }

    getName() {
        return this.#name
    } 
    
    getEmail() {
        return this.#email;
    }

}
