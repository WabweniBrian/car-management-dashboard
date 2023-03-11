import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="relative hidden sm:block">
      <span className="absolute top-1/2 -translate-y-1/2 left-2">
        <BiSearch className="text-muted" />
      </span>
      <input
        type="text"
        className="pl-8 pr-4 py-[0.35rem] bg-slate-100 rounded-lg dark:bg-dark outline-none w-[100px] sm:w-full"
        placeholder="Search.."
      />
    </div>
  );
};

export default SearchBar;
