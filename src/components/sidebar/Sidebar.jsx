import { AccessTime, Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from "@mui/icons-material";
import SidebarRow from "../sidebarrow/SidebarRow";
import "./sidebar.css";
// import { mdiFacebookMessenger } from "@mdi/js"
// import user from "../../images/user.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarRow src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" title="Mark Zuckerberg" />
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
