registerPaint('data', class {
    static get inputProperties() { return ['--data']; }
    paint(ctx, geom, props) {
      const data = JSON.parse(props.get('--data')[0]);

      const dx = geom.width/20;
      const dy = geom.height/20;
      const ox = dx;
      const oy = geom.height - dy;
      
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(ox, oy);
      ctx.lineTo(ox, dy);
      ctx.moveTo(ox, oy);
      ctx.lineTo(geom.width - dx, oy);
      ctx.stroke();
      
      for(let i of data) {
        ctx.beginPath();
        const x = ox + (Math.abs(geom.width - 2*dx)*i.x/100);
        const y = oy - (Math.abs(geom.height - 2*dy)*i.y/100);
        ctx.fillStyle = i.clr;
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

    }
});
