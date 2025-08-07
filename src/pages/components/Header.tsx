import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/main.module.css"
import { TitleType } from "@/types/Title";

//遷移先
const navItems = [
  { text: "ホーム", path: "/Home" },
  { text: "プロフィール", path: "/MyProfile" },
  { text: "成果物一覧", path: "/ProductList" },
  { text: "資格一覧", path: "/Qualifications" },
];

export const Header = (props:TitleType) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" component="header" className={styles.header}>
      <Container maxWidth="md">
        <Toolbar sx={{ justifyContent: "center", position: "relative" }}>
          <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            {props.name}
          </Typography>

          {/* ハンバーガーアイコンを右上に配置 */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ position: "absolute", right: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      </Container>

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
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};