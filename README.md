# @roukara/grid-helper

@roukara/grid-helper is a library that generates a grid layout in the DOM for easy visualization. It supports three types of grids: column, row, and grid.

## Installation

Install @roukara/grid-helper using npm:

```bash
npm install @roukara/grid-helper
```

## Usage
Import @roukara/grid-helper and create an instance with the configuration options.

```ts
import { GridHelper, GridHelperOptions } from '@roukara/grid-helper';

const options: GridHelperOptions = {
  type: 'grid', // 'column', 'row', or 'grid'
  count: 9,
  gutter: 10,
  margin: 20,
  color: 'red'
};

const gridHelper = new GridHelper(options);
```

## Options
- `type`: The type of grid. Can be 'column', 'row', or 'grid'.
- `count`: The number of grid items.
- `gutter`: The space between grid items, in pixels.
- `margin`: The outer margin of the grid, in pixels.
- `color`: The color of the grid lines.

## Toggle Grid Visibility
Press the `g` key to toggle the visibility of the grid.

## License
This project is licensed under the ISC License. See the [LICENSE](https://opensource.org/license/isc-license-txt) file for more details.