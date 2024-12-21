"use client";

import React, { ReactNode } from "react";
import { Layout, Nav, Input } from "@douyinfe/semi-ui";
import { IconSearch } from "@douyinfe/semi-icons";
import Image from "next/image";

export interface IHomeLayoutProps {
  children: ReactNode;
}

export function HomeLayout({ children }: IHomeLayoutProps) {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout className="bg-white h-full">
      <Header>
        <div className="flex items-center justify-center shadow bg-white h-[60px]">
          <Nav
            className="max-w-5xl"
            mode={"horizontal"}
            defaultSelectedKeys={["new"]}
            items={[
              { itemKey: "new", text: "Nổi bật" },
              {
                text: "Thể loại",
                itemKey: "category",
                items: [
                  "Ngôn tình",
                  "Kiếm hiệp"
                ],
              },
            ]}
            onSelect={(key) => console.log(key)}
            header={{
              logo: (
                <Image
                  width={180}
                  height={60}
                  src="/images/logo-full.png"
                  alt="logo"
                  className={"cursor-pointer !h-[60px] !w-[180px]"}
                />
              ),
            }}
            footer={
              <Input
                className="!rounded-3xl !h-[40px] !w-[360px]"
                suffix={<IconSearch size="large" />}
                showClear
                placeholder={"Thể loại/Tên truyện ..."}
              ></Input>
            }
          />
        </div>
      </Header>
      <Content className="flex justify-center">{children}</Content>
      <Footer></Footer>
    </Layout>
  );
}
