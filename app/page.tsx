"use client";
import "./module.style.css";
import "swiper/css";

import { Image } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import { HomeSlider } from "@/components/home/slider";
import { Categories } from "@/components/home/categories";
import { Recommends } from "@/components/home/recommends";
import { Ranking } from "@/components/home/ranking";

export default function Home() {
  return (
    <main className="max-w-5xl h-full w-full mt-5 bg-white">
      <HomeSlider />
      <Categories />
      <div className="flex">
        <Recommends />
        <Ranking />
      </div>
    </main>
  );
}
