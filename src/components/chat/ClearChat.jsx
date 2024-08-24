import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function ClearChat({ clearList }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex justify-center items-center w-[20vh] px-4">
      <Button
        color="default"
        variant="ghost"
        endContent={<Icon icon="uil:trash" width="22" height="22" />}
        className="max-w-fit text-amber-500"
        onPress={onOpen}
      >
        Clear Chat
      </Button>
      <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalHeader>Clear Chat</ModalHeader>
              <ModalBody>
                Are you sure you want to clear the chat? This action cannot be
                undone.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose} onClick={clearList}>
                  Delete
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
