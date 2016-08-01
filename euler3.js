function prime (n) {
	for (var i = 2; i < n; i++) {
	if (n % i === 0) {
	return false;
	}
}
}

var numba= 600851475143;

for (var j=2; j < numba; j++) {
	if(numba%j===0 && prime(j)) {
	x=j;
	}
}
console.log(x);
