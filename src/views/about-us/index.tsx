import { Box, Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";

export default function AboutUs() {
  const { t } = useTranslation();
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    function updateSize() {
      setHeight(document.getElementById("about_us_slider")?.clientHeight || 0);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Box className="about_us_container">
      <Box className="about_us_image_slider_container">
        <Box className="about_us_image_slider">
          <Box className="">
            <Typography
              variant="h2"
              className="about_us_text_header_1"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {t("ABOUT_US.SESSION_1.TITLE")}
            </Typography>
            <Typography
              className="about_us_text_header_2"
              variant="body1"
              component="h1"
              sx={{ flexGrow: 1 }}
            >
              {t("ABOUT_US.SESSION_1.SUB_TITLE_1")}
            </Typography>
            <Typography variant="body1" component="p">
              {t("ABOUT_US.SESSION_1.SUB_TITLE_2")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Card
        id="about_us_slider"
        className="about_us_container_slider"
        style={{
          marginTop: -(height || 0) / 2 || 0,
        }}
      >
        <CardContent>
          <Box className="">
            <Box className="">
              <Box className="">
                <Typography gutterBottom variant="h4" component="h1" className="">
                  {t("ABOUT_US.SESSION_2.TITLE")}
                </Typography>
                <Box className="">
                  <Typography gutterBottom variant="body1" component="p">
                    {t("ABOUT_US.SESSION_2.DESCRIPTION")}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p" className="">
                    {t("ABOUT_US.SESSION_2.DESCRIPTION")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
