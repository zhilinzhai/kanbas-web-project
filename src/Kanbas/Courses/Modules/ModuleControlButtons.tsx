import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void })  {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (!currentUser) {
        return null
    }
    if (currentUser !== "FACULTY") {
        return null
    }
  return (
    <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
