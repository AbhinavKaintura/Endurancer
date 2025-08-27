"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const titles = [
    "Reclaim Your Focus. Build Your Endurance.",
    "मनश्चञ्चलमस्थिरम् | नियम्यैतदात्मन्येव वशं नयेत्||",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 55;
  const deletingSpeed = 35;
  const pauseTime = 1500;

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (charIndex === currentTitle.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }
  }, [charIndex, isDeleting, currentTitleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 px-8 py-12">
      {/* Background image with padding & rounded corners */}
      <div
        className="absolute inset-0 m-10 rounded-[100px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      ></div>

      {/* Dark overlay for contrast (still inside rounded bg) */}
      <div className="absolute inset-0 m-6 rounded-3xl bg-white/10 backdrop-blur-[10px]"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-5 items-center w-full max-w-7xl">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <div className="h-32 md:h-40 flex items-center justify-center md:justify-start">
            <h1 className="text-4xl py-4 md:text-6xl font-bold bg-gradient-to-r from-red-950 to-red-600 bg-clip-text text-transparent min-h-[2.5rem] md:min-h-[4rem]">
              {displayedText}
              <span className="animate-blink">|</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl mb-8 text-black font-extrabold max-w-2xl mx-auto italic md:mx-0">
            "Control the restless mind and bring it under your command."
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/register">
              <Button>Start Your Journey for Free</Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary">Log In</Button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="items-center flex justify-center">
          <img
            src="/yoga_posture.jpg"
            alt="Hero Image"
            className="m-12 rounded-full w-full max-w-md animate-float shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
