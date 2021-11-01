import { Flex } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";

import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useDisclosure } from "@chakra-ui/hooks";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHome = useCallback(() => history.push("/"), [history]);
  const onClickSkill = useCallback(() => history.push("/skill"), [history]);
  const onClickWorks = useCallback(() => history.push("/works"), [history]);

  return (
    <>
      <Flex
        justify="center"
        bg="blue.100"
        h="60px"
        display={{ base: "none", md: "flex" }}
        shadow="md"
      >
        <PrimaryButton onClick={onClickHome}>Home</PrimaryButton>
        <PrimaryButton onClick={onClickSkill}>Skill</PrimaryButton>
        <PrimaryButton onClick={onClickWorks}>Works</PrimaryButton>
      </Flex>
      <Flex
        alignItems="center"
        bg="blue.100"
        h={{ base: "48px", md: "60px" }}
        display={{ base: "flex", md: "none" }}
        shadow="md"
      >
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickTop={onClickHome}
        onClickHome={onClickHome}
        onClickSkill={onClickSkill}
        onClickWorks={onClickWorks}
      />
    </>
  );
});
