"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
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
        const shootingStarEmittingInterval = 500;
        const shootingStarLifeTime = 500;
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

        <div className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] z-10">
            <div className="container">
                <div className="relative min-h-fit overflow-y-hidden pt-40 lg:pt-52 overflow-hidden flex items-center justify-center">
                    <video
                        className="mix-blend-lighten relative z-10"
                        autoPlay
                        muted
                        loop
                    >
                        <source src="/videos/q-c3d7becf.webm" type="video/webm" />
                        Your browser does not support the video playback.
                    </video>
                    <div className="absolute flex items-center gap-0.5 top-24 sm:top-40 lg:top-52 left-1/2 -translate-x-1/2 ">
                        <img
                            className="w-6 sm:w-8 md:w-12"
                            src="/icons/Email.svg"
                            alt=""
                        />
                        <h1 className="text-xl sm:text-2xl md:text-4xl">Blog</h1>
                    </div>
                    <img
                        className="w-16 sm:w-24 md:w-28 absolute lg:w-36 xl:w-40 z-30"
                        src="/images/database.svg"
                        alt=""
                    />
                    <svg
                        className="w-full absolute top-40 lg:top-52"
                        preserveAspectRatio="xMidYMax meet"
                        viewBox="0 0 1318 500"
                        fill="none"
                    >
                        <g id="curve-balls-1(8)-cropped 1" clip-path="url(#clip0_25_145)">
                            <g id="curve-balls-1">
                                <g id="Clip path group">
                                    <mask
                                        id="mask0_25_145"
                                        // style="mask-type:luminance"
                                        maskUnits="userSpaceOnUse"
                                        x="-1"
                                        y="39"
                                        width="1309"
                                        height="464"
                                    >
                                        <g id="clip0_19_62">
                                            <path
                                                id="Vector"
                                                d="M1307.95 39.5H-0.0498047V502.5H1307.95V39.5Z"
                                                fill="white"
                                            />
                                        </g>
                                    </mask>
                                    <g mask="url(#mask0_25_145)">
                                        <g id="hexa-line">
                                            <g id="Group 238381">
                                                <path
                                                    id="Vector_2"
                                                    d="M605.427 -815.373C637.512 -832.875 676.87 -832.875 708.954 -815.373L1218.1 -537.636C1250.72 -519.845 1270.86 -486.684 1270.86 -450.762V102.541C1270.86 138.463 1250.72 171.623 1218.1 189.414L708.954 467.153C676.87 484.655 637.512 484.655 605.427 467.153L96.2738 189.414C63.6593 171.623 43.5234 138.463 43.5234 102.541V-450.762C43.5234 -486.684 63.6593 -519.845 96.2738 -537.636L605.427 -815.373Z"
                                                    stroke="white"
                                                    stroke-opacity="0.15"
                                                    stroke-width="25"
                                                />
                                                <path
                                                    id="Vector_2_2"
                                                    d="M605.427 -815.373C637.512 -832.875 676.87 -832.875 708.954 -815.373L1218.1 -537.636C1250.72 -519.845 1270.86 -486.684 1270.86 -450.762V102.541C1270.86 138.463 1250.72 171.623 1218.1 189.414L708.954 467.153C676.87 484.655 637.512 484.655 605.427 467.153L96.2738 189.414C63.6593 171.623 43.5234 138.463 43.5234 102.541V-450.762C43.5234 -486.684 63.6593 -519.845 96.2738 -537.636L605.427 -815.373Z"
                                                    stroke="white"
                                                    stroke-opacity="0.7"
                                                    stroke-width="3"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g id="Clip path group_2">
                                    <mask
                                        id="mask1_25_145"
                                        // style="mask-type:luminance"
                                        maskUnits="userSpaceOnUse"
                                        x="301"
                                        y="62"
                                        width="720"
                                        height="274"
                                    >
                                        <g id="clip1_19_62">
                                            <path
                                                id="Vector_3"
                                                d="M1020.95 62.8477H301.95V335.848H1020.95V62.8477Z"
                                                fill="white"
                                            />
                                        </g>
                                    </mask>
                                    <g mask="url(#mask1_25_145)">
                                        <g id="spiders">
                                            <g id="dots">
                                                <g id="Group">
                                                    <path
                                                        id="Vector_3_2"
                                                        d="M666.45 172.5C666.45 170.567 664.883 169 662.95 169C661.017 169 659.45 170.567 659.45 172.5C659.45 174.433 661.017 176 662.95 176C664.883 176 666.45 174.433 666.45 172.5Z"
                                                        fill="#BA9CFF"
                                                        fill-opacity="0.3"
                                                        stroke="#BA9CFF"
                                                        stroke-opacity="0.3"
                                                    />
                                                </g>
                                                <g id="Group_2">
                                                    <path
                                                        id="Vector_4"
                                                        d="M880.95 262C880.95 260.067 879.383 258.5 877.45 258.5C875.517 258.5 873.95 260.067 873.95 262C873.95 263.933 875.517 265.5 877.45 265.5C879.383 265.5 880.95 263.933 880.95 262Z"
                                                        fill="#BA9CFF"
                                                        fill-opacity="0.3"
                                                        stroke="#BA9CFF"
                                                        stroke-opacity="0.3"
                                                    />
                                                </g>
                                                <g id="Group_3">
                                                    <path
                                                        id="Vector_5"
                                                        d="M450.95 263C450.95 261.067 449.383 259.5 447.45 259.5C445.517 259.5 443.95 261.067 443.95 263C443.95 264.933 445.517 266.5 447.45 266.5C449.383 266.5 450.95 264.933 450.95 263Z"
                                                        fill="#BA9CFF"
                                                        fill-opacity="0.3"
                                                        stroke="#BA9CFF"
                                                        stroke-opacity="0.3"
                                                    />
                                                </g>
                                            </g>
                                            <g id="dots_2">
                                                <g id="Group_4">
                                                    <path
                                                        id="Vector_6"
                                                        d="M666.95 73C666.95 71.067 665.383 69.5 663.45 69.5C661.517 69.5 659.95 71.067 659.95 73C659.95 74.933 661.517 76.5 663.45 76.5C665.383 76.5 666.95 74.933 666.95 73Z"
                                                        fill="#BA9CFF"
                                                        fill-opacity="0.3"
                                                        stroke="#BA9CFF"
                                                        stroke-opacity="0.3"
                                                    />
                                                </g>
                                                <g id="Group_5">
                                                    <path
                                                        id="Vector_7"
                                                        d="M955.95 196C955.95 194.067 954.383 192.5 952.45 192.5C950.517 192.5 948.95 194.067 948.95 196C948.95 197.933 950.517 199.5 952.45 199.5C954.383 199.5 955.95 197.933 955.95 196Z"
                                                        fill="#BA9CFF"
                                                        fill-opacity="0.3"
                                                        stroke="#BA9CFF"
                                                        stroke-opacity="0.3"
                                                    />
                                                </g>
                                                <g id="Group_6">
                                                    <path
                                                        id="Vector_8"
                                                        d="M388.95 184C388.95 182.067 387.383 180.5 385.45 180.5C383.517 180.5 381.95 182.067 381.95 184C381.95 185.933 383.517 187.5 385.45 187.5C387.383 187.5 388.95 185.933 388.95 184Z"
                                                        fill="#BA9CFF"
                                                        fill-opacity="0.3"
                                                        stroke="#BA9CFF"
                                                        stroke-opacity="0.3"
                                                    />
                                                </g>
                                            </g>
                                            <g id="Mask group">
                                                <g id="Mask group_2">
                                                    <mask
                                                        id="mask2_25_145"
                                                        // style="mask-type:alpha"
                                                        maskUnits="userSpaceOnUse"
                                                        x="258"
                                                        y="68"
                                                        width="809"
                                                        height="809"
                                                    >
                                                        <g id="Group_7">
                                                            <g id="Group_7_2">
                                                                <path
                                                                    id="Vector_9"
                                                                    d="M1066.95 68.5H258.95V876.5H1066.95V68.5Z"
                                                                    fill="url(#paint0_linear_25_145)"
                                                                />
                                                            </g>
                                                        </g>
                                                    </mask>
                                                    <g mask="url(#mask2_25_145)">
                                                        <g id="Group_8">
                                                            <g id="Group_8_2">
                                                                <path
                                                                    id="Vector_10"
                                                                    d="M1066.95 476.5C1066.95 253.377 886.073 72.5 662.95 72.5C439.827 72.5 258.95 253.377 258.95 476.5C258.95 699.623 439.827 880.5 662.95 880.5C886.073 880.5 1066.95 699.623 1066.95 476.5Z"
                                                                    fill="#BA9CFF"
                                                                    fill-opacity="0.04"
                                                                />
                                                                <path
                                                                    id="Vector_11"
                                                                    d="M1066.45 476.5C1066.45 253.653 885.797 73 662.95 73C440.103 73 259.45 253.653 259.45 476.5C259.45 699.347 440.103 880 662.95 880C885.797 880 1066.45 699.347 1066.45 476.5Z"
                                                                    stroke="#BA9CFF"
                                                                    stroke-opacity="0.3"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="Mask group_2_2">
                                                <g id="Mask group_3">
                                                    <mask
                                                        id="mask3_25_145"
                                                        // style="mask-type:alpha"
                                                        maskUnits="userSpaceOnUse"
                                                        x="358"
                                                        y="168"
                                                        width="609"
                                                        height="609"
                                                    >
                                                        <g id="Group_9">
                                                            <g id="Group_9_2">
                                                                <path
                                                                    id="Vector_12"
                                                                    d="M966.95 168.5H358.95V776.5H966.95V168.5Z"
                                                                    fill="url(#paint1_linear_25_145)"
                                                                />
                                                            </g>
                                                        </g>
                                                    </mask>
                                                    <g mask="url(#mask3_25_145)">
                                                        <g id="Group_10">
                                                            <g id="Group_10_2">
                                                                <path
                                                                    id="Vector_13"
                                                                    d="M966.95 476.5C966.95 308.605 830.845 172.5 662.95 172.5C495.055 172.5 358.95 308.605 358.95 476.5C358.95 644.395 495.055 780.5 662.95 780.5C830.845 780.5 966.95 644.395 966.95 476.5Z"
                                                                    fill="#BA9CFF"
                                                                    fill-opacity="0.04"
                                                                />
                                                                <path
                                                                    id="Vector_14"
                                                                    d="M966.45 476.5C966.45 308.882 830.568 173 662.95 173C495.332 173 359.45 308.882 359.45 476.5C359.45 644.118 495.332 780 662.95 780C830.568 780 966.45 644.118 966.45 476.5Z"
                                                                    stroke="#BA9CFF"
                                                                    stroke-opacity="0.3"
                                                                />
                                                                <g id="Group_11">
                                                                    <path
                                                                        id="Vector_15"
                                                                        d="M452.67 262.22C452.67 260.011 450.879 258.22 448.67 258.22C446.461 258.22 444.67 260.011 444.67 262.22C444.67 264.429 446.461 266.22 448.67 266.22C450.879 266.22 452.67 264.429 452.67 262.22Z"
                                                                        fill="#BA9CFF"
                                                                        fill-opacity="0.01"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g id="balls">
                                    <g id="ball2">
                                        <path
                                            id="Vector_16"
                                            d="M215.693 273.5C225.803 273.5 233.999 264.993 233.999 254.5C233.999 244.007 225.803 235.5 215.693 235.5C205.582 235.5 197.387 244.007 197.387 254.5C197.387 264.993 205.582 273.5 215.693 273.5Z"
                                            fill="#B2A0DB"
                                            fill-opacity="0.2"
                                        />
                                        <path
                                            id="Ellipse 1"
                                            d="M228.218 255C228.218 261.904 222.826 267.5 216.174 267.5C209.523 267.5 204.131 261.904 204.131 255C204.131 248.096 209.523 242.5 216.174 242.5C222.826 242.5 228.218 248.096 228.218 255Z"
                                            fill="url(#paint2_linear_25_145)"
                                        />
                                        <g id="rotate">
                                            <g id="Group 238382">
                                                <path
                                                    id="Ellipse 3"
                                                    d="M215.498 283.125C232.224 283.125 245.835 270.337 245.835 254.5C245.835 238.663 232.224 225.875 215.498 225.875C198.771 225.875 185.161 238.663 185.161 254.5C185.161 270.337 198.771 283.125 215.498 283.125Z"
                                                    stroke="#C8C4E3"
                                                />
                                                <path
                                                    id="Ellipse 4"
                                                    d="M216.573 279.011C231.045 278.464 242.361 267.108 241.766 253.574C241.17 240.04 228.894 229.576 214.422 230.123C199.949 230.67 188.633 242.026 189.228 255.56C189.824 269.094 202.1 279.558 216.573 279.011Z"
                                                    stroke="#B8B5CF"
                                                    stroke-opacity="0.41"
                                                />
                                            </g>
                                            <g id="Ellipse 5">
                                                <path
                                                    id="Vector_17"
                                                    d="M227.129 280.75C227.129 282.821 225.318 284.5 223.084 284.5C220.849 284.5 219.038 282.821 219.038 280.75C219.038 278.679 220.849 277 223.084 277C225.318 277 227.129 278.679 227.129 280.75Z"
                                                    fill="url(#paint3_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_18"
                                                    d="M227.129 280.75C227.129 282.821 225.318 284.5 223.084 284.5C220.849 284.5 219.038 282.821 219.038 280.75C219.038 278.679 220.849 277 223.084 277C225.318 277 227.129 278.679 227.129 280.75Z"
                                                    fill="url(#paint4_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 6">
                                                <path
                                                    id="Vector_19"
                                                    d="M199.821 269.969C199.821 273.334 196.878 276.062 193.247 276.062C189.616 276.062 186.673 273.334 186.673 269.969C186.673 266.603 189.616 263.875 193.247 263.875C196.878 263.875 199.821 266.603 199.821 269.969Z"
                                                    fill="url(#paint5_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_20"
                                                    d="M199.821 269.969C199.821 273.334 196.878 276.062 193.247 276.062C189.616 276.062 186.673 273.334 186.673 269.969C186.673 266.603 189.616 263.875 193.247 263.875C196.878 263.875 199.821 266.603 199.821 269.969Z"
                                                    fill="url(#paint6_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 7">
                                                <path
                                                    id="Vector_21"
                                                    d="M197.798 237.625C197.798 239.696 195.987 241.375 193.753 241.375C191.518 241.375 189.707 239.696 189.707 237.625C189.707 235.554 191.518 233.875 193.753 233.875C195.987 233.875 197.798 235.554 197.798 237.625Z"
                                                    fill="url(#paint7_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_22"
                                                    d="M197.798 237.625C197.798 239.696 195.987 241.375 193.753 241.375C191.518 241.375 189.707 239.696 189.707 237.625C189.707 235.554 191.518 233.875 193.753 233.875C195.987 233.875 197.798 235.554 197.798 237.625Z"
                                                    fill="url(#paint8_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 8">
                                                <path
                                                    id="Vector_23"
                                                    d="M235.221 230.594C235.221 233.959 232.277 236.688 228.646 236.688C225.015 236.688 222.072 233.959 222.072 230.594C222.072 227.228 225.015 224.5 228.646 224.5C232.277 224.5 235.221 227.228 235.221 230.594Z"
                                                    fill="url(#paint9_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_24"
                                                    d="M235.221 230.594C235.221 233.959 232.277 236.688 228.646 236.688C225.015 236.688 222.072 233.959 222.072 230.594C222.072 227.228 225.015 224.5 228.646 224.5C232.277 224.5 235.221 227.228 235.221 230.594Z"
                                                    fill="url(#paint10_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 9">
                                                <path
                                                    id="Vector_25"
                                                    d="M248.369 253.562C248.369 255.634 246.557 257.312 244.323 257.312C242.088 257.312 240.277 255.634 240.277 253.562C240.277 251.491 242.088 249.812 244.323 249.812C246.557 249.812 248.369 251.491 248.369 253.562Z"
                                                    fill="url(#paint11_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_26"
                                                    d="M248.369 253.562C248.369 255.634 246.557 257.312 244.323 257.312C242.088 257.312 240.277 255.634 240.277 253.562C240.277 251.491 242.088 249.812 244.323 249.812C246.557 249.812 248.369 251.491 248.369 253.562Z"
                                                    fill="url(#paint12_linear_25_145)"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="ball1">
                                        <path
                                            id="Vector_17_2"
                                            d="M43.2447 63.5C53.3549 63.5 61.5509 54.9934 61.5509 44.5C61.5509 34.0066 53.3549 25.5 43.2447 25.5C33.1345 25.5 24.9385 34.0066 24.9385 44.5C24.9385 54.9934 33.1345 63.5 43.2447 63.5Z"
                                            fill="#B2A0DB"
                                            fill-opacity="0.2"
                                        />
                                        <path
                                            id="Ellipse 1_2"
                                            d="M55.7707 45C55.7707 51.9036 50.3786 57.5 43.7272 57.5C37.0757 57.5 31.6836 51.9036 31.6836 45C31.6836 38.0964 37.0757 32.5 43.7272 32.5C50.3786 32.5 55.7707 38.0964 55.7707 45Z"
                                            fill="url(#paint13_linear_25_145)"
                                        />
                                        <g id="rotate_2">
                                            <g id="Group 238382_2">
                                                <path
                                                    id="Ellipse 3_2"
                                                    d="M43.0508 73.125C59.7772 73.125 73.3878 60.3366 73.3878 44.5C73.3878 28.6634 59.7772 15.875 43.0508 15.875C26.3244 15.875 12.7139 28.6634 12.7139 44.5C12.7139 60.3366 26.3244 73.125 43.0508 73.125Z"
                                                    stroke="#C8C4E3"
                                                />
                                                <path
                                                    id="Ellipse 4_2"
                                                    d="M44.1254 69.0106C58.5981 68.4636 69.9141 57.1076 69.3187 43.5739C68.7233 30.0401 56.4473 19.576 41.9746 20.123C27.5018 20.6701 16.1858 32.026 16.7812 45.5598C17.3766 59.0935 29.6526 69.5577 44.1254 69.0106Z"
                                                    stroke="#B8B5CF"
                                                    stroke-opacity="0.41"
                                                />
                                            </g>
                                            <g id="Ellipse 5_2">
                                                <path
                                                    id="Vector_27"
                                                    d="M54.6822 70.75C54.6822 72.8211 52.8709 74.5 50.6365 74.5C48.4021 74.5 46.5908 72.8211 46.5908 70.75C46.5908 68.6789 48.4021 67 50.6365 67C52.8709 67 54.6822 68.6789 54.6822 70.75Z"
                                                    fill="url(#paint14_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_28"
                                                    d="M54.6822 70.75C54.6822 72.8211 52.8709 74.5 50.6365 74.5C48.4021 74.5 46.5908 72.8211 46.5908 70.75C46.5908 68.6789 48.4021 67 50.6365 67C52.8709 67 54.6822 68.6789 54.6822 70.75Z"
                                                    fill="url(#paint15_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 6_2">
                                                <path
                                                    id="Vector_29"
                                                    d="M27.3741 59.9688C27.3741 63.3342 24.4307 66.0625 20.7998 66.0625C17.169 66.0625 14.2256 63.3342 14.2256 59.9688C14.2256 56.6033 17.169 53.875 20.7998 53.875C24.4307 53.875 27.3741 56.6033 27.3741 59.9688Z"
                                                    fill="url(#paint16_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_30"
                                                    d="M27.3741 59.9688C27.3741 63.3342 24.4307 66.0625 20.7998 66.0625C17.169 66.0625 14.2256 63.3342 14.2256 59.9688C14.2256 56.6033 17.169 53.875 20.7998 53.875C24.4307 53.875 27.3741 56.6033 27.3741 59.9688Z"
                                                    fill="url(#paint17_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 7_2">
                                                <path
                                                    id="Vector_31"
                                                    d="M25.3511 27.625C25.3511 29.6961 23.5398 31.375 21.3055 31.375C19.0711 31.375 17.2598 29.6961 17.2598 27.625C17.2598 25.5539 19.0711 23.875 21.3055 23.875C23.5398 23.875 25.3511 25.5539 25.3511 27.625Z"
                                                    fill="url(#paint18_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_32"
                                                    d="M25.3511 27.625C25.3511 29.6961 23.5398 31.375 21.3055 31.375C19.0711 31.375 17.2598 29.6961 17.2598 27.625C17.2598 25.5539 19.0711 23.875 21.3055 23.875C23.5398 23.875 25.3511 25.5539 25.3511 27.625Z"
                                                    fill="url(#paint19_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 8_2">
                                                <path
                                                    id="Vector_33"
                                                    d="M62.7735 20.5938C62.7735 23.9592 59.8301 26.6875 56.1992 26.6875C52.5684 26.6875 49.625 23.9592 49.625 20.5938C49.625 17.2283 52.5684 14.5 56.1992 14.5C59.8301 14.5 62.7735 17.2283 62.7735 20.5938Z"
                                                    fill="url(#paint20_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_34"
                                                    d="M62.7735 20.5938C62.7735 23.9592 59.8301 26.6875 56.1992 26.6875C52.5684 26.6875 49.625 23.9592 49.625 20.5938C49.625 17.2283 52.5684 14.5 56.1992 14.5C59.8301 14.5 62.7735 17.2283 62.7735 20.5938Z"
                                                    fill="url(#paint21_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 9_2">
                                                <path
                                                    id="Vector_35"
                                                    d="M75.9215 43.5625C75.9215 45.6336 74.1101 47.3125 71.8758 47.3125C69.6414 47.3125 67.8301 45.6336 67.8301 43.5625C67.8301 41.4914 69.6414 39.8125 71.8758 39.8125C74.1101 39.8125 75.9215 41.4914 75.9215 43.5625Z"
                                                    fill="url(#paint22_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_36"
                                                    d="M75.9215 43.5625C75.9215 45.6336 74.1101 47.3125 71.8758 47.3125C69.6414 47.3125 67.8301 45.6336 67.8301 43.5625C67.8301 41.4914 69.6414 39.8125 71.8758 39.8125C74.1101 39.8125 75.9215 41.4914 75.9215 43.5625Z"
                                                    fill="url(#paint23_linear_25_145)"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="ball4">
                                        <path
                                            id="Vector_18_2"
                                            d="M1270.16 65.1514C1280.27 65.1514 1288.46 56.6448 1288.46 46.1514C1288.46 35.658 1280.27 27.1514 1270.16 27.1514C1260.05 27.1514 1251.85 35.658 1251.85 46.1514C1251.85 56.6448 1260.05 65.1514 1270.16 65.1514Z"
                                            fill="#B2A0DB"
                                            fill-opacity="0.2"
                                        />
                                        <path
                                            id="Ellipse 1_3"
                                            d="M1282.68 46.6514C1282.68 53.5549 1277.29 59.1514 1270.64 59.1514C1263.99 59.1514 1258.59 53.5549 1258.59 46.6514C1258.59 39.7478 1263.99 34.1514 1270.64 34.1514C1277.29 34.1514 1282.68 39.7478 1282.68 46.6514Z"
                                            fill="url(#paint24_linear_25_145)"
                                        />
                                        <g id="rotate_3">
                                            <g id="Group 238382_3">
                                                <path
                                                    id="Ellipse 3_3"
                                                    d="M1269.96 74.7764C1286.69 74.7764 1300.3 61.9879 1300.3 46.1514C1300.3 30.3148 1286.69 17.5264 1269.96 17.5264C1253.23 17.5264 1239.62 30.3148 1239.62 46.1514C1239.62 61.9879 1253.23 74.7764 1269.96 74.7764Z"
                                                    stroke="#C8C4E3"
                                                />
                                                <path
                                                    id="Ellipse 4_3"
                                                    d="M1271.04 70.662C1285.51 70.1149 1296.82 58.759 1296.23 45.2252C1295.63 31.6915 1283.36 21.2273 1268.88 21.7744C1254.41 22.3214 1243.1 33.6774 1243.69 47.2111C1244.29 60.7449 1256.56 71.209 1271.04 70.662Z"
                                                    stroke="#B8B5CF"
                                                    stroke-opacity="0.41"
                                                />
                                            </g>
                                            <g id="Ellipse 5_3">
                                                <path
                                                    id="Vector_37"
                                                    d="M1281.59 72.4014C1281.59 74.4724 1279.78 76.1514 1277.55 76.1514C1275.31 76.1514 1273.5 74.4724 1273.5 72.4014C1273.5 70.3303 1275.31 68.6514 1277.55 68.6514C1279.78 68.6514 1281.59 70.3303 1281.59 72.4014Z"
                                                    fill="url(#paint25_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_38"
                                                    d="M1281.59 72.4014C1281.59 74.4724 1279.78 76.1514 1277.55 76.1514C1275.31 76.1514 1273.5 74.4724 1273.5 72.4014C1273.5 70.3303 1275.31 68.6514 1277.55 68.6514C1279.78 68.6514 1281.59 70.3303 1281.59 72.4014Z"
                                                    fill="url(#paint26_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 6_3">
                                                <path
                                                    id="Vector_39"
                                                    d="M1254.28 61.6201C1254.28 64.9856 1251.34 67.7139 1247.71 67.7139C1244.08 67.7139 1241.14 64.9856 1241.14 61.6201C1241.14 58.2546 1244.08 55.5264 1247.71 55.5264C1251.34 55.5264 1254.28 58.2546 1254.28 61.6201Z"
                                                    fill="url(#paint27_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_40"
                                                    d="M1254.28 61.6201C1254.28 64.9856 1251.34 67.7139 1247.71 67.7139C1244.08 67.7139 1241.14 64.9856 1241.14 61.6201C1241.14 58.2546 1244.08 55.5264 1247.71 55.5264C1251.34 55.5264 1254.28 58.2546 1254.28 61.6201Z"
                                                    fill="url(#paint28_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 7_3">
                                                <path
                                                    id="Vector_41"
                                                    d="M1252.26 29.2764C1252.26 31.3474 1250.45 33.0264 1248.22 33.0264C1245.98 33.0264 1244.17 31.3474 1244.17 29.2764C1244.17 27.2053 1245.98 25.5264 1248.22 25.5264C1250.45 25.5264 1252.26 27.2053 1252.26 29.2764Z"
                                                    fill="url(#paint29_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_42"
                                                    d="M1252.26 29.2764C1252.26 31.3474 1250.45 33.0264 1248.22 33.0264C1245.98 33.0264 1244.17 31.3474 1244.17 29.2764C1244.17 27.2053 1245.98 25.5264 1248.22 25.5264C1250.45 25.5264 1252.26 27.2053 1252.26 29.2764Z"
                                                    fill="url(#paint30_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 8_3">
                                                <path
                                                    id="Vector_43"
                                                    d="M1289.68 22.2451C1289.68 25.6106 1286.74 28.3389 1283.11 28.3389C1279.48 28.3389 1276.53 25.6106 1276.53 22.2451C1276.53 18.8796 1279.48 16.1514 1283.11 16.1514C1286.74 16.1514 1289.68 18.8796 1289.68 22.2451Z"
                                                    fill="url(#paint31_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_44"
                                                    d="M1289.68 22.2451C1289.68 25.6106 1286.74 28.3389 1283.11 28.3389C1279.48 28.3389 1276.53 25.6106 1276.53 22.2451C1276.53 18.8796 1279.48 16.1514 1283.11 16.1514C1286.74 16.1514 1289.68 18.8796 1289.68 22.2451Z"
                                                    fill="url(#paint32_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 9_3">
                                                <path
                                                    id="Vector_45"
                                                    d="M1302.83 45.2139C1302.83 47.2849 1301.02 48.9639 1298.79 48.9639C1296.55 48.9639 1294.74 47.2849 1294.74 45.2139C1294.74 43.1428 1296.55 41.4639 1298.79 41.4639C1301.02 41.4639 1302.83 43.1428 1302.83 45.2139Z"
                                                    fill="url(#paint33_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_46"
                                                    d="M1302.83 45.2139C1302.83 47.2849 1301.02 48.9639 1298.79 48.9639C1296.55 48.9639 1294.74 47.2849 1294.74 45.2139C1294.74 43.1428 1296.55 41.4639 1298.79 41.4639C1301.02 41.4639 1302.83 43.1428 1302.83 45.2139Z"
                                                    fill="url(#paint34_linear_25_145)"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="ball3">
                                        <path
                                            id="Vector_19_2"
                                            d="M1087.34 280.5C1097.45 280.5 1105.64 271.993 1105.64 261.5C1105.64 251.007 1097.45 242.5 1087.34 242.5C1077.23 242.5 1069.03 251.007 1069.03 261.5C1069.03 271.993 1077.23 280.5 1087.34 280.5Z"
                                            fill="#B2A0DB"
                                            fill-opacity="0.2"
                                        />
                                        <path
                                            id="Ellipse 1_4"
                                            d="M1099.86 262C1099.86 268.904 1094.47 274.5 1087.82 274.5C1081.17 274.5 1075.77 268.904 1075.77 262C1075.77 255.096 1081.17 249.5 1087.82 249.5C1094.47 249.5 1099.86 255.096 1099.86 262Z"
                                            fill="url(#paint35_linear_25_145)"
                                        />
                                        <g id="rotate_4">
                                            <g id="Group 238382_4">
                                                <path
                                                    id="Ellipse 3_4"
                                                    d="M1087.14 290.125C1103.87 290.125 1117.48 277.337 1117.48 261.5C1117.48 245.663 1103.87 232.875 1087.14 232.875C1070.42 232.875 1056.8 245.663 1056.8 261.5C1056.8 277.337 1070.42 290.125 1087.14 290.125Z"
                                                    stroke="#C8C4E3"
                                                />
                                                <path
                                                    id="Ellipse 4_4"
                                                    d="M1088.22 286.011C1102.69 285.464 1114 274.108 1113.41 260.574C1112.81 247.04 1100.54 236.576 1086.07 237.123C1071.59 237.67 1060.28 249.026 1060.87 262.56C1061.47 276.094 1073.74 286.558 1088.22 286.011Z"
                                                    stroke="#B8B5CF"
                                                    stroke-opacity="0.41"
                                                />
                                            </g>
                                            <g id="Ellipse 5_4">
                                                <path
                                                    id="Vector_47"
                                                    d="M1098.77 287.75C1098.77 289.821 1096.96 291.5 1094.73 291.5C1092.49 291.5 1090.68 289.821 1090.68 287.75C1090.68 285.679 1092.49 284 1094.73 284C1096.96 284 1098.77 285.679 1098.77 287.75Z"
                                                    fill="url(#paint36_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_48"
                                                    d="M1098.77 287.75C1098.77 289.821 1096.96 291.5 1094.73 291.5C1092.49 291.5 1090.68 289.821 1090.68 287.75C1090.68 285.679 1092.49 284 1094.73 284C1096.96 284 1098.77 285.679 1098.77 287.75Z"
                                                    fill="url(#paint37_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 6_4">
                                                <path
                                                    id="Vector_49"
                                                    d="M1071.46 276.969C1071.46 280.334 1068.52 283.062 1064.89 283.062C1061.26 283.062 1058.32 280.334 1058.32 276.969C1058.32 273.603 1061.26 270.875 1064.89 270.875C1068.52 270.875 1071.46 273.603 1071.46 276.969Z"
                                                    fill="url(#paint38_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_50"
                                                    d="M1071.46 276.969C1071.46 280.334 1068.52 283.062 1064.89 283.062C1061.26 283.062 1058.32 280.334 1058.32 276.969C1058.32 273.603 1061.26 270.875 1064.89 270.875C1068.52 270.875 1071.46 273.603 1071.46 276.969Z"
                                                    fill="url(#paint39_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 7_4">
                                                <path
                                                    id="Vector_51"
                                                    d="M1069.44 244.625C1069.44 246.696 1067.63 248.375 1065.4 248.375C1063.16 248.375 1061.35 246.696 1061.35 244.625C1061.35 242.554 1063.16 240.875 1065.4 240.875C1067.63 240.875 1069.44 242.554 1069.44 244.625Z"
                                                    fill="url(#paint40_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_52"
                                                    d="M1069.44 244.625C1069.44 246.696 1067.63 248.375 1065.4 248.375C1063.16 248.375 1061.35 246.696 1061.35 244.625C1061.35 242.554 1063.16 240.875 1065.4 240.875C1067.63 240.875 1069.44 242.554 1069.44 244.625Z"
                                                    fill="url(#paint41_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 8_4">
                                                <path
                                                    id="Vector_53"
                                                    d="M1106.86 237.594C1106.86 240.959 1103.92 243.688 1100.29 243.688C1096.66 243.688 1093.72 240.959 1093.72 237.594C1093.72 234.228 1096.66 231.5 1100.29 231.5C1103.92 231.5 1106.86 234.228 1106.86 237.594Z"
                                                    fill="url(#paint42_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_54"
                                                    d="M1106.86 237.594C1106.86 240.959 1103.92 243.688 1100.29 243.688C1096.66 243.688 1093.72 240.959 1093.72 237.594C1093.72 234.228 1096.66 231.5 1100.29 231.5C1103.92 231.5 1106.86 234.228 1106.86 237.594Z"
                                                    fill="url(#paint43_linear_25_145)"
                                                />
                                            </g>
                                            <g id="Ellipse 9_4">
                                                <path
                                                    id="Vector_55"
                                                    d="M1120.01 260.562C1120.01 262.634 1118.2 264.312 1115.97 264.312C1113.73 264.312 1111.92 262.634 1111.92 260.562C1111.92 258.491 1113.73 256.812 1115.97 256.812C1118.2 256.812 1120.01 258.491 1120.01 260.562Z"
                                                    fill="url(#paint44_linear_25_145)"
                                                />
                                                <path
                                                    id="Vector_56"
                                                    d="M1120.01 260.562C1120.01 262.634 1118.2 264.312 1115.97 264.312C1113.73 264.312 1111.92 262.634 1111.92 260.562C1111.92 258.491 1113.73 256.812 1115.97 256.812C1118.2 256.812 1120.01 258.491 1120.01 260.562Z"
                                                    fill="url(#paint45_linear_25_145)"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <linearGradient
                                id="paint0_linear_25_145"
                                x1="662.95"
                                y1="68.5"
                                x2="662.95"
                                y2="876.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop
                                    offset="0.0941"
                                    stop-color="#BA9CFF"
                                    stop-opacity="0.6"
                                />
                                <stop offset="0.2979" stop-color="#BA9CFF" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_25_145"
                                x1="662.95"
                                y1="168.5"
                                x2="662.95"
                                y2="776.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop
                                    offset="0.0941"
                                    stop-color="#BA9CFF"
                                    stop-opacity="0.6"
                                />
                                <stop offset="0.2979" stop-color="#BA9CFF" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_25_145"
                                x1="263.62"
                                y1="257.984"
                                x2="250.397"
                                y2="226.983"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_25_145"
                                x1="238.407"
                                y1="281.841"
                                x2="235.855"
                                y2="271.946"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_25_145"
                                x1="238.407"
                                y1="281.841"
                                x2="235.855"
                                y2="271.946"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_25_145"
                                x1="218.148"
                                y1="271.741"
                                x2="214.001"
                                y2="255.661"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint6_linear_25_145"
                                x1="218.148"
                                y1="271.741"
                                x2="214.001"
                                y2="255.661"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint7_linear_25_145"
                                x1="209.076"
                                y1="238.716"
                                x2="206.524"
                                y2="228.821"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint8_linear_25_145"
                                x1="209.076"
                                y1="238.716"
                                x2="206.524"
                                y2="228.821"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint9_linear_25_145"
                                x1="253.547"
                                y1="232.366"
                                x2="249.4"
                                y2="216.286"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint10_linear_25_145"
                                x1="253.547"
                                y1="232.366"
                                x2="249.4"
                                y2="216.286"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint11_linear_25_145"
                                x1="259.646"
                                y1="254.653"
                                x2="257.094"
                                y2="244.758"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint12_linear_25_145"
                                x1="259.646"
                                y1="254.653"
                                x2="257.094"
                                y2="244.758"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint13_linear_25_145"
                                x1="91.1733"
                                y1="47.9838"
                                x2="77.9501"
                                y2="16.9833"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint14_linear_25_145"
                                x1="65.9601"
                                y1="71.8407"
                                x2="63.408"
                                y2="61.9455"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint15_linear_25_145"
                                x1="65.9601"
                                y1="71.8407"
                                x2="63.408"
                                y2="61.9455"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint16_linear_25_145"
                                x1="45.7007"
                                y1="61.7411"
                                x2="41.5535"
                                y2="45.6615"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint17_linear_25_145"
                                x1="45.7007"
                                y1="61.7411"
                                x2="41.5535"
                                y2="45.6615"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint18_linear_25_145"
                                x1="36.6291"
                                y1="28.7157"
                                x2="34.077"
                                y2="18.8205"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint19_linear_25_145"
                                x1="36.6291"
                                y1="28.7157"
                                x2="34.077"
                                y2="18.8205"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint20_linear_25_145"
                                x1="81.1001"
                                y1="22.3661"
                                x2="76.953"
                                y2="6.28649"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint21_linear_25_145"
                                x1="81.1001"
                                y1="22.3661"
                                x2="76.953"
                                y2="6.28649"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint22_linear_25_145"
                                x1="87.1994"
                                y1="44.6532"
                                x2="84.6473"
                                y2="34.758"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint23_linear_25_145"
                                x1="87.1994"
                                y1="44.6532"
                                x2="84.6473"
                                y2="34.758"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint24_linear_25_145"
                                x1="1318.08"
                                y1="49.6352"
                                x2="1304.86"
                                y2="18.6347"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint25_linear_25_145"
                                x1="1292.87"
                                y1="73.4921"
                                x2="1290.32"
                                y2="63.5969"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint26_linear_25_145"
                                x1="1292.87"
                                y1="73.4921"
                                x2="1290.32"
                                y2="63.5969"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint27_linear_25_145"
                                x1="1272.61"
                                y1="63.3925"
                                x2="1268.46"
                                y2="47.3129"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint28_linear_25_145"
                                x1="1272.61"
                                y1="63.3925"
                                x2="1268.46"
                                y2="47.3129"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint29_linear_25_145"
                                x1="1263.54"
                                y1="30.3671"
                                x2="1260.99"
                                y2="20.4719"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint30_linear_25_145"
                                x1="1263.54"
                                y1="30.3671"
                                x2="1260.99"
                                y2="20.4719"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint31_linear_25_145"
                                x1="1308.01"
                                y1="24.0175"
                                x2="1303.86"
                                y2="7.93785"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint32_linear_25_145"
                                x1="1308.01"
                                y1="24.0175"
                                x2="1303.86"
                                y2="7.93785"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint33_linear_25_145"
                                x1="1314.11"
                                y1="46.3046"
                                x2="1311.56"
                                y2="36.4094"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint34_linear_25_145"
                                x1="1314.11"
                                y1="46.3046"
                                x2="1311.56"
                                y2="36.4094"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint35_linear_25_145"
                                x1="1135.26"
                                y1="264.984"
                                x2="1122.04"
                                y2="233.983"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint36_linear_25_145"
                                x1="1110.05"
                                y1="288.841"
                                x2="1107.5"
                                y2="278.946"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint37_linear_25_145"
                                x1="1110.05"
                                y1="288.841"
                                x2="1107.5"
                                y2="278.946"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint38_linear_25_145"
                                x1="1089.79"
                                y1="278.741"
                                x2="1085.64"
                                y2="262.661"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint39_linear_25_145"
                                x1="1089.79"
                                y1="278.741"
                                x2="1085.64"
                                y2="262.661"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint40_linear_25_145"
                                x1="1080.72"
                                y1="245.716"
                                x2="1078.17"
                                y2="235.821"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint41_linear_25_145"
                                x1="1080.72"
                                y1="245.716"
                                x2="1078.17"
                                y2="235.821"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint42_linear_25_145"
                                x1="1125.19"
                                y1="239.366"
                                x2="1121.04"
                                y2="223.286"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint43_linear_25_145"
                                x1="1125.19"
                                y1="239.366"
                                x2="1121.04"
                                y2="223.286"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint44_linear_25_145"
                                x1="1131.29"
                                y1="261.653"
                                x2="1128.74"
                                y2="251.758"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <linearGradient
                                id="paint45_linear_25_145"
                                x1="1131.29"
                                y1="261.653"
                                x2="1128.74"
                                y2="251.758"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0115281" stop-color="#301F5E" />
                                <stop offset="1" stop-color="#FAF8FE" />
                            </linearGradient>
                            <clipPath id="clip0_25_145">
                                <rect width="1308" height="503" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <canvas
                        className="w-full absolute h-full z-30 top-0 left-0"
                        ref={canvasRef}
                    ></canvas>
                    <div className="absolute z-40 bottom-0 right-0 w-full h-28 bg-gradient-to-b to-[#030014] via-[#030014] from-transparent"></div>
                </div>
            </div>
        </div>
    );
}
// 06265c
