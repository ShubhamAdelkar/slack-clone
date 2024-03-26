import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center bg-[#4A154B] p-4 sticky">
      {/* header-left */}
      <div className="flex flex-row gap-6">
        {/* avatars */}
        <AccountCircleIcon className="text-[#ffff] scale-110" />
        {/* time icon */}
        <AccessTimeIcon className="text-[#ffff] scale-110" />
      </div>

      {/* search-bar */}
      <div className="flex gap-2 items-center border border-gray-400 rounded-lg px-2 flex-shrink">
        {/* search-icon */}
        <SearchIcon className="text-[#ffff] text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-none bg-transparent p-1 pr-10 pl-2 text-gray-200 placeholder-gray-400"
        />
      </div>

      {/* header-right */}
      <div className="">
        {/* help-icon */}
        <HelpIcon className="text-[#ffff] scale-110" />
      </div>
    </div>
  );
}
