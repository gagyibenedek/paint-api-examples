registerPaint('fancy', class {
    static get inputProperties() { return ['--tick']; }
    paint(ctx, geom, props) {
      this.x = (this.x || 1) + 1;
      const tick = props.get('--tick').value;
      ctx.beginPath();
      let i = 10;
      for (let j = 0 + tick % 10; j < geom.width; j += 21) {
        ctx.moveTo(j, i);
        ctx.arc(j, i, 10, 0, Math.PI * 2);
      }
      i = geom.height - 10
      for (let j = 0 + tick % 10; j < geom.width; j += 21) {
        ctx.moveTo(j, i);
        ctx.arc(j, i, 10, 0, Math.PI * 2);
      }
      ctx.fillStyle = 'red';
      ctx.fill();
    }
});
