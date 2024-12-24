import { BookCard } from "@/components/base/book-card";
import { Book } from "@/models/common";
import Title from "@douyinfe/semi-ui/lib/es/typography/title";
import * as React from "react";

export interface IRankingProps {}

export function Ranking(props: IRankingProps) {
  const rankingBooks: Book[] = [
    {
      title:
        "徐静波精讲松下幸之助｜亲历日本的繁荣与停滞 1 | 静说日本升级版 | 日本经营之神的成事心法 | 正版有声书+独家解读",
      cover_photo:
        "https://imagev2.xmcdn.com/storages/9529-audiofreehighqps/48/EA/GAqhAW0KfNtIAAMkRAL36vT_.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      author: "徐静波",
    },
    {
      title:
        "徐静波精讲松下幸之助｜亲历日本的繁荣与停滞 2 | 静说日本升级版 | 日本经营之神的成事心法 | 正版有声书+独家解读",
      cover_photo:
        "https://imagev2.xmcdn.com/storages/a03f-audiofreehighqps/1F/6C/GKwRIDoKm1dPAAHh4QMDZ5pG.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      author: "徐静波",
    },
    {
      title:
        "徐静波精讲松下幸之助｜亲历日本的繁荣与停滞 3 | 静说日本升级版 | 日本经营之神的成事心法 | 正版有声书+独家解读",
      cover_photo:
        "https://imagev2.xmcdn.com/storages/a03f-audiofreehighqps/1F/6C/GKwRIDoKm1dPAAHh4QMDZ5pG.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      author: "徐静波",
    },
    {
      title:
        "徐静波精讲松下幸之助｜亲历日本的繁荣与停滞 4 | 静说日本升级版 | 日本经营之神的成事心法 | 正版有声书+独家解读",
      cover_photo:
        "https://imagev2.xmcdn.com/storages/a03f-audiofreehighqps/1F/6C/GKwRIDoKm1dPAAHh4QMDZ5pG.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      author: "徐静波",
    },
    {
      title:
        "徐静波精讲松下幸之助｜亲历日本的繁荣与停滞 5 | 静说日本升级版 | 日本经营之神的成事心法 | 正版有声书+独家解读",
      cover_photo:
        "https://imagev2.xmcdn.com/storages/a03f-audiofreehighqps/1F/6C/GKwRIDoKm1dPAAHh4QMDZ5pG.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      author: "徐静波",
    },
    {
      title:
        "徐静波精讲松下幸之助｜亲历日本的繁荣与停滞 6 | 静说日本升级版 | 日本经营之神的成事心法 | 正版有声书+独家解读",
      cover_photo:
        "https://imagev2.xmcdn.com/storages/a03f-audiofreehighqps/1F/6C/GKwRIDoKm1dPAAHh4QMDZ5pG.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      author: "徐静波",
    },
  ];
  return (
    <div className="pt-5 flex flex-col pl-8 gap-4">
      <Title style={{ fontWeight: "400 !important" }} heading={4}>
        Xếp hạng
      </Title>
      {rankingBooks.map((book, index) => (
        <BookCard
          book={book}
          key={book.title}
          size="small"
          horizontal
          top={index + 1}
        />
      ))}
    </div>
  );
}
