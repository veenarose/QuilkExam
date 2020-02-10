export class Palindrome {
    constructor() { }


    /**
     * isPalindrome()
     * 
     * Checks if a given number is a palindrome or not
     * 
     * @param num : number to check if it is a palindrome or not
     */
    private isPalindrome(num): boolean {
        return parseInt(String(num).split('').reverse().join('')) === num;
    }


    /**
     * findLongestPalinderome()
     * 
     * Finds if a given range of integers are 
     * @param value1 
     * @param value2 
     */
    findLongestPalinderome(value1: number, value2: number) {
        let product = 0;
        let max = 0;
        for (let x = 0; x <= value1; x++) {
            for (let y = x; y <= value2; y++) {
                product = x * y;
                if (this.isPalindrome(product)) {
                    if (max < product) { // this is new
                        max = product;
                    }
                }
            }
        }
        return max;
    }

}