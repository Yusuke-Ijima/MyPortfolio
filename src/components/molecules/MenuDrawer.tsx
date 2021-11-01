import { memo, VFC } from "react";

import { Button } from "@chakra-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Stext } from "../atoms/style/Stext";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickTop: () => void;
  onClickSkill: () => void;
  onClickWorks: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickSkill, onClickWorks } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              h="16%"
              w="100%"
              _focus={{ boxShadow: "none" }}
              borderRadius="none"
              onClick={onClickHome}
            >
              <Stext>Home</Stext>
            </Button>
            <Button
              h="16%"
              w="100%"
              _focus={{ boxShadow: "none" }}
              borderRadius="none"
              onClick={onClickSkill}
            >
              <Stext>Skill</Stext>
            </Button>
            <Button
              h="16%"
              w="100%"
              _focus={{ boxShadow: "none" }}
              borderRadius="none"
              onClick={onClickWorks}
            >
              <Stext>Works</Stext>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
