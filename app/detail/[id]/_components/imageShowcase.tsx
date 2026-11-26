"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export const instant = false;

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ImageShowcase({ images, name }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const swipeThreshold = 50;
    if (dragOffset < -swipeThreshold && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > swipeThreshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    setDragOffset(0);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="h-100 shrink-0 relative overflow-hidden bg-gray-300 select-none touch-pan-y cursor-grab active:cursor-grabbing"
    >
      <span className="absolute z-10 top-5 left-2 bg-main text-white backdrop-blur-md py-2 px-5 rounded-full text-sm font-bold uppercase">Back</span>
      <div
        className={`flex h-full w-full ${
          isDragging ? "" : "transition-transform duration-300 ease-out"
        }`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative h-full w-full shrink-0">
            <Image
              fill
              src={src}
              alt={`${name} ${index + 1}`}
              draggable={false}
              className="object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center absolute bottom-15 w-full gap-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`View image ${index + 1}`}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-md transition-all duration-300 ${
              currentIndex === index ? "w-10 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
