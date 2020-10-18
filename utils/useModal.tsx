import { useState } from "react"

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  /**
   * Method show/hide toggle view modal
   */
  const toggle = () => {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle,
  }
}

export default useModal
