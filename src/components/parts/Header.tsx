import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { TitleType } from "@/types/Title";
// import { useHamburgerIcon } from "@/hooks/useHamburgerIcon";
import frame from "../../../styles/frame.module.css";
import Image from "next/image";
import icon from "../../../public/Images/トナカイアイコン6 (1).png";
import React from "react";
import { HamburgerIcon } from "./Hamburger";

export const Header = (props: TitleType) => {
  // const { toggleDrawer } = useHamburgerIcon();
  return (
    <>
      <AppBar position="static" component="header" className={frame.header}>
        <Container maxWidth="md">
          <Toolbar sx={{ justifyContent: "center", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image
                src={icon}
                alt="桜アイコン"
                width={45}
                height={45}
                style={{ objectFit: "contain" }}
              />

              <Typography
                variant="h6"
                component="div"
                sx={{ textAlign: "center", fontSize: 25 }}
              >
                {props.name}
              </Typography>
            </div>

            <HamburgerIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
