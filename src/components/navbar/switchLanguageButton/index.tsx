import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

export default function SwitchLanguageButton() {
  const { i18n, t } = useTranslation();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    event.stopPropagation();
    i18n.changeLanguage(nextView);
  };

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
        {t("LANGUAGE")}
      </Typography>
      <ToggleButtonGroup
        orientation="vertical"
        value={i18n.language}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton
          value="en"
          disabled={i18n.language === "en"}
          aria-label="en"
        >
          English
        </ToggleButton>
        <ToggleButton
          value="vi"
          disabled={i18n.language === "vi"}
          aria-label="vi"
        >
          Vietnamese
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
