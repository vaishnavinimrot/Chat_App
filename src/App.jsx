import List from "./componets/list/List"
import Detail from "./componets/detail/Detail"
import Chat from "./componets/chat/Chat"
import Login from "./componets/login/Login"
import Notification from "./componets/notification/Notification"

const App = () => {
  
 const user= true;

  return (
    <div className='container'>
      { user? (
          <>
           <List/>
           <Chat/>
          <Detail/>
          </>
        ) : (
          <Login/>
        )}
        <Notification/>
    </div>
  )
}

export default App