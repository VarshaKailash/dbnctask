// use repl.it to run 
// Logic - function definition 
function Logic(x: number):null {
    if (x % 22 == 0) {
        console.log('candybar');
    }
    else if (x % 2 == 0) {
        console.log('candy');
    } else if (x % 11 == 0){
        console.log('bar');
    } else {
        console.log(String(x));
    }
    return null;
} 

// Driver code

// Input : 0 => Expected output : candybar
Logic(0);

// Input : 22 => Expected output : candybar
Logic(22);

// Input : 8 => Expected output : candy
Logic(8);

// Input : 33 => Expected output : bar
Logic(33);

// Input : 264 => Expected output : candybar
Logic(264);

// Input : 13 => Expected output : 13
Logic(13);

