function identity<T>(arg: T): T{
    return arg;
}

console.log(identity("hola"));

let a = identity<string>("hola");

//a = identity<string>(3);

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T>{
    console.log(arg.length);
    return arg;
}

// Generic function types
let myIdentity:<T>(arg: T) => T = identity;

let myIdentity2: {<T>(arg: T): T} = identity;

// Generic interfaces
interface GenericIdentityFn{
    <T>(arg: T): T
}

let myIdentity3: GenericIdentityFn = identity;

// Interface with type
interface GenericIdentityFn2 <T>{
    <T>(arg: T): T
}

let myIdentity4: GenericIdentityFn2<number> = identity;

// Generic classes
class GenericNumber<T>{
     zeroValue: T;
     add: (a: T, b: T) => T;
     substract: {(a: T, b: T): T};
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (a, b) => a+ b;

// Constraits
interface Lengthwise{
    length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

loggingIdentity3(3);
loggingIdentity3({length: 3, a:2})

// Constraints between two parameters
function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

let x = {a:1, b:2, c:3}
getProperty(x, 'a');
getProperty(x, 'z');

// Class creation
function create<T>(c:{new(): T;}): T{
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag
createInstance(ZooKeeper)





