<p align="center">  
  <h1 align="center">Custom Scrollbar: pri-ng-scrollbar</h1>  
</p>

| pri-ng-scrollbar version| angular version |
|-------------------------|-----------------|
| 7.x                     | >= 11.x         |
| 6.x                     | >= 11.x         |
| 5.x                     | >= 10.x         |
| 4.x                     | >=  9.x         |
| 3.x                     | >=  8.x         |
| 2.x                     | >=  7.x         |


Custom scrollbar with native scrolling mechanism which runs outside of the angular change detection, which results in better performance.
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

** ``web-component`` support is dropped with version >= 7.x

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

### Scrollbar component inputs

| Inputs          | Type / Values | Default value |  Description |
|-----------------|---------------|---------------|--------------|
| overflowX       | 'auto', 'scroll', 'native-auto', 'native-scroll', 'hidden' | 'auto' | Horizontal scrollbar overflow |
| overflowY       | 'auto', 'scroll', 'native-auto', 'native-scroll', 'hidden' | 'auto' | Vertical scrollbar |
| xPosition       | 'top', 'bottom' | 'bottom' | Position of the horizontal scrollbar |
| xPosition       | 'left', 'right' | 'right' | Position of the vertical scrollbar |
| marginsX        | string (format: '0 0 0 0' or '0 0' or '0 0') | 4 4 | Margins to position for the horizontal scrollbar. (top right bottom left) or (top/bottom left/right) or (top/bottom/left/right) |
| marginsY        | string (format: '0 0 0 0' or '0 0' or '0 0') | 4 12 | Margins to position for the vertical scrollbar. (top right bottom left) or (top/bottom left/right) or (top/bottom/left/right) |


> Auto fallback to native scrollbars for mobile devices, bec. its not possible to show / hide custom scrollbars.

> pri-scrollbar size will auto resize (height) based on its content, until it reaches the max available height.
<br>!!! This will only work if "overflowX" is set to "hidden" !!!

<a name="styling"/>

## Styling

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
