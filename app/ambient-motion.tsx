"use client";

import { useEffect, useRef } from "react";

/** Adds a decorative motion layer; all page content is rendered on the server. */
export default function AmbientMotion() {
  const surface = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    function animate() {
      x += (targetX - x) * 0.065;
      y += (targetY - y) * 0.065;
      const page = surface.current?.parentElement;
      page?.style.setProperty("--pointer-x", x.toFixed(4));
      page?.style.setProperty("--pointer-y", y.toFixed(4));
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.0005) {
        frame = requestAnimationFrame(animate);
      } else { frame = 0; }
    }
    function move(event: PointerEvent) {
      if (reduced.matches || !finePointer.matches || event.pointerType !== "mouse") return;
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(animate);
    }
    function reset() {
      targetX = targetY = 0;
      if (!frame) frame = requestAnimationFrame(animate);
    }
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    reduced.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      reduced.removeEventListener("change", reset);
    };
  }, []);
  return <div ref={surface} hidden aria-hidden="true" />;
}
