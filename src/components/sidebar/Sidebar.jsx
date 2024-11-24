import { AccessTime, Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from "@mui/icons-material";
import SidebarRow from "../sidebarrow/SidebarRow";
import "./sidebar.css";
import { useStateValue } from "../../StateProvider";
// import { mdiFacebookMessenger } from "@mdi/js"
// import user from "../../images/user.png";

const Sidebar = () => {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
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
