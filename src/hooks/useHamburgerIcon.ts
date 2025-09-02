import { useState } from "react";
import homeIcon from "../..//public/MenuIcon/スタンダードな家アイコン.png"
import studyIcon from "../../public/MenuIcon/えんぴつ付きのノートアイコン.png"
import productIcon from "../../public/MenuIcon/フォルダアイコン11.png"
import myProfileIvon from "../../public/MenuIcon/履歴書アイコン4.png"

export const useHamburgerIcon = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    //遷移先
    const navItems = [
        { text: "ホーム", path: "/Home", icon: homeIcon },
        { text: "プロフィール", path: "/MyProfileScreen",icon:myProfileIvon },
        { text: "成果物一覧", path: "/ProductListScreen", icon: productIcon },
        { text: "資格一覧", path: "/QualificationsScreen", icon: studyIcon },
    ];
    return { drawerOpen, toggleDrawer, navItems }
}