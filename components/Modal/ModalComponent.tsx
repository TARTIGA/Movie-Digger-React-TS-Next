import Modal from "react-modal"
import { BtnModalClose } from "./styles"
import type { TModalType } from "../../types"
Modal.setAppElement("#__next")
/**
 * Default modal styles
 */
const defaultStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
  },
}
const ModalComponent = ({
  isOpen,
  onRequestClose,
  style = null,
  children,
}: TModalType) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style || defaultStyle}
    >
      <>
        <BtnModalClose onClick={onRequestClose}>&times;</BtnModalClose>
        {children}
      </>
    </Modal>
  )
}
export default ModalComponent

ModalComponent.defaultProps = {
  isOpen: false,
}
