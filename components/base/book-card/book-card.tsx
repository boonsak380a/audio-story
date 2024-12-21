import { Book } from "@/models/common";
import React from "react";
import Image from "next/image";
import { IconPlay } from "@douyinfe/semi-icons";
import { HeadphonesIcon } from "lucide-react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import cn from "classnames";
import Title from "@douyinfe/semi-ui/lib/es/typography/title";

export interface IBookCardProps {
  book: Book;
  size?: "small" | "medium";
  horizontal?: boolean;
  top?: number;
}

export function BookCard({ book, size, horizontal, top }: IBookCardProps) {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          horizontal ? "items-center" : "flex-col",
          "flex group gap-2"
        )}
      >
        {top === undefined || top <= 3 ? (
          <div
            className={cn(
              size === "small" ? "size-[80px]" : "size-[140px]",
              "rounded-xl relative cursor-pointer overflow-hidden flex items-center justify-center"
            )}
          >
            {top && (
              <div
                className={cn(
                  top === 1 && "bg-[#fc1733]",
                  top === 2 && "bg-[#fd7247]",
                  top === 3 && "bg-[#fec52e]",
                  "absolute top-0 left-0 size-5 z-50 rounded-br-xl"
                )}
              ></div>
            )}
            <Image
              width={140}
              height={140}
              className="!rounded-xl group-hover:transform duration-300 group-hover:scale-110 group-hover:opacity-85 !overflow-hidden"
              src={book.cover_photo}
              alt="cover_photo"
            />
            <div
              className={cn(
                size === "small" ? "size-[80px]" : "size-[140px]",
                "rounded-xl absolute top-0 left-0 flex items-center justify-center"
              )}
            >
              <div
                className={cn(
                  size === "small" ? "size-[20px]" : "size-[36px]",
                  "opacity-0 transition-all duration-300 bg-white rounded-full flex items-center justify-center group-hover:scale-150 group-hover:opacity-100"
                )}
              >
                <IconPlay
                  size={size === "small" ? "small" : "large"}
                  className="text-[#f6866d] pl-[2px]"
                />
              </div>
            </div>
            {size === "medium" && (
              <div className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.8)]">
                <span className="text-xs text-white flex justify-center gap-1 px-[5px] py-[2px]">
                  <HeadphonesIcon size={14} />
                  100Tr
                </span>
              </div>
            )}
          </div>
        ) : (
          <Title heading={5} className="pr-2" type="secondary">
            {top}
          </Title>
        )}
        <div className="basis-0 flex-grow">
          <Text
            size="normal"
            type="primary"
            className="cursor-pointer line-clamp-1 font-bold group-hover:text-[#fc5832]"
          >
            2024德云社欧洲巡演|郭德纲|于谦|海外专场|最新相声演出|持续更新
          </Text>
          {(!top || top <= 3) && (
            <Text
              size="normal"
              type="secondary"
              className="cursor-pointer hover:text-[#fc5832]"
            >
              {book.author}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}
