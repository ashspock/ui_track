//  Date is a built-in object which is used to create a Date instance. Date instance can be created using new Date();
/**
 * new Date();
 * new Date(value);
 * new Date(dateString);
 */

 //     built-in objects -> array/ date and custom objects
// console.log(new Date());  //    system date 2021-02-09T08:53:03.220Z
// console.log(typeof new Date());  //    object

// methods
// let currentDate = new Date();
// console.log(currentDate.toLocaleDateString()); // 9/2/2021 // () important 
// console.log(currentDate, typeof currentDate); // 2021-02-09T08:56:15.655Z object

//custom date // 12th Nov 2020
// let customDate = new Date('2020/11/12'); // YYYY-MM-DD or YYYY/MM/DD
// console.log('Custom Date ', customDate.toLocaleString()); // Custom Date  12/11/2020, 12:00:00 am

// in Chrome
// new Date()
// Tue Feb 09 2021 14:34:49 GMT+0530 (India Standard Time)
// new Date('2018/10/14')
// Sun Oct 14 2018 00:00:00 GMT+0530 (India Standard Time)
// let date1 = new Date('2018/11/10');
// undefined
// let date2 = new Date('2019/1/1');
// undefined
// date2 > date1
// true
// new Date('2022/02/01') > new Date('1998/2/2')
// true
// let currentDate = new Date();
// undefined
// let customDate = new Date('2021/02/09');
// undefined
// currentDate
// Tue Feb 09 2021 14:45:36 GMT+0530 (India Standard Time)
// customDate
// Tue Feb 09 2021 00:00:00 GMT+0530 (India Standard Time)
// customDate < currentDate
// true // also includes time comparison
// 
// currentDate.setHours(0,0,0,0)
// 1612809000000
// currentDate
// Tue Feb 09 2021 00:00:00 GMT+0530 (India Standard Time)
// currentDate <= customDate
// true

//** comparison of 2 dates
// let date1 = new Date('2018/11/10');
// let date2 = new Date('2019/1/1');
// console.log(date1 > date2); // false

// let currentDate = new Date(); // in browser environment
// currentDate.setHours(0,0,0,0);
// let customDate = new Date('2021/02/09');
// console.log(customDate >= currentDate); // true

let currentDate = new Date(); // in node environment
let customDate = new Date('2021/02/09');
console.log(customDate >= currentDate); // false

