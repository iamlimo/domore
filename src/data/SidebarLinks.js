import { GrNotes} from "react-icons/gr";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank} from "react-icons/md";
import { AiOutlineCalendar} from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
const Sidebarlinks =[
    {
        "name":"Notes",
        "icons":<GrNotes/>,
        "path":"/notes"
    },
    {
        "name":"Untagged",
        "icons":<IoFileTrayFullOutline/>,
        "path":"/untagged"
    },
    {
        "name":"Todo",
        "icons":<MdCheckBoxOutlineBlank/>,
        "path":"/todo"
    },
    {
        "name":"Today",
        "icons":<AiOutlineCalendar/>,
        "path":"/today"
    },
    {
        "name":"Locked",
        "icons":<BiLockAlt/>,
        "path":"/locked"
    },
    {
        "name":"Trash",
        "icons":<FiTrash/>,
        "path":"/trash"
    },
]
export default Sidebarlinks