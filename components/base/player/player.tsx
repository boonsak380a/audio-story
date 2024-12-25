"use client";

import React, { useRef, useState } from "react";
import "./module.style.css";
import { Button, Dropdown, Image, Slider } from "@douyinfe/semi-ui";
import { IconPlayCircle, IconRestart } from "@douyinfe/semi-icons";
import { Volume2, VolumeX } from "lucide-react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";

export interface IPlayerProps {}

export function Player(props: IPlayerProps) {
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  //   useEffect(() => {
  //     if (props.play) {
  //       playAudio();
  //     }
  //   }, [props.play]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current?.play();
    }
  };

  const handleAudioEnded = () => {};

  const Speeds = [
    {
      node: "item",
      type: "primary",
      name: "0.25",
      onClick: () => {},
      className: "hover:bg-white",
    },
    { node: "item", type: "primary", name: "0.5", onClick: () => {} },
    { node: "item", type: "primary", name: "0.75", onClick: () => {} },
    { node: "item", type: "primary", name: "Chuẩn", onClick: () => {} },
    { node: "item", type: "primary", name: "1.25", onClick: () => {} },
    { node: "item", type: "primary", name: "1.5", onClick: () => {} },
    { node: "item", type: "primary", name: "1.75", onClick: () => {} },
    { node: "item", type: "primary", name: "2", onClick: () => {} },
  ];

  const onToggleSpeaker = () => {
    setIsMuted((prev) => !prev);
  };

  const onChangeVolume = (value: number | number[] | undefined) => {
    setVolume(value as number);
  };

  return (
    <div className="fixed bottom-0 left-0 w-screen h-12 player">
      <div className="w-full max-w-[1024px] h-full mx-auto flex items-center gap-5">
        <audio src="/audios/anh-mat-quan-than/1.mp3" />
        <audio controls className="hidden" onEnded={handleAudioEnded}>
          <source src="/audios/anh-mat-quan-than/1.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <audio
          ref={audioRef}
          className="hidden"
          controls
          src="/audios/anh-mat-quan-than/1.mp3"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <button onClick={playAudio}>Play</button>
        <Image
          width={30}
          height={30}
          className="size-[30px] rounded"
          src="https://imagev2.xmcdn.com/storages/129a-audiofreehighqps/1A/F2/CMCoOScE9TDcAAQjdADaEJil.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios"
        />
        <IconRestart
          size="small"
          className="cursor-pointer hover:text-[#fc5832] text-white hover:scale-90"
        />
        <IconPlayCircle
          size="extra-large"
          className="cursor-pointer hover:text-[#fc5832] text-white hover:scale-90"
          onClick={playAudio}
        />
        <IconRestart
          size="small"
          className="cursor-pointer hover:text-[#fc5832] text-white hover:scale-90"
          rotate={180}
        />
        <div className="w-[500px]">
          <Slider
            className="mt-[1px]"
            railStyle={{
              background:
                "transparent linear-gradient(to right,rgba(0,0,0,.85),rgba(0,0,0,.95))",
            }}
            tooltipVisible={false}
          />
        </div>
        <div className="flex gap-1 text-white text-xs font-light">
          <span>00:03:27</span>/<span className="text-gray-200">00:03:27</span>
        </div>
        <Dropdown
          position={"top"}
          trigger="click"
          //@ts-ignore
          menu={Speeds}
          className="bg-[rgba(0,0,0,0.85)]"
          clickToHide
        >
          <Text className="text-white hover:text-[#fc5832] text-xs cursor-pointer">
            Tốc độ: Chuẩn
          </Text>
        </Dropdown>
        <div className="flex items-center gap-2">
          <Button
            onClick={onToggleSpeaker}
            icon={
              isMuted ? (
                <Volume2 size={16} color="white" />
              ) : (
                <VolumeX size={16} color="white" />
              )
            }
            size="small"
            theme="borderless"
            type="tertiary"
          />
          <div className="w-20">
            <Slider
              onChange={onChangeVolume}
              min={0}
              max={100}
              value={volume}
              className="mt-[1px]"
              railStyle={{
                background:
                  "transparent linear-gradient(to right,rgba(0,0,0,.85),rgba(0,0,0,.95))",
              }}
              tooltipVisible={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
