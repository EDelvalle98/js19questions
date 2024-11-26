function print(output){
    document.write(output);
    document.write(`<br />`)
}

const names = ["Efrain","Angel","Eli","Eddy","Jaro","Marc","Justin","Varun","Barca","Marquel"];
const ints = [1,2,3,4,5,6,7,8,9,10];

    //Question 1
    function getLastIndex(names) {
        return names.length - 1;
    }

    //Question 2
    function getSecondToLastIndex(names) {
           return names.length -2;
    }

    //Question 3
    function getFirstElement(names) {
        return names[0];
    }

    //Question 4
    function getLastElement(names) {
         return names[names.length - 1];

    }

    //Question 5
    function getSecondToLastElement(names) {
         return names[names.length - 2];
    }

    // Question 6
    function getSum(ints) {
        let sum = 0;
        for (let x = 0; x < ints.length; x++) {
            sum += ints[x];
        }
        return sum;
    }

   // Question 7
   function getAverage(ints) {
    
        return getSum(ints) / ints.length;
    }
    // Question 8
    function extractAllOddNumbers(numbers) {
      return numbers.filter(num => num % 2 !== 0).join(' ');
    }


   // Question 9
   function extractAllEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0).join(' ');
    }

    // Question 10
    function contains(names,element) {
      
        return names.includes(element);
    }

    // Question 11
    function getIndexByElement(names,element) {
     return names.indexOf(element);
    }


    //Question 13  use => 20 to 3 for range
    function printOddNumbersInRange(start,end){
        for (let i = start; i <= end; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }

    //Question 14
    function printGivenStringTimesNumberGiven(str,n) {
     return str.repeat(n).trim();
    }


    //Question 15
    function wordsInAStringCounter(str){
        return str.trim().split(/\s+/).length;
    }

    //Question 16 - A, E, I, O, U
    function vowelsCounter( str){
       

        return 0;
    }


    //Question 16

    function swap(stringArray) {
       return null;
    }


    //Question 17
    /**
     * Given the following legend
     *
     * f   >>   7
     * s   >>   $
     * 1   >>   !
     * a   >>   @
     *
     * your method should replace any character represented by a key in the legend, with its corresponding value.
     * Input  = "The Farmer went to the store to get 1 dollar's worth of fertilizer"
     * Output = "The 7@rmer went to the $tore to get ! doll@r'$ worth of 7ertilizer"
     *
     * output = The 7@rmer went to the $tore to get ! doll@r'$ worth o7 7ertilizer
     */

    function replaceCharacters(str) {
       return null;
    }

    //Question 18
    //Method call - replaceWuTangTwoThreeDivisible("The quick brown fox jumps over the lazy dog")
     // Sample Output -  The Wu Tang Wu jumps Wu the Wu Tang
    function replaceWuTangTwoThreeDivisible(stringInput) {
       
        return null;
    }


    //Question 19
    function createStringOfFibonnaciUpToMax(maxnumber) {
       
        return null;
    }

print(getLastIndex(names));
print(getSecondToLastIndex(names));
print(getFirstElement(names));
print(getLastElement(names));
print(getSecondToLastElement(names));
print(getSum(ints));
print(getAverage(ints));
print(extractAllOddNumbers(ints));
print(extractAllEvenNumbers(ints));
print(contains(names, "Eli"));
print(getIndexByElement(names, "Marc")); 
printGivenStringTimesNumberGiven("Yo", 3);
print(wordsInAStringCounter("Hello, how are you?"));
