registerPaint('ripple', class {
    static get inputProperties() { return ['--tick']; }
    paint(ctx, geom, props) {
      const tick = props.get('--tick').value;
      if(tick > 0) {
        ctx.beginPath();
        ctx.lineWidth = Math.min(tick, geom.height);
        ctx.moveTo(0, geom.height/2);
        ctx.lineTo(geom.width, geom.height/2);
        ctx.stroke();
      }
    }
});
