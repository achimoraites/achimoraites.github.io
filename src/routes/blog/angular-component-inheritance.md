---
author: achimoraites
date: Fri May 08 2020 00:00:00 GMT+0300
excerpt: Ever been curius how to apply inheritance in an Angular component?
image: test.jpg
slug: angular-component-inheritance
subtitle: Improve the scalabillity of your Angular project by using inheritance! 
title: Angular Component inheritance
url: https://achimoraites.github.io/blog/angular-component-inheritance
---

<script context="module">
  export const prerender = true;
</script>

## About
Component inheritance can be useful when you 
have duplicated/shared code between your components.

Think about having a situation where you have 3 components
that share a `theme @Input()`

This could be the case where you want to have your components to adapt based on a provided theme.

## Why

When you have 2-3 components with shared functionality 
you might say "well why to bother with inheritance?".

And in the most common cases that's okay, you don't need to.

But by using inheritance you do more than just to avoid to type the shared functionality between your components.

The benefit of inheritance is when we have shared functionality in many components!

## How

Using component inheritance is simple, you need:
- A Base component
- The Component/s to extend the Base component



## A simple example
Here we will use only one component to extend the Base component but the same process applies to no matter how many components we are going to use.

### Base component
```typescript
// base.component.ts
//....
@Component({
selector: 'my-base',
template: '' // notice that the template is empty!
})
export class BaseComponent implements OnInit {
    @Input() theme: string;

    constructor() {}

    ngOnInit() {}
}
```

### ThemedInput component
By extending the Base component the ThemedInput has the theme input!

Anything added / updated in the Base component will be reflected here too!

```typescript
// themed-input.component.ts
//....
@Component({
selector: 'my-themed-input',
templateUrl: './themed-input-component.html'.
styleUrls: ['./themed-input-component.scss']
})
export class ThemedInputComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {}
}
```




### Changing/Updating shared functionality

Having a base component with the shared functionality you can now **change/update the shared functionality in one place** instead of doing it in every component that exists or will be created in the future!

A good scenario would be when you decide to use a service that is common to all the components to share state.

Imagine that one day you need to switch to NgRx:
- **Case 1 - You are using inheritance**: all you need to do is to update the base component to start using it.
- **Case 2 - You are NOT using inheritance**: oh poor soul... you will need to go to all of the components and you will need to update the code for each one of them!

I believe the first Case is faster, simpler and less error prone ;)

**Adding new shared functionality becomes simple!**

### Testing shared code

Testing the shared functionality is simpler, all we need to do is to test the base class.

This way we avoid having to write tests that are actually testing the same shared code across components.



## Summary

Using the right tool for the job is important, here we explored using component inheritance to:
- simplify the usage of shared component code
- allow for easier future change / update
- optimizing the testing of our shared code

**Inheritance is powerful yet keep in mind that to use it only when it makes sense.**

Most of the times composition does the trick!


Happy coding!!!