import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";

export const Hamburger = () => {
    //ハンバーガアイコンの表示
    <ListItemText primary={<MenuIcon />}></ListItemText>

    const [open, setOpen] = useState(false); //ドロワーの開閉状態を管理するステート

    const handleDrawerOpen = () => {
        setOpen(true); //ドロワーを開く
    }

    const handleDrawerClose = () => {
        setOpen(false); //ドロワーを閉じる
    }

    return (
       <>
      <IconButton onClick={() => setOpen(true)} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {['Home', 'Profile', 'Settings'].map((text) => (
            <ListItemButton onClick={handleDrawerClose} sx={{ textAlign: "center", borderBottom: "solid 1px" }}>
             <ListItemText primary={<MenuIcon />}/>
          </ListItemButton>

          ))}
        </List>
      </Drawer>
    </>
    )
}