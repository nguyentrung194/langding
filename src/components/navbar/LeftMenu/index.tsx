import { Box, Link, Typography } from "@mui/material";
import * as React from "react";
import { To, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import "./style.scss";
import CustomTooltip from "../../CustomTooltip";
import { LeftMenuProps } from "../../../interfaces/navbar";
import SubMenus from "../SubMenus";

export default function LeftMenu({
  title,
  to,
  pathIcon,
  responsive,
  isOnDrawer,
  subMenus,
}: LeftMenuProps) {
  const navigate = useNavigate();

  const navigator =
    (to?: To) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      if (!!to) {
        navigate(to);
      }
    };

  return (
    <Box className={`cus_group_hover ${isOnDrawer && "isOnDrawer"}`}>
      <Link
        className="cus_button_link"
        onClick={(event) => {
          navigator(to)(event);
        }}
        onKeyDown={(event) => {
          navigator(to)(event);
        }}
      >
        {(responsive?.mobile || responsive?.tablet || isOnDrawer) &&
          !!pathIcon && (
            <Box className="px-3">
              {isOnDrawer ? (
                <Icon path={pathIcon} size={1} color={"inherit"} />
              ) : (
                <CustomTooltip placement="top-start" title={title}>
                  <Icon path={pathIcon} size={1} color={"inherit"} />
                </CustomTooltip>
              )}
            </Box>
          )}
        {(responsive?.desktop || isOnDrawer) && (
          <Box className="px-3">
            <Typography gutterBottom variant="body1" component="div">
              {title}
            </Typography>
          </Box>
        )}
      </Link>
      {subMenus?.length && (
        <Box className="cus_button_menu">
          <Box className={`cus_group_item ${isOnDrawer && "isOnDrawer"}`}>
            <SubMenus items={subMenus} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
