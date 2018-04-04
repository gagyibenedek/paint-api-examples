registerPaint('image', class {
    static get inputProperties() { return ['--image']; }
    paint(ctx, geom, props) {
      const img = props.get('--image');

      switch (img.state) {
          case 'ready':
              // The image is loaded! Draw the image.
              ctx.drawImage(img, 0, 0, geom.width, geom.height);
              break;
          case 'pending':
              // The image is loading, draw some mountains.
              drawMountains(ctx);
              break;
          case 'invalid':
          default:
              // The image is invalid (e.g. it didn’t load), draw a sad face.
              console.log(img);
              break;
      }
    }
});
