# NgxHeadroom

NgxHeadroom is a lightweight, high-performance widget (with no dependencies) that allows you to react to the user's scroll. The header on this site is a living example, it slides out of view when scrolling down and slides back in when scrolling up.

# Playground

To play More ==>
https://wicky.nillia.ms/headroom.js/playroom/

# Why use it?

Fixed headers are a popular approach for keeping the primary navigation in close proximity to the user. This can reduce the effort required for a user to quickly navigate a site, but they are not without problems…

Large screens are usually landscape-oriented, meaning less vertical than horizontal space. A fixed header can therefore occupy a significant portion of the content area. Small screens are typically used in a portrait orientation. Whilst this results in more vertical space, because of the overall height of the screen a meaningfully-sized header can still be quite imposing.

Headroom.js allows you to bring elements into view when appropriate, and give focus to your content the rest of the time.

# Prerequisites

NgxHeadroom will work in angular projects.

## Table of Contents

- [Installation](#installation)
- [Import Style](#import-style)
- [Import Modules](#import-modules)
- [Options](#optons)
- [Events](#Events)
- [Methods](#Methods)

## Installation

```bash
$ npm i headroom.js --save
$ npm install ngx-headroom --save
```

## Import style

To use css import it.

```css
@import 'node_modules/ngx-headroom/headroom.css';
```

OR

Include it into angular.json .

```scss
"node_modules/ngx-headroom/headroom.css"
```

it will look like

```
 "styles": [
               ....,
              "node_modules/ngx-headroom/headroom.css"
            ],

```

## Import modules

To work on form it is require to import `NgxHeadroomModule` which allow to bring elements into view when appropriate, and give focus to your content the rest of the time. All modules register in the `NgModule` decorator `imports` property.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { NgxHeadroomModule } from 'ngx-headroom'; // <-- #1 import module

import {AppComponent} from './app.component';

@NgModule({
  declarations:[AppComponent],
  imports:[ BrowserModule,
	NgxHeadroomModule
	]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## NgxHeadroom Options

NgxHeadroom can also accept an options object to alter the way it behaves. The full structure of an options object is as follows:

> Options

```js
import { NgxHeadroomOption } from 'ngx-headroom';

let options: NgxHeadroomOption = {
  // vertical offset in px before element is first unpinned
  offset: 200,
  // scroll tolerance in px before state changes
  tolerance: 0,
  // or you can specify tolerance individually for up/down scroll
  tolerance: {
    up: 5,
    down: 0
  },
  // css classes to apply
  classes: {
    // when element is initialised
    initial: 'headroom',
    // when scrolling up
    pinned: 'headroom--pinned',
    // when scrolling down
    unpinned: 'headroom--unpinned',
    // when above offset
    top: 'headroom--top',
    // when below offset
    notTop: 'headroom--not-top',
    // when at bottom of scoll area
    bottom: 'headroom--bottom',
    // when not at bottom of scroll area
    notBottom: 'headroom--not-bottom',
    // when frozen method has been called
    frozen: 'headroom--frozen'
  }
};
```

> app.component.html

Use `Ngxheadroom` selector to select the element.

```html
<div Ngxheadroom></div>
```

## Events

```js
  // callback when pinned
  @Output() pinned = new EventEmitter();
  // callback when unpinned
  @Output() unpinned = new EventEmitter();
  // callback when above offset
  @Output() toped = new EventEmitter();
  // callback when  below offset
  @Output() notToped = new EventEmitter();
  // callback when at bottom of page
  @Output() bottomed = new EventEmitter();
  // callback moving away from bottom of page
  @Output() notBottomed = new EventEmitter();
```

## Methods

The following methods are available to be called on a headroom instance:

- destroy(): destroy the headroom instance, removing event listeners and any classes added
- pin(): forcibly set the headroom instance's state to pinned
- unpin(): forcibly set the headroom instance's state to unpinned
- freeze(): freeze the headroom instance's state (pinned or unpinned), and no longer respond to scroll events.
- unfreeze(): resume responding to scroll events
