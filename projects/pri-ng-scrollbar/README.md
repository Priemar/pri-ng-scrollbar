<p align="center">  
  <h1 align="center">Custom Scrollbar: pri-ng-scrollbar</h1>  
  <h3>Specially built for Angular</h2>
  <h3>Since version 2.1.0 usable as web-component outside of Angular (i.e. Wordpress / React / Vue  etc...)</h2>    
</p>


Custom scrollbar with native scrolling mechanism for Angular 7.
The scrollbar doesn't trigger the angular change detection when scrolling which results in better performance.
Fallback for mobile devices.

> I wrote this component bec. all available solutions triggered the angular change detection when scrolling. Hope it will help someone else too.

___

## Table of Contents

- [Live Demo](https://priemar.github.io/pri-ng-scrollbar/)

**Angular**

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Styling](#styling)

**Web-Component**

- [Installation](#wc-installation)
- [Usage](#wc-usage)
- [Options](#wc-options)
- [Styling](#wc-styling)

**More**
- [Development](#development)
- [Issues](#issues)
- [Author](#author)
- [Credit](#credit)
- [More Stuff](#more-stuff)


#Angular

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

- @deprecated **[dynamic]**: boolean (default = 'true')

  If this property is set, the pri-scrollbar size will auto resize (height) based on its content, until it reaches the max available height.
  <br>!!! This will only work if "overflowX" is set to "hidden" !!!
   
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

#Web-Component

Since version 2.1.0  can use `pri-ng-scrollbar` in every web site which support javascript and custom scrollbars (i.e.: Wordpress, React, Vue, etc...)

<a name="wc-installation">

## Installation

**NPM**
```bash
npm install --save pri-ng-scrollbar
```

**the script files are located in `node_modules/pri-ng-scrollbar/web-component/...`**. You simply need to copy the files in your www folder

<a name="wc-usage">

## Usage

There are different builds and option which you can choose from.

#### 1.Bundle

the bundle contains everything you need to run `pri-ng-scrollbar` includes IE, Edge, Firefox, Chrome etc...
if you are using multiple web-components which are built with angular, you should use (see. 2. Individual)

````html
<body>
...  
  <pri-scrollbar style="height: 300px; width: 50vw;border: 1px solid #dfdfdf" overflowX="hidden">
    Your Content
  </pri-scrollbar>
  ...
  <script src="pri-ng-scrollbar.bundle.js" type="text/javascript"></script>
</body>
````

#### 2.Individual

if you are using multiple angular built web-components, you only need to import polyfills once, which prevents conflicts and code duplication => less network traffic
As you can see in the example above there are two polyfills, if you don't want to support IE and older browsers you dont need to include the `es2016-polyfills.js`
````html
<head>
    <!-- uncomment this line only if you want to support IE <script src="es2015-polyfills.js" type="text/javascript"></script>-->
    <script src="polyfills.js" type="text/javascript"></script>
</head>
<body>
...  
  <pri-scrollbar style="height: 300px; width: 50vw;border: 1px solid #dfdfdf" overflowX="hidden">
    Your Content
  </pri-scrollbar>
  ...
  <script src="pri-ng-scrollbar.js" type="text/javascript"></script>
</body>

````

<a name="wc-options">

### Options (web-component)

you can use all angular properties as standard html attributes see [Options](#options)

<a name="wc-styling">

## Styling (web-component)

the styling is similar to the styling when using as angular component see [Styling](#styling). The only difference is: you must not use the /deep/ operator.


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
