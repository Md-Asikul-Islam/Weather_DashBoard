import React from "react";
import heartIcon from '../assets/heart.svg'
const Favorite = () => {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={heartIcon} alt="heart" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favorite;
