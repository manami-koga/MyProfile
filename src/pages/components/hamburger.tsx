import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  // Toolbar,
  // Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useHamburgerIcon } from "@/hooks/useHamburgerIcon";
import Image from "next/image";

export const HamburgerIcon = () => {
  const { drawerOpen, toggleDrawer, navItems } = useHamburgerIcon();
  return (
    <>
      {/* ハンバーガーアイコンを右上に配置 */}
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ position: "absolute", right: 0 }}
      >
        <MenuIcon sx={{ fontSize: 40 }} />{" "}
        {/* ハンバーガーアイコンのサイズ変更 */}
      </IconButton>

      {/* Drawerメニュー */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <IconButton onClick={toggleDrawer(false)} sx={{ m: 1 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={toggleDrawer(false)}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Image
                    src={item.icon}
                    alt="メニューアイコン"
                    width={24}
                    height={24}
                  />
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
