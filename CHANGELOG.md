# Changelog

## 2.2.0

- fixed: a bug which prevent showing the custom scrollbar, when it wasn't possible on first rendering
- fixed: refresh the scrollbar state when added to dom
- new: possibility to style pri-scrollbar via scss (which is much cleaner)

Demo:

- added: example using pri-scrollbar in mat-autocomplete
- added: example styling via scss

## 2.1.0

- New: Web-Component build, to use `pri-ng-scrollbar` outside angular.

Demo:

- Update: angular 7.2.9 and angular cli 7.3.9

## 2.0.0

- Changed: default value of dynamic attribute is changed to `true` (attribute is deprecated and will be removed in the next version, because it should set by default)
- Added: pri-scrollbar will update when its size changed (i.e. window resize, parent size changed, etc.)

Demo:

- Added: test cases for resize stuff  

## 1.0.8

- Fixed: dynamic attribute changed to property. dynamic attribute is now bindable

## 1.0.7

- Added: attribute "dynamic". Use the dynamic attribute in combination with overflowX = "hidden". This will auto grow the scrollbar until it reaches the available container size.
- Added: test example for the dynamic attribute

## 1.0.6

- Fixed: angular change detection always triggered when scrolling when scrollbar content size dynamically changed
- Fixed: scrollbar ('auto') was always visible after dynamic content size changes (even if the size gets smaller than the available size)

Demo:

- add dynamic content example
- add overflow 'scroll' example
- add console output to test angular change detection (trigger) 

## 1.0.5

- Fixed a bug when zoom level is not 100%

## 1.0.4

- Updated: all demo project packages, bec. of the webpack security risk in a dependency of @angular-devkit/build-angular. The pri-ng-scroll library itself is not effected by this udpates

## 1.0.3

- Fixed: wrong vertical scrollbar height when horizontal scrollbar overflowX was hidden
- Fixed: wrong horizontal scrollbar width when vertical scrollbar overflowY was hidden
- Fixed: scrolling was not possible in older safari browsers version <= 10, when scrollbar flex item
- Added: demo example page, flex box example.
- Added: demo page shows if actual browser supports custom scrollbars

## 1.0.2

- Updates in Readme: added comments to custom style examples

## 1.0.1

- Updates in Readme (live demo url)

## 1.0.0

- Initial release
