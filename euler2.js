
// First number of Fib sequence
var x=1 
// Second number of Fib sequence
var y=2
// using z to change values later on
var z=0
var sum=0


while (x<4000000) {
	if(x%2===0) {
	sum+=x;
	}
	// Here is where we change the values of x, y, z 

	z=x+y;
	x=y;
	y=z;
}
console.log(sum);