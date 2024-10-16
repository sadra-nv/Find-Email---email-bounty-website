"use client";
import React, { useEffect, useRef } from "react";

export default function StarsSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    interface Point {
      x: number;
      y: number;
    }
    // Helpers
    function lineToAngle(
      x1: number,
      y1: number,
      length: number,
      radians: number
    ): Point {
      const x2 = x1 + length * Math.cos(radians);
      const y2 = y1 + length * Math.sin(radians);
      return { x: x2, y: y2 };
    }
    function randomRange(min: number, max: number): number {
      return min + Math.random() * (max - min);
    }
    function degreesToRads(degrees: number): number {
      return (degrees / 180) * Math.PI;
    }
    // Particle Interface
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity?: number;
      trailLengthDelta?: number;
      isSpawning?: boolean;
      isDying?: boolean;
      isDead?: boolean;
      create(x: number, y: number, speed: number, direction: number): Particle;
      getSpeed(): number;
      setSpeed(speed: number): void;
      getHeading(): number;
      setHeading(heading: number): void;
      update(): void;
    }
    // Particle implementation
    const particle: Particle = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      radius: 0,
      create(x: number, y: number, speed: number, direction: number): Particle {
        const obj = Object.create(this);
        obj.x = x;
        obj.y = y;
        obj.vx = Math.cos(direction) * speed;
        obj.vy = Math.sin(direction) * speed;
        return obj;
      },
      getSpeed(): number {
        return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      },
      setSpeed(speed: number): void {
        const heading = this.getHeading();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
      },
      getHeading(): number {
        return Math.atan2(this.vy, this.vx);
      },
      setHeading(heading: number): void {
        const speed = this.getSpeed();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
      },
      update(): void {
        this.x += this.vx;
        this.y += this.vy;
      },
    };
    // Canvas and settings
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;
    const width = (context.canvas.width = window.innerWidth);
    const height = (context.canvas.height = window.innerHeight);

    let shootingStars: Particle[] = [];

    const starsAngle = 145;
    const shootingStarSpeed = { min: 10, max: 15 };
    const shootingStarOpacityDelta = 0.01;
    const trailLengthDelta = 0.01;
    const shootingStarEmittingInterval = 200;
    const shootingStarLifeTime = 200;
    const maxTrailLength = 300;

    const shootingStarRadius = 3;
    let paused = false;
    // Initialize shooting star emission timing
    let lastShootingStarTime = 0;

    // Generate static dots
    const staticDots: Point[] = [];
    const staticDotCount = 35;
    function generateStaticDots(count: number) {
      for (let i = 0; i < count; i++) {
        staticDots.push({
          x: randomRange(0, width),
          y: randomRange(0, height),
        });
      }
    }

    function drawStaticDots() {
      if (!context) return;
      context.fillStyle = "rgba(255, 255, 255, 0.8)";
      context.shadowColor = "purple"; // Shadow color
      context.shadowBlur = 15; // Shadow blur level
      context.shadowOffsetX = 1; // Horizontal shadow offset
      context.shadowOffsetY = 1; // Vertical shadow offset
      staticDots.forEach((dot) => {
        context.beginPath();
        context.arc(dot.x, dot.y, 1, 0, Math.PI * 2, false);
        context.fill();
      });
    }

    // Function to create a shooting star
    function createShootingStar(): void {
      const shootingStar = particle.create(
        randomRange(width / 2, width),
        randomRange(0, height / 2),
        0,
        0
      );
      shootingStar.setSpeed(
        randomRange(shootingStarSpeed.min, shootingStarSpeed.max)
      );
      shootingStar.setHeading(degreesToRads(starsAngle));
      shootingStar.radius = shootingStarRadius;
      shootingStar.opacity = 0;
      shootingStar.trailLengthDelta = 0;
      shootingStar.isSpawning = true;
      shootingStar.isDying = false;
      shootingStars.push(shootingStar);
    }
    // Function to handle the shooting star's lifecycle
    function killShootingStar(shootingStar: Particle): void {
      setTimeout(() => {
        shootingStar.isDying = true;
      }, shootingStarLifeTime);
    }
    // Main update function for rendering and updating shooting stars
    function updateShootingStars(): void {
      shootingStars.forEach((shootingStar) => {
        // Handle spawning (fading in)
        if (shootingStar.isSpawning) {
          shootingStar.opacity! += shootingStarOpacityDelta;
          if (shootingStar.opacity! >= 1.0) {
            shootingStar.isSpawning = false;
            killShootingStar(shootingStar);
          }
        }
        // Handle dying (fading out)
        if (shootingStar.isDying) {
          shootingStar.opacity! -= shootingStarOpacityDelta;
          if (shootingStar.opacity! <= 0.0) {
            shootingStar.isDying = false;
            shootingStar.isDead = true;
          }
        }
        // Increase the trail length as the shooting star moves
        shootingStar.trailLengthDelta! += trailLengthDelta;
        shootingStar.update();
        // Only draw shooting stars that are visible (opacity > 0)
        if (shootingStar.opacity! > 0.0) {
          drawShootingStar(shootingStar);
        }
      });
      // Remove dead shooting stars from the array
      shootingStars = shootingStars.filter(
        (shootingStar) => !shootingStar.isDead
      );
    }

    // Function to draw a shooting star and its trail
    function drawShootingStar(p: Particle): void {
      const x = p.x;
      const y = p.y;
      const currentTrailLength = maxTrailLength * p.trailLengthDelta!;
      const pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());
      if (!context) return;

      context.fillStyle = `rgba(249, 249, 249, ${p.opacity})`;
      context.beginPath();
      context.moveTo(x - 1, y - 1);
      context.lineTo(pos.x, pos.y);
      context.lineTo(x + 1, y + 1);
      context.closePath();
      context.fill();
    }
    // Function to handle the main animation loop using requestAnimationFrame
    function animateShootingStars(time: number): void {
      if (!context) return;

      // Clear the canvas and redraw the background
      context.clearRect(0, 0, width, height);
      context.fillStyle = "transparent";
      context.fillRect(0, 0, width, height);

      drawStaticDots();

      // Generate a new shooting star if enough time has passed
      if (time - lastShootingStarTime > shootingStarEmittingInterval) {
        if (!paused) createShootingStar();
        lastShootingStarTime = time;
      }
      //  Update and render the stars and shooting stars

      updateShootingStars();
      // Request the next frame for smooth animation
      requestAnimationFrame(animateShootingStars);
    }

    generateStaticDots(staticDotCount);
    requestAnimationFrame(animateShootingStars);
    window.onfocus = function () {
      paused = false;
    };
    window.onblur = function () {
      paused = true;
    };
  }, []);
  return (
    <canvas
      className="w-full absolute h-full z-30 top-0 left-0"
      ref={canvasRef}
    ></canvas>
  );
}
