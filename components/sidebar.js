import { useSession } from "next-auth/client"

import{
    ChewronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
}from "@heroicons/react/outline";
import{
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    usersIcon,

}from "@heroicons/react/solid";
import sidebarRow from "./SidebarRow";


function sidebar(){

    const[session,loading]=useSession(); 
    return (
        <div className="p-2 mt-5  max-w-[600px] xl:min-w-[300px]"> 

            <sidebarRow src={session.user.image} title={session.user.name}/>

            <sidebarRow Icon ={usersIcon}  title="Friends" />
            <sidebarRow Icon ={userGroupIcon}  title="Groups" />
            <sidebarRow Icon ={usersIcon}  title="Marketplace"
             />
            <sidebarRow Icon ={DesktopComputerIcon}  title="Watch" />
            <sidebarRow Icon ={CalendarIcon}  title="Events" />
            <sidebarRow Icon ={ClockIcon}  title="Memories" />
            <sidebarRow Icon ={ChewronDownIcon}  title="See More" />

           </div>
    );  
    
    }


    export default sidebar; 