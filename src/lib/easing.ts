/**
 * Cubic-bezier easing evaluator, so GSAP tweens can use the exact same
 * curve as the CSS entrance easing (cubic-bezier(0.25, 1, 0.5, 1)) instead
 * of an approximated named ease.
 */
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const a = (a1: number, a2: number) => 1 - 3 * a2 + 3 * a1;
  const b = (a1: number, a2: number) => 3 * a2 - 6 * a1;
  const c = (a1: number) => 3 * a1;

  const bezierX = (t: number) => ((a(x1, x2) * t + b(x1, x2)) * t + c(x1)) * t;
  const bezierY = (t: number) => ((a(y1, y2) * t + b(y1, y2)) * t + c(y1)) * t;
  const derivativeX = (t: number) => 3 * a(x1, x2) * t * t + 2 * b(x1, x2) * t + c(x1);

  const solveT = (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = bezierX(t) - x;
      const d = derivativeX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= dx / d;
    }
    return Math.min(1, Math.max(0, t));
  };

  return (x: number) => bezierY(solveT(x));
}

/** The brand's entrance curve: slow, late arrival, no overshoot. */
export const entranceEase = cubicBezier(0.25, 1, 0.5, 1);
