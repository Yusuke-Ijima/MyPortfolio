import { Button } from "@chakra-ui/button";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;

  return (
    <Button
      colorScheme="teal"
      variant="ghost"
      onClick={onClick}
      size="100%"
      w="20%"
      _focus={{ boxShadow: "none" }}
      borderRadius="none"
    >
      {children}
    </Button>
  );
});
