// since one is integer but JavaScript will try to make the  integer into string too. 1 + "2" + "2" = "122"
console.log(1 + "2" + "2");

// + or - operand in front of a string converts it to number.1 + 2 + "2" = 32
console.log(1 + +"2" + "2");
// + or - operand in front of a string converts it to number.therefore it will become 1 - 1 + "2" = 02
console.log(1 + -"1" + "2");

//  + or - operand in front of a string converts it to number.1+1+"2" = 1 +"1" + "2" = 112
console.log(+"1" + "1" + "2");

// since A-B is not possible therefore NaN + "2" = NaN2
console.log("A" - "B" + "2");

// since A-B is not possible therefore NaN + 2 = NaN
console.log("A" - "B" + 2);
