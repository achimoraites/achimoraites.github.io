---
author: achimoraites
date: Fri May 08 2020 00:00:00 GMT+0300
excerpt: Ever been curius how to apply inheritance in an Angular component?
image: test.jpg
slug: advanced-angular-testing-using-jasmine
subtitle: Improve the scalabillity of your Angular project by using inheritance! 
title: Angular Component inheritance
url: https://achimoraites.github.io/blog/advanced-angular-testing-using-jasmine
---

<script context="module">
  export const prerender = true;
</script>


When testing our apps there are times when we need to control things that are beyond our control, like the window object.
One common scenario is when we need to test our code against browser specific APIs.

> If you are looking how to upgrade your testing skills this is the article you have been looking for!

## Show me the code

```typescript
// history.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    if (window.history.length === 1) {
      console.log('length 1');
    } else {
      window.history.back();
    }
  }

  saveFile() {
    const blob = new Blob([''], {
      type: 'text/html'
    });
    // IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, 'file.txt');
    } else {
      console.log('custom handling');
    }
  }

}
```

### Now lets test the `goBack()` method
As you know already the `window.history` is read only.
We need to test two cases:
- history.length == 1
- history.length > 1

in our history.component.spec.ts
we use the `spyOnProperty` to mock the `window.history.length` to be able to test our both cases:
```typescript
  it('should execute "goBack" as expected when history === 1', () => {
    // spy on console.log()
    spyOn(console, 'log');
    // here we mock the history length to be 1
    spyOnProperty(window.history, 'length', 'get').and.returnValue(1);
    component.goBack();

    expect(console.log).toHaveBeenCalledWith('length 1');
  });

  it('should execute "goBack" as expected when history > 1', () => {
    // spy on window.history.back()
    spyOn(window.history, 'back');
    // here we mock the history length to be 2
    spyOnProperty(window.history, 'length', 'get').and.returnValue(2);
    component.goBack();

    expect(window.history.back).toHaveBeenCalled();
  });
```
that was easy :)

Now lets tackle a more interesting case, what about testing a browser specific api?

### Testing browser specific APIs
Now in the `saveFile()` method we are using a browser specific API, here things are getting more interesting.

The `window.navigator.msSaveOrOpenBlob` is available only on IE,
on other supported browsers we have a different implementation.

Let's dive to our test code!

```typescript
 it('should execute "saveFile" as expected on IE', () => {
    // create a mock navigator
    const mockNavigator = jasmine.createSpyObj(['msSaveOrOpenBlob']);
    // here we use the mockNavigator to simulate IE
    spyOnProperty(window, 'navigator', 'get').and.returnValue(mockNavigator);
    component.saveFile();

    // verify that method has been called :)
    expect(mockNavigator.msSaveOrOpenBlob).toHaveBeenCalled();
  });

  it('should execute "saveFile" as expected on browsers other than IE', () => {
    // spy on console.log()
    spyOn(console, 'log');
    // create a mock navigator
    const mockNavigator = jasmine.createSpyObj(['']);
    // here we use the mockNavigator to simulate behavior
    spyOnProperty(window, 'navigator', 'get').and.returnValue(mockNavigator);
    component.saveFile();

    // verify that method has been called :)
    expect(console.log).toHaveBeenCalledWith('custom handling');
  });

```
Here we mocked the `window.navigator` to be able to simulate the behavior on both cases!

## Summary

Today we learned about mocking the window object to be able to do tests against browser specific APIs.
By using this technique you will be able to mock anything you need to test your code.

I hope you enjoyed it,
Happy coding :)

 ### Credits

Photo by [Artem Podrez](https://www.pexels.com/@artempodrez?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)  from [Pexels](https://www.pexels.com/photo/a-woman-doing-an-experiment-5726788/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)