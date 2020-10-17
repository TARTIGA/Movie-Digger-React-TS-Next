import { ReactChild } from "react"
import Modal from "react-modal"
Modal.setAppElement("#__next")
const defaultStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
      {children}
    </Modal>
  )
}
export default ModalComponent
ModalComponent.defaultProps = {
  isOpen: false,
}
type TModalType = {
  isOpen: boolean
  onRequestClose: () => void
  style: {}
  children: ReactChild
}
