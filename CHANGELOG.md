# Changelog

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
