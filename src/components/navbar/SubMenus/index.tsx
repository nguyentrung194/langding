import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
} from "@mui/material";
import { To, useNavigate } from "react-router-dom";
import "./style.scss";
import { SubMenuProps } from "../../../interfaces/navbar";
import { useTranslation } from "react-i18next";

export default function SubMenus({ items }: { items: Array<SubMenuProps> }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    <Box sx={{ width: "100%", maxWidth: 300 }} className="cus_list_menu">
      <nav aria-label="main mailbox folders">
        <List className="cus_group_items">
          {items.map((el) => {
            return (
              <ListItem disablePadding>
                <Link
                  className="cus_sub_menu_link"
                  onClick={(event) => {
                    navigator(el.to)(event);
                  }}
                  onKeyDown={(event) => {
                    navigator(el.to)(event);
                  }}
                >
                  <ListItemButton>
                    <ListItemText>{t(el.title)}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
