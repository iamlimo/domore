import React from 'react'
import Sidebarlinks from '../data/SidebarLinks'
import { IoCloudOfflineOutline } from "react-icons/io5";
import { AiOutlineControl} from "react-icons/ai";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
       <IoCloudOfflineOutline/>
       <AiOutlineControl/>
        {Sidebarlinks.map((item)=>{
            return(
               <Link to={item.path}>
                <li>
                    {item.icons}
                    {item.name}
                    </li></Link>
                
                
            )
        })}
    </div>
  )
}

export default Sidebar