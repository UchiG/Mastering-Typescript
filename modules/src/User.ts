import type { Person } from "./types.js";
import { type Person, xyz } from "./types.js";

export class User implements Person {
    constructor(public name: string, public email: string) {}
    logout() {
        console.log(`User ${this.name} logged out`)
    }
}