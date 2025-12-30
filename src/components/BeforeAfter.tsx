import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { beforeAfter } from "@/content";
import { Button } from "@/components/ui/button";

export function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentCase = beforeAfter[activeCase];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % beforeAfter.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length);
    setSliderPosition(50);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Treatment Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the difference our treatments can make
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Case navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevCase}
              aria-label="Previous case"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="text-center">
              <h3 className="font-semibold text-lg">{currentCase.treatment}</h3>
              <p className="text-sm text-muted-foreground">
                {currentCase.description}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextCase}
              aria-label="Next case"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Before/After slider */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-muted">
            {/* Before image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-muted-foreground/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🦷</span>
                </div>
                <p className="text-muted-foreground font-medium">Before</p>
              </div>
            </div>

            {/* After image placeholder (clipped) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <p className="text-primary font-medium">After</p>
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary-foreground shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-primary" />
                <ChevronRight className="w-4 h-4 text-primary -ml-1" />
              </div>
            </div>

            {/* Range input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Adjust before/after slider"
            />
          </div>

          {/* Case indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {beforeAfter.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCase(index);
                  setSliderPosition(50);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeCase ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`View case ${index + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Individual results vary. Consult with our team for personalized recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
