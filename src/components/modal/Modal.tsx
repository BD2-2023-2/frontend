import React from "react";
import {Modal as NextUiModal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { TProduto } from "../../types";

export type ModalProps = {
  isOpen
  onOpen
  onOpenChange
  produto: TProduto
}

export const Modal = ({isOpen, onOpen, onOpenChange, produto}: ModalProps) => {
  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <NextUiModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{produto.descricao}</ModalHeader>
              <ModalBody>
                {produto.descricao}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </NextUiModal>
    </>
  );
}
