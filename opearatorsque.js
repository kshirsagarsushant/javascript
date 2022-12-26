//que 1. Add two Numbers//
return a+b; 
//que 2.Find if the conditions are obeyed or not? //
{
if(a<10 && a>b){
return true;
}
else {
return false
}
};

/*que 3.You are given two numbers  A and B. you need to do the following checks:
if both are divisible by 10 console true.
if both are not divisible by 10 console false.
if one of them only is divisible by 10 console true.
Use operator to do this.*/

public class operatorque{
public static void main(String args[]){
if(A%10==0 && B%10==0){
console.log("true");
}
else if(A%10!=0 && B%10!=0){
 console.log("false");
}
else if(A%10==0 || B%10!= 0){
console.log("true");
  }  
}
}

//que 4. Find the first digit of a 4 digit number//
const First_Digit = (n) => {
return (n-n%1000)/1000
};

//que 4. Find the last digit of a 4 digit number//
const First_Digit = (n) => {
return n%10;
};

//que 5. find the reminder//
const Find_the_remainder = (a,b) => {
return b%a;
};

// que 6.multiple two numbers//
const Multiply_two_number = (a,b) => {
return a*b;
};

// marks calculator //
const Sum = (A, B, C) => 
{
 return A+B+c;
};
const Average = (A, B, C) => 
{
  return (A+B+C)/3;
};

