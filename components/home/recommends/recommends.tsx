import { BookSection } from "@/components/base/book-section";
import { Book } from "@/models/common";
import * as React from "react";

export interface IRecommendsProps {}

export function Recommends(props: IRecommendsProps) {
  const books: Book[] = [
    {
      title: "宝瞳 | 古玩鉴宝x都市异能 | 精品多人有声剧",
      cover_photo: "https://imagev2.xmcdn.com/storages/e28f-audiofreehighqps/78/BD/GKwRINsFnkNLABAAAAEHLPTO.png!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "整本免费 绝宠医妃要复仇|古言宫斗|精品双播",
      cover_photo: "https://imagev2.xmcdn.com/storages/f5d9-audiofreehighqps/9F/29/GKwRIDoFsw5TAATxywEMDjI5.jpeg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "五个孽徒都想争夺我 | 爆笑穿越 | 团宠幻言 | vip多人有声剧",
      cover_photo: "https://imagev2.xmcdn.com/storages/10ce-audiofreehighqps/5A/0D/GMCoOSUJ--A1AAZitALJd4Ni.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "《论语》朗读与讲解",
      cover_photo: "https://imagev2.xmcdn.com/group60/M0B/DB/40/wKgLb1y2_Y_AlJuvAAT1whjH3Sc954.png!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "满级大佬在诡异世界乘风破浪 | 第二世界|除灵师|多人有声剧",
      cover_photo: "https://imagev2.xmcdn.com/storages/8a4f-audiofreehighqps/A8/D7/GMCoOR4J9Cz-AAFJ1gLHAWvu.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "【免费】重生嫁了个恶霸老公 | 穿越甜宠 |精品双播",
      cover_photo: "https://imagev2.xmcdn.com/group81/M04/BF/93/wKgPEl7E2JvTwbbJAAF_qE42W40433.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "我在火葬场做捉鬼师的那几年 | 免费新品",
      cover_photo: "https://imagev2.xmcdn.com/storages/3853-audiofreehighqps/60/D8/CMCoOSIDXb2EAAPOzQBdUwhN.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "我在火葬场做捉鬼师的那几年 | 免费新品",
      cover_photo: "https://imagev2.xmcdn.com/group84/M08/35/E2/wKg5Hl9Cit_wZ7F5AAL76f3ipPE474.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "龙棺秘藏（悬疑精品多人剧丨南瓜楠少领衔）会员畅听",
      cover_photo: "https://imagev2.xmcdn.com/group85/M01/D4/C9/wKg5JV8iQ4mh09uqAAgNhXz6Nn8598.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
    {
      title: "一代兵王重回都市：无敌狂兵（一）",
      cover_photo: "https://imagev2.xmcdn.com/group81/M04/E4/10/wKgPEl7GUFqSoUyDAAXd6smKE1Y720.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      author: "徐静波"
    },
  ];
  function onRefresh() {}

  return (
    <BookSection headTitle="Đề xuất cho bạn" onRefresh={onRefresh} items={books} />
  );
}
