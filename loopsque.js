/* you have given a n integer your task is find out sum of digits//
let n= -3456;
let sum=0;
while(n!=0){
  let digit= n%10;
  sum +=digit;
  n= n/10;
  n= parseInt(n);
}
console.log(sum);

//difference between sum and product of digits//
let m= 544;
let summ=0;
let product=1;
while(m!=0){
  let digit= m%10;
  summ += digit;
  product = product*digit;
  m=m/10;
  m=parseInt(m);
}
console.log("differece"+ (product- summ));



//one more way to solve same question//
let z= 3434;
let s=0,p=1;
while(z!=0){
  let currentdigit=z%10;
  s+=currentdigit;
  p*=currentdigit;
  z=parseInt(z/10);
}
console.log(p-s );

// que 3. find the factorial of a number//
let a= -5;
factorial=1;
for(let i=1; i<=a;i--){
factorial= factorial* i;

}

if(a<0){
  console.log("negative value")
}
else{
console.log(factorial);
}
// for value 0 factorail will be one because it is 0 it will not get into loop.  as we entailized
//with one it will give that value//
// for negative value it will give undifined//

// differnce between sum of odd and sum of even numbers//
let q= 3456;
let odd=0;
let even=0;
while(q!=0){
  let digit= q%10;
  q=parseInt(q/10);
  if(digit%2==0){
    even=even+digit;
  }
else{
  odd=odd+digit;
}
}
if(odd-even<0){
  console.log(even-odd);
}
else{
  console.log(odd-even);
}
//que4. find difference between sum of odd and sum of of even number in digit  */
let n= 6;
let odd= 0;
let even= 0;
for(let i=1;i<=n;i++){
  if(i%2==0){
    even=even+i;
  }
  else{
    odd=odd+i;
  }
}
console.log(odd-even);