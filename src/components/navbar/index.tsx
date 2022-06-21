import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Divider, IconButton, Link } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import LeftMenu from "./LeftMenu";
import "./style.scss";
import { useTranslation } from "react-i18next";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { mdiTools, mdiClose } from "@mdi/js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { leftMenuData } from "../../mocks/langding";
import SwitchLanguageButton from "./switchLanguageButton";
import SwitchMode from "./swtichMode";

export default function ButtonAppBar() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const { t } = useTranslation();

  const [leftMenu, setLeftMenu] = React.useState(false);
  const [rightMenu, setRightMenu] = React.useState(false);

  const toggleDrawerLeft =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setLeftMenu(open);
    };
  const toggleDrawerRight =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setRightMenu(open);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" sx={{ boxShadow: "none" }} position="fixed">
        <Box className="menu_top_baner">
          <Typography variant="body2">{t("TOP_BANER.1")}</Typography>
          <Link className="menu_top_baner_text_line" href="#" color="inherit">
            <span>{t("TOP_BANER.2")}</span>{" "}
            <ArrowForwardIosIcon fontSize="inherit" />
          </Link>
        </Box>
        <Toolbar className="cus_navbar_Toolbar">
          {mobile && (
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawerLeft(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          {!mobile && (
            <Box className="cus_navbar_left_Toolbar">
              <Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <AbcIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {leftMenuData.map((e) => {
                  return (
                    <LeftMenu
                      responsive={{
                        mobile,
                        desktop,
                        tablet,
                      }}
                      pathIcon={e.pathIcon}
                      to={e.to}
                      title={t(e.title)}
                      subMenus={e.subMenus}
                    />
                  );
                })}
              </Box>
            </Box>
          )}
          <Box className="space-x-2 flex">
            <Button sx={{ textTransform: "none" }}>
              {t("MENU.NAVBAR.RIGHT.LOGIN")}
            </Button>
            <Button
              className="cus_button_sign_up"
              sx={{ textTransform: "none" }}
            >
              {mobile
                ? t("MENU.NAVBAR.RIGHT.SIGN_UP_SHORT")
                : t("MENU.NAVBAR.RIGHT.SIGN_UP")}
            </Button>
            <Box>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={(event) => {
                  toggleDrawerRight(true)(event);
                }}
                sx={{
                  borderRadius: "6px",
                  border: "1px solid rgba(33, 108, 131, 0.349)",
                }}
              >
                <Icon path={mdiTools} size={1} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <div>
        <React.Fragment key={"left"}>
          <SwipeableDrawer
            anchor={"left"}
            open={leftMenu}
            onClose={toggleDrawerLeft(false)}
            onOpen={toggleDrawerLeft(true)}
          >
            <ListLeftMenu toggleDrawerLeft={toggleDrawerLeft} />
          </SwipeableDrawer>
        </React.Fragment>
      </div>
      <div>
        <React.Fragment key={"right"}>
          <SwipeableDrawer
            anchor={"right"}
            open={rightMenu}
            onClose={toggleDrawerRight(false)}
            onOpen={toggleDrawerRight(true)}
          >
            <ListRightMenu toggleDrawerRight={toggleDrawerRight} />
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </Box>
  );
}

const ListLeftMenu = ({
  toggleDrawerLeft,
}: {
  toggleDrawerLeft: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "100%", width: 320 }} role="presentation">
      <List>
        {leftMenuData.map((e, id) => {
          return (
            <ListItem key={e.title + id} disablePadding>
              <ListItemButton
                onClick={(event) => {
                  toggleDrawerLeft(false)(event);
                  navigate(e.to);
                }}
                onKeyDown={(event) => {
                  toggleDrawerLeft(false)(event);
                  navigate(e.to);
                }}
              >
                <LeftMenu
                  isOnDrawer={true}
                  pathIcon={e.pathIcon}
                  to={e.to}
                  title={t(e.title)}
                  subMenus={e.subMenus}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

const ListRightMenu = ({
  toggleDrawerRight,
}: {
  toggleDrawerRight: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "320px",
        maxWidth: "100vw",
      }}
      role="presentation"
      className="drawer_right_menu"
    >
      <Box
        sx={{
          margin: "8px",
        }}
        className="drawer_right_menu_header"
      >
        <Typography variant="h6" component="h6">
          {t("SETTING")}
        </Typography>
        <Box className="icon_close">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(event) => {
              toggleDrawerRight(false)(event);
            }}
          >
            <Icon path={mdiClose} size={1} />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <SwitchLanguageButton />
      <SwitchMode />
    </Box>
  );
};
