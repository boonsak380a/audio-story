import { Divider, Image } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import React from "react";
import "./module.style.css";
import Link from "next/link";

export interface ICategoriesProps {}

export function Categories(props: ICategoriesProps) {
  return (
    <div className="py-5">
      <div className="flex justify-center">
        <Link href={"#"} className="flex flex-col items-center px-5 group">
          <Image
            preview={false}
            width={18}
            height={18}
            className={"mx-4"}
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC20lEQVRYR82YT08TQRjGn3emNPoFiiHxyAUOIKbxYmibKhEFb1jkyAeQA1z4BFzgoB/AI0K4aRUCVLaEiyEiHujFI5EEvoCG7s5rZmf7b22ldadJe2mynX3m2fff/LaEFp9s9nm/UpxiVnf1EiJxLgQVC4X3l63uaXa9Ux0Ki6TTT0cBWmGmCSKI+t+ZoYh4F+Blx/l0+i9j/6vTYCiTmX7FzGsAYjdEwSWixYODD2+arYuiUzUUiLyubcBlgIoAvgfXRgBOAdRXWUNEC2FTUXV8Qya84rguMkdKYf7wMP+jPgLj41ODQuAtgIfBdRdQyUr6bOgEhqa3AX4SbHJ0dXU7WyptXTdLx9DQTDyR+FWomeIdx/k4aR4sug7pLnBddWEKmMtK0XA4MmFjJlJ8ptOnCz0WEwN6jQ0dymSmXzDzZrDpvuPkH7fT1un01B6AR2YkUE5/29ChdPrZIkCrgYk1x8kvtWlI37No1nJwT3Sd3jPUcynruaK21a62dHpzMOqnizryK50ZVad3D9fKE5rzSK4wswX86FznLx6qGOsUrFoN0051um6IXz7oB8op5bFPnkLSOdBXpHdfmpJn14iR55KjnvJWAJ4AqIE8AVYA7Uohl2n9uIE8u1LU3ux9Q550A3kyfPKUG1+r5GmdGH0z4Cp5ElBmRpHBPnkSaIQIKQZq5AlaqJiyOhj9NHnecV1kjqRQ87R+2kCePDc66ClRI0+GK6VM6vRZJUZ3dmwbQJU8pfc7S1ulpuTJM0NxT96qI0/sxDZOJq0R437iEh5fX+gC1mkSQg2HIxMeDTpSSokzkz5WkuID1ojx852f8BiGPBn7sc2TtsjTzY3tgQx5SkLOGqAVEhdgYYhRd1jf5re2yLOcu7eqO80veMVLvWfIFjFaS5ktYrRW1LZIz38vs9H2xpCdV2lrg9EmMVo5OkL4GfnvGCuHq21itIIf9aO9U9JrRYydAtofAD6e6MEsf1wAAAAASUVORK5CYII="
            }
            alt="icon"
          />
          <Text className="group-hover:!text-[#fc5832]">Thể loại</Text>
        </Link>
        <Divider layout="vertical" />
        <Link href={"#"} className="group">
          <Text type="secondary" className="flex flex-col items-center px-5">
            <Image
              preview={false}
              width={18}
              height={18}
              className={"mx-6"}
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACUklEQVRYR+2YPUwUQRTH/+9215gYNLGRgDRKYqGhuNARw0BCgnGPzogfNdoZLbWABhNiYoGNWlpIiBXcGaOgDpWJUbDBwo9Kcx0UQowXbu+R2bslywp3M6vrkbhb7r5585v/zryPIcR4hMi5AN8A0A2gJeJiDcA7gO5KmS+YuifTAb29uXEivqkzjpluLyzkb+nYBjZGQDVl8iYTAJQzUcoQyH0FoK8KRE+B8lUpn30PAw4MDLVtbPBDgM/W3r+WstCvuwhToB/BnnGcTPvc3Gxxp4mEOHMUsL7Vvq1JWTiYFBAHjqUs1F2MEK62bRjWVCHtSVKg/++XNYi+vx2SRBUyib6Jn7J40RdITCEhGkffQBWTo2xiuy0OCeFqRV81yGQSE9soUCLBLgz0srX4lYHjoYy+DuBzBZi199n36NHbla1vJiuJazvfumPKCxhWOINLzuPF537KjjuJyaaeP1L8AkJnnQT7yyLup6mlN/8EKArP504e9qz9gwDfAdCmQJnx0Z5ePNUUoEApvth9zPMqH0DVMtgiOt1UIAVRHs4+ADDi7x/C9aYDecPZUQbGfCBgLAWKnrRUIaVIvZiVKpQqtFt+0s2Re28Pnc/eZ8KVamCkayowbhVogNcR7dXDCuiuWreY48vZTq+srm5wKJzLtl0gOA6N7N6z67fH9eB5qKfFO1BywZUJAB1+tgcv2yeWuihuka97eaDsGhRoqvYoWRn0+fWQGhCnDfp7QLxqceYCTb9/UUuwVdemjeKfABHws8L0CcQztleapCfLq4G/Tb/e6GbO/pquAAAAAElFTkSuQmCC"
              }
              alt="icon"
            />
            <Text className="group-hover:!text-[#fc5832]">Xếp hạng</Text>
          </Text>
        </Link>
      </div>
    </div>
  );
}
