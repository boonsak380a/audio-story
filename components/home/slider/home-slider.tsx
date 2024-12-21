import { Image } from "@douyinfe/semi-ui";
import React, { useEffect, useState } from "react";

export interface IHomeSliderProps {}

let timeout: NodeJS.Timeout;

export function HomeSlider(props: IHomeSliderProps) {
  const [sliderItems, setSliderItems] = useState(Array.from(Array(10).keys()));
  const [isAutoSlider, setIsAutoSlider] = useState(true);

  const trends = [
    {
      image: "/images/trend-01.jpg",
    },
    {
      image: "/images/trend-02.jpg",
    },
    {
      image: "/images/trend-03.jpg",
    },
    {
      image: "/images/trend-01.jpg",
    },
    {
      image: "/images/trend-02.jpg",
    },
    {
      image: "/images/trend-03.jpg",
    },
    {
      image: "/images/trend-01.jpg",
    },
    {
      image: "/images/trend-02.jpg",
    },
    {
      image: "/images/trend-03.jpg",
    },
    {
      image: "/images/trend-01.jpg",
    },
  ];

  useEffect(() => {
    if (isAutoSlider) {
      prevSliderItem();
    }
  }, [isAutoSlider]);

  function prevSliderItem() {
    setIsAutoSlider(false);
    setSliderItems((prev) => {
      const sliderItemsClone = [...prev];
      let item = sliderItemsClone.pop();
      sliderItemsClone.splice(0, 0, item!);
      return sliderItemsClone;
    });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsAutoSlider(true);
    }, 3000);
  }

  function nextSliderItem() {
    setIsAutoSlider(false);
    setSliderItems((prev) => {
      const sliderItemsClone = [...prev];
      let item = sliderItemsClone.shift();
      sliderItemsClone.push(item!);
      return sliderItemsClone;
    });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsAutoSlider(true);
    }, 3000);
  }

  return (
    <div className="relative">
      <i
        className="left-btn absolute w-[30px] h-[50px] z-10 cursor-pointer"
        onClick={prevSliderItem}
      ></i>
      <i
        className="right-btn absolute w-[30px] h-[50px] z-10 cursor-pointer"
        onClick={nextSliderItem}
      ></i>
      <ul className="slider-list block">
        {sliderItems.map((val, i) => {
          return (
            <li key={i} className={`slider-item slider-item-${val}`}>
              <Image
                width={750}
                height={300}
                src={trends[i].image}
                className={"!rounded-xl"}
                alt="trend"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
