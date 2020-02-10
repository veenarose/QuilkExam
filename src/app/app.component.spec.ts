import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Anagram } from './app.anagram';
import { Palindrome } from './app.palindrome';

describe('AppComponent', () => {

  let anagram: Anagram = new Anagram();
  let palindrome: Palindrome = new Palindrome();
  let appComponent: AppComponent = new AppComponent(palindrome, anagram);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        Anagram,
        Palindrome
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'QuilkTechExam'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('QuilkTechExam');
  });


  it('TEST IF the given texts are anagrams', () => {
    // Check for words 
    expect(appComponent.anagram.isAnagram("Hey", "heyy")).toBeFalsy();
    expect(appComponent.anagram.isAnagram("heyy", "heyy")).toBeTruthy();

    // Check for case sensitivity
    expect(appComponent.anagram.isAnagram("heyy", "HEYY")).toBeTruthy();

    // Check for spaces
    expect(appComponent.anagram.isAnagram("heyy ", "HEYY")).toBeTruthy();

    // Check for sentances 
    expect(appComponent.anagram.isAnagram("This is okay", "This is NOT okay")).toBeFalsy();
    expect(appComponent.anagram.isAnagram("This is okay", "This is okay")).toBeTruthy();
  });


  it('TEST if they are Palindrome numbers', () => {
    // 2 Digits
    expect(appComponent.palindrome.findLongestPalinderome(99, 99)).toEqual(9009);

    // 3 Digits
    expect(appComponent.palindrome.findLongestPalinderome(999, 999)).toEqual(906609);

    // 99 to 9999
    expect(appComponent.palindrome.findLongestPalinderome(99, 999)).toEqual(94149);

  });

  it("Test if the list is sorted ", () => {


  });
});
