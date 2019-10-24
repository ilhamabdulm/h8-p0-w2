// 1. Menyusun Barisan Bintang
var rows1 = 5

for(var i=0; i<rows1; i++){
    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5

for(var i=0; i<rows1; i++){
    var str = ''
    for(var j=0; j<rows2; j++){
        str+='*'
    }
    console.log(str)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var temp = ''

for(var j=0; j<rows3; j++){
    temp+='*'
    console.log(temp)
}