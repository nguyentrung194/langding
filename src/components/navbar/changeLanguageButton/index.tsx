import "./style.scss";

import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
const ChangeLanguageBtn = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    event.stopPropagation();
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} size="small">
        <Select
          id="select"
          defaultValue="en"
          label="Language"
          onChange={handleChangeLanguage}
          variant="standard"
          value={i18n.language}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="vi">Vi</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ChangeLanguageBtn;
