# @roukara/grid-helper

@roukara/grid-helper is a library that generates a grid layout in the DOM for easy visualization.

## Installation

Install @roukara/grid-helper using npm:

```bash
npm install @roukara/grid-helper
```

## Usage
Import @roukara/grid-helper and create an instance with the configuration options.

```ts
import GridHelper from '@roukara/grid-helper';

const options = {
  column: 6,
  row: 6,
  gutter: '10px',
  margin: '10px',
  color: 'rgba(255, 0, 0, .5)',
  parent: document.body
};

const gridHelper = new GridHelper(options);
```

## Options
- `column`: The number of columns.
- `row`: The number of rows.
- `gutter`: The space between grid items.
- `margin`: The outer margin of the grid.
- `color`: The color of the grid lines.
- `parent`: The parent element of the grid.

## Toggle Grid Visibility
Press the `g` key to toggle the visibility of the grid.

## License
This project is licensed under the ISC License. See the [LICENSE](https://opensource.org/license/isc-license-txt) file for more details.