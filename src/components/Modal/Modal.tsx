import { useRef } from 'react'
import type { ModalProps } from "./Modal.types.ts";

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, footer }) => {

  const overlayMouseDown = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    overlayMouseDown.current = e.target === e.currentTarget;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (overlayMouseDown.current && e.target === e.currentTarget) {
      onClose();
    }
    overlayMouseDown.current = false;
  };

  if (!isOpen) return null;

  return (
    <div className="overlay overlay--visible" onClick={handleClick} onMouseDown = {handleMouseDown}>
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