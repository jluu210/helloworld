var a = "hello world!";
b();

function c(){
    a = "new world!";
}
function b(){
    c();
    console.log(a);
}
