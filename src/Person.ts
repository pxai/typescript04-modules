class Person {
    name: string;
    
    constructor (name: string) {
        this.name = name;
    }
    
    greet () : string {
        return 'Hello, my name is ' + this.name;
    }
}

export { Person };
