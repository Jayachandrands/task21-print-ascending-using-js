let a = 25;
let b = 30;
let c = 20;
function ascending(x,y,z){
if(x>y && x>z){
    if(y>z){
        console.log(z,y,x);
    }else{
        console.log(y,z,x);
    }
}if(y>z && y>x){
    if(x>z){
        console.log(z,x,y);
    }else{
        console.log(x,z,y);
    }
}if(z>x && z>y){
    if(x>y){
        console.log(y,x,z);
    }else{
        console.log(x,y,z);
    }
}
}
let result = ascending(a,b,c);
