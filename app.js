// questiion = 1

// var time = new Date();
// document.write(time)
 
// question = 2

// var num = new Date();
// var num1 = num.getMonth();
// document.write(num1)
  
// question = 3

//  var num = new Date().toString();
//  var num1 = num.slice(0,3);
//  alert(num1)



// question = 4

//  var myDate = new Date();
//  var num1 = myDate.getDay();
//  if(myDate.getDay() == 6 || myDate.getDay() == 0) 
 
//  alert('It’s Fun day');
//  document.write(num1)


//  question = 5
 
//  var d = new Date();
//   var num2 = d.setMonth();

//   if (num2 === 15){
//       alert("First fifteen  days of the month")
//   }
//   else{
//     alert("Last days of the month")
//   }






// question = 6

// //  var time = new Date();
// //  document.write("current date:" + time +"<br>")

// var num = new Date();
//  var num2 = num.getTime();
// var num1 = num.getMilliseconds()
// var num3 = num2+num1
// document.write("Elapsed millisecond since 1,1970:"+num3 +"<br>") 

// var num = new Date();
// var num1 = num.getTime();
// document.write("Elapsed minutes since 1,1970:"+num1 ) 

// question 7

//  var num = new Date();
//  var num1 = num.getTime();

//  if (num1 === "AM"){
//           alert("Its AM")
//       }
//       else{
//         alert("its PM")
//       }


// question = 8

// var now = new Date();
// now.setDate(29);
// now.setMonth(10)
// now.setFullYear(2021)
// document.write("Later Date :" +now)




// question = 9

// var past = new Date();
// var tim = past.getTime()
//     // console.log(newd)
//     var now = new Date("April 24 ,2020");
//     var ti = now.getTime()
//     var dif = tim - ti;
//      var flor = Math.floor(dif/(1000 * 60 *60*24) )
     
//     document.write(flor + " days have past since 1st Ramadan , 2020")
    
// question = 10 

// var now = new Date().getTime()
// var pas = new Date("june 20 ,2015").getTime()
// var sub = now - pas
// document.write("on ref date " +new Date() +" , <br> "+ sub + "sec had passed since beginning of 2015")


// // question = 12
// var now = new Date().getFullYear()
// var sec = new Date().getFullYear() - 100
 
// console.log(now + " "+sec)


// question = 13


// var past = new Date(prompt('enter ur age like may 4 , 2000'));
// var tim = past.getTime()
//     // console.log(newd)
//     var now = new Date();
//     var ti = now.getTime()
//     var dif = ti - tim;
//      var flor = Math.floor(dif/(1000 * 60 *60*24*30*12) )
     
//     document.write(flor + " is your age")



// question = 14

// var user = prompt('enter ur name ')
// var arr =["jan" ,"fab","mar","apr","may","jun","jul","aug","sep","oct","nov" ,"dec"]
// var mon = new Date ().getMonth()
// var mn = arr[mon]
// var num = 232
// var num2 = 16  
// var total = num+num2
// var late = total + 70
// document.write("Customer name : " + user + + "<br>" + " Month : " + mn +" <br> " + "Number of Unit :  "+ num +"<br>" + "Charges per unit : " + num2  + "<br> " + "<br>" + "Net amount payable ( " + new Date().toLocaleDateString() + "): " + total + "<br>" + 'Gros amount payable after due date ( ' + new Date(11 / 21 ).toLocaleDateString(2021))  