import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import HomeIcon from "@mui/icons-material/Home";
import {SideData} from "./DataAside";
import { TbLanguageKatakana } from "react-icons/tb";
import { BiGame } from "react-icons/bi";

import { display } from "@mui/system";
const NewAside = () => {
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(true);
  const [openGrm, setOpenGram] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickGrm = () => {
    setOpenGram(!openGrm);
  };
  const tipo = "Jogo";
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar
            style={{
              backgroundColor: "#C1F4C5",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              {/* <img src={icon} alt="" /> */}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                ></ListSubheader>
              }
            >
              <List>
                {SideData.filter((item) => item.cName.match("Home")).map(
                  (itemFilterName) => (
                    <ListItem key={itemFilterName.id} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{itemFilterName.icon}</ListItemIcon>
                        <a
                          href={itemFilterName.path}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <ListItemText primary={itemFilterName.title} />
                        </a>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
              {/* <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <BiGame />
                </ListItemIcon>
                <ListItemText primary="Jogos" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton> */}

              {/* <Collapse in={open} timeout="auto" unmountOnExit>
                {SideData.filter((item) => item.cName.match(tipo)).map(
                  (itemFilterName) => (
                    <ListItem key={itemFilterName.id} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{itemFilterName.icon}</ListItemIcon>
                        <a
                          href={itemFilterName.path}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <ListItemText primary={itemFilterName.title} />
                        </a>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </Collapse> */}
            </List>
            {/* <Divider /> */}
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                ></ListSubheader>
              }
            >
              {/* <ListItemButton onClick={handleClickGrm}>
                <ListItemIcon>
                  <TbLanguageKatakana />
                </ListItemIcon>
                <ListItemText primary="Gramatica" />
                {openGrm ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton> */}

              {/* <Collapse in={openGrm} timeout="auto" unmountOnExit>
                {SideData.filter((item) => item.cName.match("Gramatica")).map(
                  (itemFilterName) => (
                    <ListItem key={itemFilterName.id} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{itemFilterName.icon}</ListItemIcon>
                        <a
                          href={itemFilterName.path}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <ListItemText primary={itemFilterName.title} />
                        </a>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </Collapse> */}
            </List>
            <Divider />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};
export default NewAside;
