---
author: achimoraites
date: Sun May 10 2020 00:00:00 GMT+0300
excerpt: Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability.
tags: ['typescript', 'angular', 'javascript']
image: https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400
slug: angular-types-of-modules
subtitle: Improve the scalabillity of your Angular project by using the module type pattern! 
title: Types of Modules in Angular
url: https://achimoraites.io/blog/angular-types-of-modules
---

<script context="module">
  export const prerender = true;
</script>


Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability.

By setting up your project to use each module type properly you will have better control over your project to add more advanced features such as Lazy Loading and a more organized structure to work with. 

We have 3 types of modules:
- **Feature modules**
- **Core Module**
- **Shared Module**

## Feature Modules
those are the modules that encapsulate a specific feature at a logic level, for example you have a dashboard page that allows the users to see their projects.

The dashboard module will have everything that is needed to allow a user to see their projects:
- components
- services
- pipes
- directives

In general feature specific functionality is included in the module.

If we need to use some common functionality in our Feature Modules we import the Shared Module in the Modules that needs it.

We will talk more about shared functionality later.
```typescript
// feature module example
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/SharedModule';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    NgModule,
    SharedModule
  ],
  declarations: [ DashboardComponent, ProjectComponent ]
})
export class DashboardModule { }
```

## Core Module
Here we include functionality that will be used only ONCE!

**The Core module is used ONLY in the root (app) Module!**

Common **services are placed in the Core Module** to ensure we have only a single instance of the services to avoid unexpected behaviors.

In this type of module we also place components that are used only ONCE for example the NavBar and the Footer components.

```typescript
// core module example
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ApiService } from './services/api.service';

@NgModule({
  providers: [ ApiService ]
})
export class CoreModule {
   // do not allow to be used more than ONCE!!!
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error(
        'Import CoreModule in the root module only!!!'
      );
    }
  }
}
```


## Shared Module
This is the most missunderstooded kind of Module!

The purpose of the SharedModule is to make available commonly used:
- components
- directives
- pipes

We use the SharedModule in the feature modules to make common functionality available.

We also make sure to have only one Shared Module.

We avoid placing services here!

```typescript
// shared module example
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './components/customer/customer.component';
import { PercentagePipe } from './pipes/percentage/percentange.pipe';
import { CustomerStyleDirective } from './directives/customer-style/customer-style.directive';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    CustomerComponent,
    PercentagePipe,
    CustomerStyleDirective 
  ],
  declarations: [ CustomerComponent, CustomerStyleDirective, PercentagePipe ]
})
export class SharedModule {}
```

This was a brief introduction to the 3 most common Modules types used in Angular Applications.

Happy coding 😄

 ### Credits

Photo by [Digital Buggu](https://www.pexels.com/@digitalbuggu?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)  from [Pexels](https://www.pexels.com/photo/colorful-toothed-wheels-171198/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)