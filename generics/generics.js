function identity(arg) {
    return arg;
}
console.log(identity("hola"));
var a = identity("hola");
//a = identity<string>(3);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
// Generic function types
var myIdentity = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
var myIdentity4 = identity;
// Generic classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
console.log(myGenericNumber.add(2, 3));
