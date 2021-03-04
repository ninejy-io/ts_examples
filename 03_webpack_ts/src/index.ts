import { hi } from './m1'

function sum(a: number, b: number) :number {
    return a + b;
}

console.log(sum(123, 456));
console.log(hi);

let fn = (a: number, b: number) => a + b;

fn(123, 456);
fn(22, 33);

console.log(Promise);
