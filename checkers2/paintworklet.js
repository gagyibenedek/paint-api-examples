registerPaint('checkers', class {
    static get inputProperties() { return ['--squares']; }
    paint(ctx, geom, props) {
      const squares = parseInt(props.get('--squares')[0]);
      console.log(props.get('--squares')[0])
      const w = geom.width/squares;
      const h = geom.height/squares;
      const colors = ['red', 'green', 'blue'];
      for(let i = 0; i < squares; i++) {
        for(let j = 0; j < squares; j++) {
          ctx.beginPath();
          ctx.rect(i*w, j*h, w, h);
          ctx.fillStyle = colors[(i+j)%3];
          ctx.fill();
        }
      }
    }
});
