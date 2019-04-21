import * as MyPrefix from "./Things";

const things = new MyPrefix.Things();

console.log(things.sayHello());

type SuperNumber = {
    value: number | string
    name?: string
}

const pi: SuperNumber = { value: 3.14, name: "PI"};
const e: SuperNumber = { value: "3.42" };

console.log(pi, e);

function hello (name: string | number): string {
    return 'Hello ' + name;
};
console.log(hello('World'));
console.log(hello(666));
console.log('ok, its done');