import type { ModalProps } from "./Modal.types.ts";

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, footer }) => {

  if (!isOpen) return null;

  return (
    <div className="overlay overlay--visible" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={e => e.stopPropagation()}
      >
        {children}
        {footer}
      </div>
    </div>
  );
};

export default Modal;