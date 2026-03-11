export interface ModalProps {
    isOpen: boolean,
    children?: React.ReactNode,
    footer?: React.ReactNode,
    onClose: () => void,
  };
  