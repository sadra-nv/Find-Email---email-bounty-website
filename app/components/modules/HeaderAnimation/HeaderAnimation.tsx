"use client";
import React, { useEffect, useRef } from "react";

const HeaderAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawScene(ctx);
    };

    const drawScene = (ctx: CanvasRenderingContext2D) => {
      const { width, height } = ctx.canvas;

      // پس‌زمینه
      ctx.fillStyle = "rgba(255, 255, 255, 0.0)";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const necklaceWidth = Math.min(width * 0.8, 800);
      const necklaceHeight = necklaceWidth * 0.4; // افزایش ارتفاع برای کشیدن منحنی به پایین

      // رسم منحنی گردنبند با قسمت پایین کشیده‌تر
      ctx.beginPath();
    //   ctx.moveTo(500, 100);
      ctx.bezierCurveTo(width/4 , height/6 , 200 , 100 , width/4 , height/6-100);
    //   ctx.bezierCurveTo(0, 28, 31, 7, 70, 8);
    //   ctx.bezierCurveTo(109, 9, 313, 99, 425, 90);
      ctx.stroke();

      // تنظیم رنگ و سبک خط
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"; // سفید مات
      ctx.lineWidth = 15;
      ctx.lineCap = "round";
      ctx.stroke();

      // افزودن افکت درخشش
      ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      ctx.shadowBlur = 20;
      ctx.stroke();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  return (
    <div className="w-full h-screen">
      <canvas onClick={(e)=>console.log(e)
      } ref={canvasRef} className="w-full h-full" aria-hidden="true" />
    </div>
  );
};

export default HeaderAnimation;
