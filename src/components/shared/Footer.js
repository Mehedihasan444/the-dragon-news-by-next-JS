"use client";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <GoogleIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
{
    navItems.map((item)=><Link href={item.pathname} key={item}>
        <Button className="text-white">{item.route}</Button>
    </Link>)
}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">
            @2024 The Draon News. Design by Mehedi Hasan.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
