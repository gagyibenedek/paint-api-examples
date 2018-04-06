registerPaint('fractal', class {
    static get inputProperties() { return ['--tick']; }
    paint(ctx, geom, props) {
      this.tick = props.get('--tick').value;
      this.ctx = ctx;
      ctx.beginPath();
      ctx.lineWidth = 3;
      const a = {
        x: geom.width/2,
        y: 0,
      };
      const b = {
        x: 0,
        y: geom.height,
      };
      const c = {
        x: geom.width,
        y: geom.height,
      };
      this.paintTriangle(a, b, c, 0);
      ctx.stroke();
    }

    paintTriangle(a, b, c, count) {
      this.ctx.moveTo(a.x, a.y);
      this.ctx.lineTo(b.x, b.y);
      this.ctx.lineTo(c.x, c.y);
      this.ctx.lineTo(a.x, a.y);
      if(count < this.tick) {
        this.paintTriangle(
          a,
          {x: (Math.abs(a.x - b.x)/2) + Math.min(a.x, b.x), y: (Math.abs(a.y - b.y)/2) + Math.min(a.y, b.y)},
          {x: (Math.abs(a.x - c.x)/2) + Math.min(a.x, c.x), y: (Math.abs(a.y - c.y)/2) + Math.min(a.y, c.y)},
          count + 1,
        );
        this.paintTriangle(
          b,
          {x: (Math.abs(b.x - a.x)/2) + Math.min(b.x, a.x), y: (Math.abs(b.y - a.y)/2) + Math.min(b.y, a.y)},
          {x: (Math.abs(b.x - c.x)/2) + Math.min(b.x, c.x), y: (Math.abs(b.y - c.y)/2) + Math.min(b.y, c.y)},
          count + 1,
        );
        this.paintTriangle(
          c,
          {x: (Math.abs(c.x - b.x)/2) + Math.min(c.x, b.x), y: (Math.abs(c.y - b.y)/2) + Math.min(c.y, b.y)},
          {x: (Math.abs(c.x - a.x)/2) + Math.min(c.x, a.x), y: (Math.abs(c.y - a.y)/2) + Math.min(c.y, a.y)},
          count + 1,
        );
      }
    }
});
