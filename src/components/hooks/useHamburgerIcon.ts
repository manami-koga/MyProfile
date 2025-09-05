import { useState } from "react";
import homeIcon from "../../../public/MenuIcon/homeIcon.png";
import myProfileIcon from "../../../public/MenuIcon/myProfileIcon.png";
import productIcon from "../../../public/MenuIcon/productIcon.png";
import studyIcon from "../../../public/MenuIcon/studyIcon.png";

export const useHamburgerIcon = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  //遷移先
  const navItems = [
    { text: "ホーム", path: "/Home", icon: homeIcon },
    { text: "プロフィール", path: "/MyProfileScreen", icon: myProfileIcon },
    { text: "成果物一覧", path: "/ProductListScreen", icon: productIcon },
    { text: "資格一覧", path: "/QualificationsScreen", icon: studyIcon },
  ];
  return { drawerOpen, toggleDrawer, navItems };
};
