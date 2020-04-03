let index = 0;
const maxLength = 4;
// WHILE

// while (index < maxLength){
//     console.log(`index ke ${index}`);

//     index = index +1;

// }

// DO

// do {
//     console.log(`index ke ${index}`)
//     index++;
// }   while(index < maxLength)

// for (let nomor = 0; nomor < 10; nomor++){
//     if (nomor % 2 != 0){
//         continue;
//     }
//     console.log(`nomor ke ${nomor}`)
// }

const logMessage = function(pesan){
    console.log(pesan)
}

const logMessage2 = (pesan) => {
    console.log(pesan)
}

const logMessage3 = pesan => console.log(pesan)

const multiple = function(number){
    return number * number;
}

const nilai = multiple(5);
console.log (`nilai multiple dari 5 adalah ${nilai}`);

const multiple2 = (number) =>{
    return number * number;
}
const nilai2 = multiple2(6);
console.log (`nilai multiple2 dari 6 adalah ${nilai2}`);
