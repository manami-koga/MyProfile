import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { HamburgerIcon } from "../parts/Hamburger";
import { TitleType } from "@/types/Title";
import frame from "@/styles/frame.module.css";
import Image from "next/image";
import React from "react";

export const Header = (props: TitleType) => {
  return (
    <>
      <AppBar position="static" component="header" className={frame.header}>
        <Container maxWidth="md">
          <Toolbar sx={{ justifyContent: "center", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image
                src="/Images/トナカイアイコン6 (1).png"
                alt="アイコン"
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