class Customer {
    private name: string;
    private isVip: boolean;

    constructor (name: string, isVip: boolean) {
        this.name = name;
        this.isVip = isVip;
    }
}

class Customer {
    constructor (private name: string, private isVip: boolean){}
}

