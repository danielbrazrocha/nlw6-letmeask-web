import { useHistory } from 'react-router-dom'

import '../styles/admin-btn.scss';


type AdminBtnProps = {
  teste: string;
} 

export function AdminBtn(props: AdminBtnProps) {
  const history = useHistory()  

  function copyRoomCodeToClipboard() {
    const newURL = "/admin"+window.location.pathname
    history.push(newURL)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div className="room-code">
        <span>Ir para modo Admin</span>
      </div>

    </button>
  )
}