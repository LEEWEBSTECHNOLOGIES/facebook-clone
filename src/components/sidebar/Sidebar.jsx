import SidebarRow from "../sidebarrow/SidebarRow";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarRow title="Pages" />
        <SidebarRow title="Friends"/>
        <SidebarRow />
        <SidebarRow />
        <SidebarRow />
    </div>
  )
}

export default Sidebar
