// qustion number 1
// the vale of ++a is:11
// now the vale of a is:11
// var a = 10;
// console.log(++a) the value after add 1
// console.log(a) the vale of a is 11
// ++a = 11
// a   = 11

// the vale of a++ is:11
// now the vale of a is:12
// var a = 11;
// console.log(a++) the vlue of a++ is 11 + 1 = 12
// console.log(a) the vale of a is 12
// a++ = 11
// a   = 12


// the vale of --a is:11
// now the vale of a is:11
// var a = 12;
// console.log(--a) the value after minuse 1 --a = 11
// console.log(a) the vale of a is 11
// --a = 11
// a   = 11

// the vale of a-- is:11
// now the vale of a is:10
// var a = 11;
// console.log(--a) the last value of  --a = 11 - 1 = 10
// console.log(a) the vale of a is 11
// a-- = 11
// a   = 10







// question number 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
            //    1  -  0 +  1  + 1
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// var res = --a;
// var res =  1;

// var res = --a - --b;
// var res =   1 -   0;

// var res = --a - --b + ++b;
// var res =   1 -   0 +  1;
// var res =   1  +  1

// var res = --a - --b + ++b + b--;
// as we now --a - --b + ++b is 1 + 1 = 2
// var res =         2       + 1
// var res =   3

// a = 1
// b = 0
// result;t = 3


// question number 3 & 4

// var userName = prompt("enter user name:");
 
// if(userName){
//     alert("Hello," + " " + userName + " " + "welcom to my page");
// }


// question number 5
// var userInput = prompt("plese enter a number for multiplication table" , 5);
// alert(userInput)

// for(var i = 1; i <=10 ; i++){
//     document.write(userInput + " X " + i + " = " , i * userInput, "<br> <br>")
// }

// question number 6(a)
// var subject1 = prompt("enter the 1st subject:");
// var subject1 = prompt("enter the 2nd subject:");
// var subject1 = prompt("enter the 3rd subject:");

// console.log("Subject 1: " + subject1);
// console.log("Subject 2: " + subject2);
// console.log("Subject 3: " + subject3);

// question number 6(b)


// // Total marks for each subject
// var totalMarksPerSubject = 100;

// // Display the subjects and total marks to the console
// console.log("Subject 1: " + subject1 + " - Total Marks: " + totalMarksPerSubject);
// console.log("Subject 2: " + subject2 + " - Total Marks: " + totalMarksPerSubject);
// console.log("Subject 3: " + subject3 + " - Total Marks: " + totalMarksPerSubject);


// question number 6(c)


// user to input obtained marks for the first subject
// var obtainedMarksSubject1 = prompt("Enter the obtained marks for " + subject1 + ":");

// Convert obtained marks to a number
// obtainedMarksSubject1 = Number(obtainedMarksSubject1);

// subjects, total marks, and obtained marks
// console.log("Subject 1: " + subject1 + " - Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject1);
// console.log("Subject 2: " + subject2 + " - Total Marks: " + totalMarksPerSubject);
// console.log("Subject 3: " + subject3 + " - Total Marks: " + totalMarksPerSubject);

// question number 6 (d)



// //  obtained marks for each subject
// var obtainedMarksSubject1 = prompt("Enter the obtained marks for " + subject1 + ":");
// var obtainedMarksSubject2 = prompt("Enter the obtained marks for " + subject2 + ":");
// var obtainedMarksSubject3 = prompt("Enter the obtained marks for " + subject3 + ":");

// // obtained marks to numbers
// obtainedMarksSubject1 = Number(obtainedMarksSubject1);
// obtainedMarksSubject2 = Number(obtainedMarksSubject2);
// obtainedMarksSubject3 = Number(obtainedMarksSubject3);

// // subjects, total marks, and obtained marks to the console
// console.log("Subject 1: " + subject1 + " - Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject1);
// console.log("Subject 2: " + subject2 + " - Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject2);
// console.log("Subject 3: " + subject3 + " - Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject3);


// question number 6(e)


// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
var totalPossibleMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainedMarks / totalPossibleMarks) * 100;

  // table  results
  document.write('<table>');
  document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>');
  document.write('<tr><td>' + subject1 + '</td><td>' + totalMarksPerSubject + '</td><td>' + obtainedMarksSubject1 + '</td></tr>');
  document.write('<tr><td>' + subject2 + '</td><td>' + totalMarksPerSubject + '</td><td>' + obtainedMarksSubject2 + '</td></tr>');
  document.write('<tr><td>' + subject3 + '</td><td>' + totalMarksPerSubject + '</td><td>' + obtainedMarksSubject3 + '</td></tr>');
  document.write('<tr><td><strong>Total</strong></td><td><strong>' + totalPossibleMarks + '</strong></td><td><strong>' + totalObtainedMarks + '</strong></td></tr>');
  document.write('<tr><td colspan="3"><strong>Percentage: ' + percentage.toFixed(2) + '%</strong></td></tr>');