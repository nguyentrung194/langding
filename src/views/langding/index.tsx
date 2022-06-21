import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import "./style.scss";
import CustomInput from "../../components/langding/input";
import CustomButton from "../../components/langding/button";
import CustomCard from "../../components/langding/card";
import { mocks } from "../../mocks/langding";

export default function Langding() {
  const { t } = useTranslation();
  const [input, setInput] = React.useState("");
  const onChange = (value: any) => {
    setInput(value.target.value);
  };
  return (
    <Box className="langding_container">
      <Box className="langding_image_slider_container">
        <Box className="langding_image_slider">
          <Box className="">
            <Typography
              variant="h2"
              className="langding_text_header_1"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {t("LANGDING.SESSION_1.TITLE")}
            </Typography>
            <Typography
              className="langding_text_header_2"
              variant="body1"
              component="h1"
              sx={{ flexGrow: 1 }}
            >
              {t("LANGDING.SESSION_1.SUB_TITLE_1")}
            </Typography>
            <Typography variant="body1" component="p">
              {t("LANGDING.SESSION_1.SUB_TITLE_2")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        className="langding_block langding_api_session_title"
        variant="h4"
        component="h4"
      >
        {t("LANGDING.SESSION_2.TITLE")}
      </Typography>
      <Box className="langding_block langding_api_session_container">
        <Box className="langding_api_session">
          {mocks.map((data) => {
            return (
              <CustomCard
                title={t(data.title)}
                description={t(data.description)}
                pathIcon={data.pathIcon}
              />
            );
          })}
        </Box>
      </Box>
      <Box className="langding_block">
        <Box className="flex justify-center mt-8">
          <CustomButton className="cus_button_learn_more">
            {t("LANGDING.SESSION_3.BTN_Learn_more")}
          </CustomButton>
        </Box>
        <Box className="langding_session_get_stated_container">
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {t("LANGDING.SESSION_4.TITLE")}
          </Typography>
          <Box className="grid grid-cols-1 sm:grid-cols-2 space-x-0.5">
            <CustomInput
              className="cus_input"
              value={input}
              onChange={onChange}
              placeholder={t("LANGDING.SESSION_4.INPUT")}
            />
            <CustomButton className="whitespace-nowrap rounded-r-md">
              {t("LANGDING.SESSION_4.BUTTON")}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
