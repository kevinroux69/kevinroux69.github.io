import React, { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointsRef = useRef<Array<{ x: number; y: number; life: number }>>([]);

  useEffect(() => {
    // disable on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.background = 'transparent';
    };

    resize();
    window.addEventListener('resize', resize);

    let lastMoveTime = 0;
    const onMove = (e: MouseEvent) => {
      // throttle pushes to avoid huge arrays
      const now = performance.now();
      if (now - lastMoveTime < 10) return;
      lastMoveTime = now;

      // push a single bright point
      pointsRef.current.push({ x: e.clientX, y: e.clientY, life: 1.0 });
      // keep array short
      if (pointsRef.current.length > 60) pointsRef.current.shift();
    };

    window.addEventListener('mousemove', onMove);

    const render = () => {
      rafRef.current = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = pointsRef.current;
      if (pts.length < 2) return;

      // build a smooth path using quadratic smoothing
      // choose colors based on theme (dark mode vs light)
      const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  // light mode: restore the original deep-blue trail look; dark mode: bright cyan with stronger glow
  const coreColor = isDark ? 'rgba(120,230,255,0.98)' : 'rgba(11,99,217,0.98)';
  const glowColor = isDark ? 'rgba(120,230,255,0.95)' : 'rgba(11,99,217,0.25)';
  const highlightColor = isDark ? 'rgba(230,250,255,0.98)' : 'rgba(200,230,255,0.95)';

      // draw wide blurred glow first (stronger in dark mode)
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
  ctx.lineWidth = isDark ? 8 : 6;
  ctx.strokeStyle = glowColor;
  ctx.shadowBlur = isDark ? 96 : 20;
      ctx.shadowColor = glowColor;
      ctx.globalCompositeOperation = 'lighter';

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const cx = (pts[i].x + pts[i + 1].x) / 2;
        const cy = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx, cy);
      }
      const last = pts[pts.length - 1];
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
      ctx.restore();

      // solid core line on top
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
  ctx.lineWidth = isDark ? 3.6 : 3.6;
      ctx.strokeStyle = coreColor;
      ctx.globalCompositeOperation = 'source-over';
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const cx = (pts[i].x + pts[i + 1].x) / 2;
        const cy = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx, cy);
      }
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
      ctx.restore();

      // inner bright highlight for laser sheen
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 1.2;
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = highlightColor;
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const cx = (pts[i].x + pts[i + 1].x) / 2;
        const cy = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx, cy);
      }
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
      ctx.restore();

      // fade points
      for (let i = pts.length - 1; i >= 0; i--) {
        pts[i].life -= 0.03;
        if (pts[i].life <= 0) pts.splice(i, 1);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
};

export default CursorTrail;
