import { ReactChild } from "react"
import Modal from "react-modal"
import styled, { css } from "styled-components"
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
const BtnModalClose = styled.button(
  (props) => css`
    background: #000;
    color: #fff;
    position: absolute;
    border: none;
    font-size: 32px;
    right: 10px;
    top: -8px;
  `
)
ModalComponent.defaultProps = {
  isOpen: false,
}
type TModalType = {
  isOpen: boolean
  onRequestClose: () => void
  style?: {}
  children: ReactChild
}
