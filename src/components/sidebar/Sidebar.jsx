import { AccessTime, Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from "@mui/icons-material";
import SidebarRow from "../sidebarrow/SidebarRow";
import "./sidebar.css";
// import { mdiFacebookMessenger } from "@mdi/js"
// import user from "../../images/user.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarRow src="https://avatars.githubusercontent.com/u/29003606?v=4" title="Ali Ajibade" />
        <SidebarRow Icon={People} title="Friends (60 online)" />
        <SidebarRow Icon={AccessTime} title="Memories" />
        <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
        <SidebarRow Icon={EmojiFlags} title="Pages" />
   
        <SidebarRow Icon={Chat} title="Messenger"/>
        {/* <SidebarRow Icon={mdiFacebookMessenger} title="Pages" /> */}
        <SidebarRow Icon={Storefront} title="Marketplace" />
        <SidebarRow Icon={VideoLibrary} title="Videos"/>
        <SidebarRow  Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  )
}

export default Sidebar
