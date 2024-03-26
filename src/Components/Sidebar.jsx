import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Sidebar() {
  return (
    <div className=" bg-[#4A154B] text-white flex border-t border-[#592f5b] w-[260px] p-4 justify-between">
      <div className="">
        <h2 className="">Shubham Adelkar</h2>
        <div className="flex flex-row">
          <FiberManualRecordIcon className="text-[green] scale-75" />
          <h3 className="">imbachhu</h3>
        </div>
      </div>
      <ModeEditIcon className="scale-75" />
    </div>
  );
}
