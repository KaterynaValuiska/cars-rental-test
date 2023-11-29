import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyled } from "./Modal.styled";

const modalRoot = document.querySelector("#modalRoot");

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOverlay = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlay}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
};
