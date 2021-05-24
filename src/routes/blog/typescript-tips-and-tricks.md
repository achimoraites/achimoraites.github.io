---
author: achimoraites
date: Wed Jan 29 2020 00:00:00 GMT+0200
excerpt: Here are two Typescript tricks to make your life as a software developer easier.
image: test.jpg
slug: typescript-tips-and-tricks
subtitle: Here are two Typescript tricks to make your life as a software developer easier. 
title: Typescript Tips and Tricks
url: https://achimoraites.github.io/blog/typescript-tips-and-tricks
---

<script context="module">
  export const prerender = true;
</script>



Here are two Typescript tricks to make your life as a software developer easier.


## Create Flexible interfaces
Ever wondering if you can find a middle ground between the `any` type and of a specific type/interface ?

The answer is yes! 
You can make an interface that contains any number of attributes of a specific type while having the ability to have any attribute name:

```typescript
interface Person {
  name: string;
  age: number;
}

interface FlexInterface {
  [index: string]: Person;
}

// now you can use it like
const Group: FlexInterface = {
  alice: {
    name: 'Alice Byers',
    age: 24
  },
  brian: {
    name: 'Brian Sanders',
    age: 16
  }
};

// still this will fail!

const Group2: FlexInterface = {
  alice: {
    name: 'Alice Byers',
    age: 24
  },
  brian: {
    name: 'Brian Sanders',
    age: 16
  },
 // Type 'string' is not assignable to type 'Person'
  matt: 'Mathew'
};

```

Taking advantage of this technique you can create flexible types without using type `any` !

## Create a type that has a partial match of another type 
This effectively means that we can match any number of properties of a given type:

```typescript

interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;

function updatePerson(personToUpdate: Person, attributes: PartialPerson) {
  return { ... personToUpdate, ...attributes };
}

let person: Person = {
  name: 'John Doe',
  age: 8
};


// this works as expected
const attrs1: PartialPerson = {
  age: 38
};

// this will fail
const attrs2: PartialPerson = {
  hobbies: ['chess', 'swimming', 'coding']
};

person = updatePerson(person, attrs1);

```


Happy coding 😄


 ### Credits

Photo by [Yogendra Singh](https://www.pexels.com/@yogendras31?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)  from [Pexels](https://www.pexels.com/photo/man-jumping-high-while-posing-1701197/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)