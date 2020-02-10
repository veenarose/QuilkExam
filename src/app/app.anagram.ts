export class Anagram {


    constructor() {

    }

    /**
     * isAnagram()
     * Check if the given two string are an anagram or not
     * 
     * @param text1 String 1 to compare 
     * @param text2 String 2 to compare
     */
    isAnagram(text1: string, text2: string): boolean {
        let isAnagram: boolean = false;

        // Replace all spaces and convert to a common case        
        text1 = text1.toLowerCase().replace(/\s/g, "");
        text2 = text2.toLowerCase().replace(/\s/g, "");

        //Now set the two texts into an array of strings
        let text1Array: string[] = text1.split('');
        let text2Array: string[] = text2.split('');

        // Now sort the two arrays and compare if they are the same
        text1Array = text1Array.sort();
        text2Array = text2Array.sort();

        isAnagram = JSON.stringify(text1Array) === JSON.stringify(text2Array);

        return isAnagram;
    }

}
