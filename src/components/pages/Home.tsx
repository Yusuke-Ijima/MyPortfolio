import { Box, Flex, Image } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { Stitle } from "../atoms/style/Stitle";
import { Stext } from "../atoms/style/Stext";
import { Header } from "../organisms/header/Header";

import IProfile from "../../image/Profile.png";

export const Home: VFC = memo(() => {
  return (
    <>
      <Header />
      <Stitle>Home</Stitle>
      <Flex
        justify={{ base: "none", md: "space-around" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        w={{ base: "100%", md: "90%" }}
        m="auto"
      >
        <Box m="8px">
          <Image
            borderRadius="full"
            boxSize="280px"
            src={IProfile}
            alt="プロフィール"
          />
        </Box>
        <Box w="60%" m="8px">
          <Stext>
            現在都内の大学に通う大学2年生です。
            Web開発に興味があり、特にフロントエンドの領域に興味があります。
            まだまだ初心者なので日々学習に励んでいます。
            最近はインターンシップをしたいと考えております！
            <br />
            <br />
            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Box>
                名前：飯嶋優介
                <br />
                年齢：20
                <br />
                <Flex>
                  <Box>趣味：</Box>
                  <Box>
                    温泉、サウナ
                    <br />
                    漫画、ゲーム
                  </Box>
                </Flex>
                <br />
                <br />
              </Box>
              <Box>
                <p>ご連絡はメールにてお願いします</p>
                <p>yusuke1120925@gmail.com</p>
                <br />
                <a
                  href="https://github.com/Yusuke-Ijima"
                  style={{ color: "blue", textDecoration: "underLine" }}
                >
                  github
                </a>
              </Box>
            </Flex>
          </Stext>
        </Box>
      </Flex>
    </>
  );
});
