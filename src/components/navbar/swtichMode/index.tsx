import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useTheme } from "@mui/material/styles";

import { ColorModeContext } from "../../../AppMode";

export default function SwitchMode() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Typography gutterBottom variant="body1" component="p">
        {t("MODE")}
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={theme.palette.mode}
        exclusive
        onChange={(
          event: React.MouseEvent<HTMLElement>,
          newAlignment: string
        ) => {
          colorMode.toggleColorMode(newAlignment);
        }}
      >
        <ToggleButton
          value="light"
          disabled={theme.palette.mode === "light"}
          className="space-x-2"
        >
          <Brightness7Icon />
          <Typography variant="body2">Light</Typography>
        </ToggleButton>
        <ToggleButton
          value="dark"
          disabled={theme.palette.mode === "dark"}
          className="space-x-2"
        >
          <Brightness4Icon />
          <Typography variant="body2">Dark</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
