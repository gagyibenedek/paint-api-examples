registerPaint('checkers', class {
    paint(ctx, geom) {
      const w = geom.width/9;
      const h = geom.height/9;
      const colors = ['red', 'green', 'blue'];
      for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
          ctx.beginPath();
          ctx.rect(i*w, j*h, w, h);
          ctx.fillStyle = colors[(i+j)%3];
          ctx.fill();
        }
      }
    }
});
