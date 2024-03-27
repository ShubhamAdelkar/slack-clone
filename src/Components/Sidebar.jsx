import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MessageIcon from "@mui/icons-material/Message";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleIcon from "@mui/icons-material/People";
import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidebar() {
  return (
    <div className="flex flex-col  bg-[#4A154B] text-white w-[260px] justify-between">
      <div className="flex border-t border-[#592f5b] border-b p-4 justify-between items-center">
        <div className="flex flex-col items-start">
          <h2 className="font-bold">Shubham Adelkar</h2>
          <div className="flex flex-row">
            <FiberManualRecordIcon className="text-[green] scale-75" />
            <h3 className="">imbachhu</h3>
          </div>
        </div>
        <ModeEditIcon className="scale-150 bg-white text-black rounded-full p-1" />
      </div>

      <div className="border-b border-[#592f5b]">
        <ul className="flex flex-col">
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <MessageIcon /> Threads
          </li>
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <InboxIcon /> Mentions & Reactions
          </li>
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <DraftsIcon /> Saved items
          </li>
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <BookmarkBorderIcon /> Channel browser
          </li>
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <PeopleIcon /> People & user groups
          </li>
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <AppsIcon /> Apps
          </li>
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <FileCopyIcon /> File browser
          </li>
          <li className="hover:bg-[#430c44] cursor-pointer px-4 py-2">
            <ExpandLessIcon /> Show less
          </li>
        </ul>
      </div>
      <ul className="border-b border-[#592f5b]">
        <li className="hover:bg-[#430c44] cursor-pointer px-4 py-3">
          <ExpandMoreIcon />
          Channels
        </li>
      </ul>
      <ul className="border-b border-[#592f5b]">
        <li className="hover:bg-[#430c44] cursor-pointer px-4 py-3">
          <AddIcon />
          Add channel
        </li>
      </ul>
    </div>
  );
}
