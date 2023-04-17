import Sidebar from "./Component/Sidebar.comp";
import ChatBodyComponent from "./Component/ChatBody.comp";

export default function Chat() {
  return (
    <div className="Home_app_container">
      <Sidebar />
      <ChatBodyComponent />
    </div>
  );
}
