// 1. Melakukan Looping Menggunakan While
var num1 = 2

console.log('LOOPING PERTAMA')
while (num1<=20){
    if(num1%2==0){
        console.log(num1+' - I love coding')
    }
    num1++
}

var num2 = 20

console.log('LOOPING KEDUA')
while (num2>=2){
    if(num2%2==0){
        console.log(num2+' - I love coding')
    }
    num2--
}

// 2. Melakukan Looping Menggunakan For
var lim = 20
console.log('LOOPING PERTAMA')
for(var i=1; i<=lim; i++){
    console.log(i+ ' - I love coding')
}
console.log('LOOPING KEDUA')
for(i=lim; i>=1; i--){
    console.log(i+' - I will become fullstack developer')
}
// 3. Angka Ganjil dan Genap
for(var i=1; i<=100; i++){
    if(i%2==0){
        console.log('GENAP')
    }else{
        console.log('GANJIL')
    }
}

// 4. Kelipatan 3,6,10
for(var i=1; i<=100; i+=2){
    if(i%3==0){
        console.log(i+' Kelipatan 3')
    }
}
for(var i=1; i<=100; i+=5){
    if(i%6==0){
        console.log(i+' Kelipatan 6')
    }
}
for(var i=1; i<=100; i+=9){
    if(i%10==0){
        console.log(i+' Kelipatan 10')
    }
}