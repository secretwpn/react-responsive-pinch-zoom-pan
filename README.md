# @secretwpn/react-image-zoom

This is a fork of [react-responsive-pinch-zoom-pan](https://github.com/bradstiff/react-responsive-pinch-zoom-pan) by Brad Stiff with slightly changed feature set and converted to TypeScript

It provides a React component rendering an `img` element with zoom and pan capability using CSS transforms.

## Install

`npm install @secretwpn/react-image-zoom --save`

### Local

1. `git clone https://github.com/secretwpn/react-responsive-pinch-zoom-pan.git`
2. `cd react-responsive-pinch-zoom-pan`
3. `npm install`
4. `npm start`
5. Browse to http://localhost:3001

## Usage

```typescript
import React from 'react'
import { PinchZoomPanImage } from '@secretwpn/react-image-zoom'

const App = () => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <PinchZoomPanImage
        src="http://picsum.photos/750/750"
      />
    </div>
  )
}
```

## API

| Prop              | Type                  | Default   | Description                                                                                                    |
| ----------------- | --------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| initialScale      | `number` or `auto`    | `auto`    | The initial scale of the image. When `auto`, the image will be proportionally 'autofit' to the container.      |
| minScale          | `number`              | `auto`    | The minimum scale to which the image can be zoomed out. When `auto`, the minimum scale is the 'autofit' scale. |
| maxScale          | `number`              | `1`       | The maximum scale to which the image can be zoomed in.                                                         |
| position          | `center` or `topLeft` | `topLeft` | Position of the image relative to the container. Applies when the scaled image is smaller than the container.  |
| doubleTapBehavior | `reset` or `zoom`     | `reset`   | Whether to zoom in or reset to initial scale on double-click / double-tap.                                     |
| style             | `CSSProperties`       | `{}`      | Style to apply to the image, e.g. `{ opacity: 0.5 }`                                                           |
| animate           | boolean               | `false`   | Whether to enable subtle animation                                                                             |
| alt | `string` | `""` | Same as `alt` in regular `<img />` tag |
| src | `string` |  | Same as `src` in regular `<img />` tag |

## Development

You're welcome to contribute to react-responsive-pinch-zoom-pan.

To set up the project:

1.  Fork and clone the repository
2.  `npm install`
3.  `npm start`

The example page will be available on http://localhost:3001 in watch mode, meaning you don't have to refresh the page to see your changes.
