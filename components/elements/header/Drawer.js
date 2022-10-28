import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import DinamalarLogo from "./Logo";
import axios from "axios";

export default function CustumDrawer(props) {
  const { drawerOpen, setDrawerOpen } = props;
  const [tabs, setTabs] = useState([]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    // setState({ ...state, [anchor]: open });
    setDrawerOpen(open);
  };

  useEffect(() => {
    const getTabList = async () => {
      const tabsAPi = "/api/tabs";
      const tabList = await axios.get(tabsAPi);
      setTabs(tabList.data);
    };
    getTabList();
  }, []);
  // console.log("taaabstabstabs", tabs);
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Box
          sx={{
            flexGrow: 1,
            m: 1,
            alignItems: "center",
            color: "var(--primary)",
            display: { xs: "flex", md: "none" },
          }}
        >
          <DinamalarLogo />
        </Box>
      </List>
      <Divider />
      <List>
        {tabs.length > 0 &&
          tabs?.map((tab, index) => (
            <Link key={tab.name} href={`/${tab.link.split("=")[1] ?? ""}`}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={tab.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
