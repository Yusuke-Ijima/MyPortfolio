import { Box, Flex, Image } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Stext } from "../../atoms/style/Stext";

type Props = {
  src: string;
  ImageContent: string;
  bgColor: any;
  WorksUrl: string;
  Language: string;
};

export const WorkCard: VFC<Props> = memo((props) => {
  const { Language, WorksUrl, src, ImageContent, bgColor } = props;

  return (
    <>
      <Box mb="8">
        <Flex justify="center">
          <Flex
            direction="column"
            alignItems="center"
            shadow="md"
            w={{ base: "90%", md: "60%" }}
            h="auto"
            bg={bgColor}
          >
            <Box textAlign="center">
              <Box p={{ base: "5", md: "8" }}>
                <a href={WorksUrl}>
                  <Image boxSize="auto" src={src} alt="制作物" my="8px" />
                </a>
              </Box>
            </Box>

            <Box px={{ base: "5", md: "8" }} pb={{ base: "5", md: "8" }}>
              <Stext>{ImageContent}</Stext>
              <br />
              <p>{Language}</p>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
});
