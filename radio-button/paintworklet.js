registerPaint('radio-button', class {
    static get inputProperties() { return ['--tick']; }
    paint(ctx, geom, props) {
      this.x = (this.x || 1) + 1;
      console.log(this.x);
      const tick = props.get('--tick').value;
      ctx.beginPath();
      ctx.arc(geom.width/2, geom.height/2, geom.height*tick/100, 0, Math.PI * 2);
      ctx.fill();
    }
});
