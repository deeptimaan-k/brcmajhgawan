import React, { useRef } from "react";

interface NewsItem {
  text: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

export function NewsSection({ news }: NewsSectionProps) {
  const marqueeRef = useRef<HTMLMarqueeElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
        <div className="border-b-2 border-[#004d40] mb-4">
          <h3 className="text-xl font-bold text-[#004d40]">Latest News</h3>
        </div>
        <div className="flex-1 overflow-hidden">
          <marquee
            ref={marqueeRef}
            direction="up"
            className="h-[300px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="space-y-4">
              {news.map((item, index) => (
                <li key={index} className="flex items-center gap-2 group">
                  <span className="flex-1">{item.text}</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
                    NEW
                  </span>
                </li>
              ))}
            </ul>
          </marquee>
        </div>
      </div>
    </div>
  );
}