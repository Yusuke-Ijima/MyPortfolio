import { Box, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Stext } from "../../atoms/style/Stext";

type Props = {
  leftContent: string;
  rightContent: string;
  bgColor: any;
};

export const SkillCard: VFC<Props> = memo((props) => {
  const { bgColor, leftContent, rightContent } = props;

  return (
    <>
      <Box mb="8">
        <Flex justify="center">
          <Flex
            justify="space-around"
            alignItems="center"
            shadow="md"
            w={{ base: "90%", md: "60%" }}
            h="160px"
            bg={bgColor}
          >
            <Box p={{ base: "5", md: "8" }}>
              <Stext>{leftContent}</Stext>
            </Box>

            <Box p={{ base: "5", md: "8" }} pl={0} w="60%">
              <p>{rightContent}</p>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
});
