import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { beforeAfter } from "@/content";
import { Button } from "@/components/ui/button";

export function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentCase = beforeAfter[activeCase];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    const step = 5;
    if (e.key === "ArrowLeft") {
      setSliderPosition(prev => Math.max(0, prev - step));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setSliderPosition(prev => Math.min(100, prev + step));
      e.preventDefault();
    }
  }, []);

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % beforeAfter.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length);
    setSliderPosition(50);
  };

  return (
    <section className="section-padding bg-background" aria-labelledby="before-after-title">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 id="before-after-title" className="text-3xl md:text-4xl font-bold mb-4">
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
              aria-label={`Previous case: ${beforeAfter[(activeCase - 1 + beforeAfter.length) % beforeAfter.length].treatment}`}
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
              aria-label={`Next case: ${beforeAfter[(activeCase + 1) % beforeAfter.length].treatment}`}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Before/After slider */}
          <div
            className="relative rounded-xl overflow-hidden aspect-[4/3] bg-muted"
            role="img"
            aria-label={`Before and after comparison for ${currentCase.treatment}. Use the slider to compare results.`}
          >
            {/* Before image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-32 h-32 rounded-2xl bg-slate-400/30 mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-slate-400">
                  <span className="text-5xl" role="img" aria-hidden="true">🦷</span>
                </div>
                <p className="text-slate-600 font-semibold text-lg">Before</p>
                <p className="text-slate-500 text-sm mt-1">Original condition</p>
              </div>
            </div>

            {/* After image placeholder (clipped) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              aria-hidden="true"
            >
              <div className="text-center p-6">
                <div className="w-32 h-32 rounded-2xl bg-primary/30 mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-primary/50">
                  <span className="text-5xl" role="img" aria-hidden="true">✨</span>
                </div>
                <p className="text-primary font-semibold text-lg">After</p>
                <p className="text-primary/70 text-sm mt-1">Treatment result</p>
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20">
                <ChevronLeft className="w-4 h-4 text-primary" />
                <ChevronRight className="w-4 h-4 text-primary -ml-1" />
              </div>
            </div>

            {/* Range input - accessible */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              onKeyDown={handleKeyDown}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label={`Before and after slider for ${currentCase.treatment}. Currently showing ${sliderPosition}% of the after image.`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={sliderPosition}
              aria-valuetext={`${sliderPosition}% after, ${100 - sliderPosition}% before`}
            />

            {/* Visual indicator labels */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full font-medium">
              Before
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded-full font-medium">
              After
            </div>
          </div>

          {/* Case indicators */}
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Treatment cases">
            {beforeAfter.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCase(index);
                  setSliderPosition(50);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${index === activeCase ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                role="tab"
                aria-selected={index === activeCase}
                aria-label={`View ${item.treatment} case`}
                tabIndex={index === activeCase ? 0 : -1}
              />
            ))}
          </div>

          {/* Disclaimer with icon */}
          <div className="flex items-start gap-3 mt-8 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground mb-1">Important Notice</p>
              <p>
                These images are simulated representations for demonstration purposes only.
                Individual results vary based on treatment type, condition, and patient factors.
                Consult with our dental professionals for a personalized assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

