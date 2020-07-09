<p align="center">  
  <h1 align="center">Custom Scrollbar: pri-ng-scrollbar</h1>  
</p>

#### Angular 10: version 5.x
#### Angular 9: version 4.x
#### Angular 8: version 3.x
#### Angular 7: version 2.x
#### Web-Component: version >= 2.1



Custom scrollbar with native scrolling mechanism for Angular 7 / 8.

The scrollbar does not trigger the angular change detection when scrolling, which results in better performance.

Fallback for mobile devices and browser which are not supporting custom scrollbars.

___

## Table of Contents

- [Live Demo](https://priemar.github.io/pri-ng-scrollbar/)

**Angular**

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Styling](#styling)

**Web-Component**

The web component is currently removed until its adapated for angular ivy.

- [Installation](#wc-installation)
- [Usage](#wc-usage)
- [Options](#wc-options)
- [Styling](#wc-styling)

**More**
- [Development](#development)
- [Issues](#issues)
- [Planned](#planned)
- [Author](#author)
- [Credit](#credit)
- [More Stuff](#more-stuff)


# Angular

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
 
 > pri-scrollbar size will auto resize (height) based on its content, until it reaches the max available height.
   <br>!!! This will only work if "overflowX" is set to "hidden" !!!

***

<a name="styling"/>

## Styling

if you are using default css see [Styling](#wc-styling) web-component.


If you want a padding on the pri-scrollbar content, you have to use the following css variable on your pri-scrollbar

````scss
pri-scrollbar {
  --padding: 10px;
}
````

styling / theming with scss is similar to angular material.

add to your style
````scss
@import '~pri-ng-scrollbar/theming';

$vertical-thumb-color: #444;
// (optional) if vertical-thumb-size set and horizontal-thumb-color is not set, horizontal-thumb size will be set to vertical-thumb-color
$horizontal-thumb-color: #444;
// (optional)
$vertical-thumb-size: 20px;
// if vertical-thumb-size set and horizontal-thumb-size is not set, horizontal-thumb size will be set to vertical-thumb-size
$horizontal-thumb-size: 20px;

//creates palette
$custom-scrollbar-palette: pri-scrollbar-palette($vertical-thumb-color, $horizontal-thumb-color, $vertical-thumb-size, $horizontal-thumb-size);

//now use your palette for the theme
@include pri-scrollbar-theme($custom-scrollbar-palette);



/********************* extended styling *************************/

/**  
 * will set color and size for both thumbs
 * $custom-scrollbar-palette: pri-scrollbar-palette($vertical-thumb-color, null, $vertical-thumb-size, null);
 * only sets color
 * $custom-scrollbar-palette: pri-scrollbar-palette($vertical-thumb-color);
 */


/**
 * if you want change the thumb style i.e. border radius, border, border color you can add 'map' as pri-scrollbar-theme as parameter
 * !!! The following part is optional !!! 
 */
 
// horizontal thumb style
$horizontal-thumb-style: (
  border-radius: 0,
  border: 1 px solid white
);
$vertical-thumb-style: (
  border-radius: 0,
  border: 1 px solid white
);

@include pri-scrollbar-theme($custom-theme-palette, $horizontal-thumb-style, $vertical-thumb-style);

````


#Web-Component

Since version 2.1.0  can use `pri-ng-scrollbar` in every web site which support javascript and custom scrollbars (i.e.: Wordpress, React, Vue, etc...)

<a name="wc-installation">

## Installation

**NPM**
```bash
npm install --save pri-ng-scrollbar
```

**the script files are located in `node_modules/pri-ng-scrollbar/web-component/...`**. You simply need to copy the files in your www folder

<a name="wc-usage"></a>

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
As you can see in the example above there are two polyfills, if you don't want to support IE and older browsers you dont need to include the `es2015-polyfills.js`
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

<a name="wc-options" />

### Options

you can use all angular properties as standard html attributes see [Options](#options)

<a name="wc-styling" />

## Styling

If you want a padding on the pri-scrollbar content, you have to use the following css variable on your pri-scrollbar

````scss
pri-scrollbar {
  --padding: 10px;
}
````

individual style for each scrollbar in component. If you are using scss, see styling [Styling](#styling) angular.
```scss
 pri-scrollbar{
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
pri-scrollbar.custom-default {
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

<a name="planned"/>

## Planned

- add experimental version for ivy projects
- Rework the web-component creation when angular ivy is ready. Reduces bundle size.

<a name="author"/>

## Author

- Mario Prieschl [Github](https://github.com/Priemar)

<a name="credit"/>

## Credit

- Inspired by [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar).

<a name="more-stuff"/>

## More Stuff

- [pri-ng-warehouse](https://github.com/Priemar/pri-ng-warehouse)
- [finapi.crypto.csharp](https://github.com/Priemar/finapi.crypto.csharp)
- [tscodedom](https://github.com/Priemar/tscodedom)
