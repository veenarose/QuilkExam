import { Component } from '@angular/core';
import { Palindrome } from './app.palindrome';
import { Anagram } from './app.anagram';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'QuilkTechExam';
  public list: number[] = [];
  public sortedList: number[] = [];
  public longestPalindromeNumber: number;
  public isAnagram: boolean;
  public isAnagram2: boolean;

  constructor(
    public palindrome: Palindrome,
    public anagram: Anagram

  ) {

  }

  ngOnInit() {
    // SORT an array of random integer from 1- 99
    this.list= this.setRandomList(1, 99);
    this.sortedList = this.insertionSort(this.list);

    // Palindrome for product of 3 digt numbers
    this.palindrome = new Palindrome();
    this.longestPalindromeNumber = this.palindrome.findLongestPalinderome(999, 999);

    // Are the given two strings Anagrams? 
    this.isAnagram = this.anagram.isAnagram("This is okay", "This is not OKAY");
    this.isAnagram2 = this.anagram.isAnagram("This is okay", "This is OKAY");
  }



  /**
   * setRandonList()
   * 
   * Gets a list of 100 number withing the given range
   * 
   * @param min : minimum number limit
   * @param max : maximum number limit
   */
  setRandomList(min: number, max: number) {
    const list: number[] = [];
    for (let i = 0; i < 100; i++) {
      list.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return list;
  }

  /**
   * insertionSort()
   * 
   * Sorts a given integer array by insertion sort
   * 
   * @param array : array to sort
   */
  insertionSort(array: number[]) {
    for (var i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - i;

      //Swap
      for (j = i - 1; j >= 0 && array[j] > key; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = key;
    }
    return array;
  }
}







