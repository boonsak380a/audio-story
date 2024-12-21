import * as React from "react";
import "./module.style.css";
import Title from "@douyinfe/semi-ui/lib/es/typography/title";
import { IconRefresh, IconRefresh2 } from "@douyinfe/semi-icons";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Book } from "@/models/common";
import { BookCard } from "../book-card";
import { RefreshCcw } from "lucide-react";

export interface IBookSectionProps {
  headTitle: string;
  onRefresh?: () => void;
  items: Book[];
}

export function BookSection({
  headTitle,
  items,
  onRefresh,
}: IBookSectionProps) {
  return (
    <div className="flex flex-col gap-5 max-w-[780px] py-5">
      <div className="flex justify-between">
        <Title
          style={{ fontWeight: '400 !important' }}
          heading={4}
          className="pl-4 !font-medium heading-title relative"
        >
          {headTitle}
        </Title>
        {onRefresh && (
          <Text className="flex gap-1 items-center text-sm hover:text-[#fa2800] cursor-pointer">
            <RefreshCcw  size={20}/>
            Làm mới
          </Text>
        )}
      </div>
      <div className="grid-cols-5 grid gap-5">
        {items.map((item, idx) => (
          <BookCard key={idx} book={item} />
        ))}
      </div>
    </div>
  );
}
