<p align="center">  
  <h1 align="center">Angular Custom Scrollbar: ng-pri-scrollbar</h1>
</p>

Custom scrollbar with native scrolling mechanism for Angular 7. The scrollbar doesn't trigger the angular change detection when scrolling which results in better performance.
Fallback for mobile devices.

> I wrote this component bec. all available solutions triggered the angular change detection when scrolling. Hope it will help someone else too.

___

## Table of Contents

- [Live Demo](https://priemar.github.io/pri-ng-scrollbar/)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Styling](#styling)
- [Development](#development)
- [Issues](#issues)
- [Author](#author)
- [Credit](#credit)
- [More Stuff](#more-stuff)

<a name="installation"/>

## Installation

**NPM**

```bash
npm install --save pri-ng-scrollbar @angular/cdk
```

<a name="usage"/>

## Usage

Import `PriScrollbarModule` in your module

```js
import { PriScrollbarModule } from 'pri-ng-scrollbar';

@NgModule({
  imports: [
    PriScrollbarModule
  ]
})
```

In your template

```html
<pri-scrollbar>
  <!-- Content -->
</pri-scrollbar>
```

<a name="options">

## Options

### Scrollbar inputs

- **[overflowX]**: PriScrollbarOverflowTypes ('auto', 'scroll', 'native-auto', 'native-scroll', 'hidden')

  Horizontal scrollbar overflow, default `auto`

- **[overflowY]**: PriScrollbarOverflowTypes

  Vertical scrollbar, default `auto`
  
- **[xPosition]**: PriHorizontalScrollbarPositions ('top', 'bottom')

  Position of the horizontal scrollbar, default `bottom`

- **[yPosition]**: PriVerticalScrollbarPositions ('left', 'right')

  Position of the vertical scrollbar, default `right`
  
- **[marginsX]**: string (format: '0 0 0 0' or '0 0' or '0 0')

  Margins to position for the horizontal scrollbar. (top right bottom left) or (top/bottom left/right) or (top/bottom/left/right)

- **[marginsY]**: string (format: '0 0 0 0' or '0 0' or '0 0')
  
    Margins to position for the vertical scrollbar. (top right bottom left) or (top/bottom left/right) or (top/bottom/left/right)

***

 > Auto fallback to native scrollbars for mobile devices, bec. its not possible to show / hide custom scrollbars.

***

<a name="styling"/>

## Styling

individual style for each scrollbar in component. (if its in the main style just remove the /deep/), if you want an individual style for a specific scrollbar, just give the scrollbar a class and add this class in the scss here
```scss
 /deep/ pri-scrollbar{
   .pri-scrollbar-vertical {
     width: 20px !important;
   }
   .pri-scrollbar-horizontal {
     height: 40px !important;
   }
   //scrollbar thumb (vertical)
   .pri-vertical-thumb {
     background-color: rgba(purple, .5) !important;
     border-radius: (20px / 2) !important;
   }
   //scrollbar thumb horizontal
   .pri-horizontal-thumb{
     background-color: rgba(lime, .5) !important;
     border-radius: (40px / 2) !important;
   }
   //scrollbar thumb horizontal (hover)
   .pri-horizontal-thumb:hover, .pri-scrollbar-container.x-scrolling .pri-horizontal-thumb{
     background-color: rgba(lime, .7) !important;
   }
   //scrollbar thumb vertical (hover)
   .pri-vertical-thumb:hover, .pri-scrollbar-container.y-scrolling .pri-vertical-thumb{
     background-color: rgba(purple, .7) !important;
   }
 }
```

same style for both scrollbars

```scss
/deep/ pri-scrollbar.custom-default {
  .pri-scrollbar-vertical {
    width: 20px !important;
  }
  .pri-scrollbar-horizontal {
    height: 20px !important;
  }
  //scrollbar thumbs (vertical and horizontal)
  .pri-scrollbar-thumb{
    background-color: rgba(white, .5) !important;
    border-radius: (20px / 2) !important;
  }
  //scrollbar thumbs (hover)
  .pri-scrollbar-thumb:hover,
  .pri-scrollbar-container.x-scrolling .pri-scrollbar-thumb,
  .pri-scrollbar-container.y-scrolling .pri-scrollbar-thumb {
    background-color: rgba(white, .7) !important;
  }
}
```

<a name="development"/>

## Development

This project uses the Angular CLI for building the library

```bash
$ npm run build:lib
$ npm run start
```

or if you want to get live updates on lib source changes

Terminal 1: 
```bash
$ npm run start:lib 
``` 
Terminal 2:
```bash
$ npm run start
```


<a name="issues"/>

## Issues

If you identify any errors in the library, or have an idea for an improvement, please open an [issue](https://github.com/Priemar/pri-ng-scrollbar/issues).

<a name="author"/>

## Author

- Mario Prieschl [Github](https://github.com/Priemar)

<a name="credit"/>

## Credit

- Inspired by [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar).

<a name="more-stuff"/>

## More Stuff

- [node-ng-skelton](https://github.com/Priemar/node-ng-skeleton)
- [node-skeleton](https://github.com/Priemar/node-skeleton)
- [finapi.crypto.csharp](https://github.com/Priemar/finapi.crypto.csharp)
