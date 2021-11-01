import { Flex, Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Stext: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Flex wrap="wrap">
      <Text fontSize="md" fontWeight="bold">
        {children}
      </Text>
    </Flex>
  );
});
