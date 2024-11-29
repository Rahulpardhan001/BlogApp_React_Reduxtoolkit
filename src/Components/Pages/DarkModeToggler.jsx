import { Icon } from "@iconify/react";

import { useSelector, useDispatch } from "react-redux";
import { toogleMode } from "../../Redux/Slices/ThemeSlice";

const DarkModeToggler = () => {
  const isDarkMode = useSelector((content) => content.ui.isDarkMode);
  const dispatch = useDispatch();
  const toggleModeHandler = () => {
    dispatch(toogleMode());
    
  };
  return (
    <div>
      <Icon
        onClick={toggleModeHandler}
        icon={isDarkMode ? "circum:dark" : "iconamoon:mode-light"}
        className="text-3xl cursor-pointer dark:text-white"
      />
    </div>
  );
};
export default DarkModeToggler;


