import React from "react";

const SearchField = () => {
  return (
    <div className="">
      <div className="relative ">
        <input
          type="search"
          placeholder="Search"
          className="w-[15.625em] h-11 bg-bgGray py-2 pl-9 border-2 rounded-sm outline-none focus-visible:border-primary focus-visible:outline-none"
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 256 256" class="absolute bottom-0 left-1.5 top-0.5 translate-y-1/2 text-slate-700 "><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg>
      </div>
    </div>
  );
};

export default SearchField;
