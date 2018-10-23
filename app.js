/*Create a for loop that will iterate through 100 numbers starting from 1 and do the following:

if the number is a multiple of 3, it will console.log "fizz",
if the number is a multiple of 5, it will console.log "buzz",  
if the number is a multiple of 3 and 5, it will console.log "fizzBuzz"
*/

for (var i = 1; i <= 100; i++) {
      //    The statement with the && operator needs to be the first statement because it would be skipped over if it were checked last.
      if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FIZZbuzz: ${i}`);

      } else if (i % 3 === 0) {
            console.log(`FIZZ: ${i}`);

      } else if (i % 5 === 0) {
            console.log(`buzz: ${i}`);
      }

}
