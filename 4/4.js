"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let index = 1; index <= 20; index++) {
  let count = index;
  let strS = "";
  do {
    strS += "x";
    count--;
  } while (count > 0);
  console.log(strS);
}

// for (let index = 1; index <= 20; index++) {
//   let count = index;

// //   do {
// //     strS += "x";
// //     count--;
// //   } while (count > 0);
//   console.log(strS);
// }
