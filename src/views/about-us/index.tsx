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
        className="about_us_container_slider mx-4"
        style={{
          marginTop: -(height || 0) / 2 || 0,
        }}
      >
        <CardContent>
          <Box className="">
            <Box className="">
              <Box className="">
                <Typography variant="h4" component="h1" className="">
                  Maxlancer is quality-driven marketplace
                </Typography>
                <Box className="">
                  <Typography variant="body1" component="p">
                    We understand that quality is paramount to engineering
                    products and services! Maxlancer is committed to making the
                    highest quality skills and services available for our users.
                    A marketplace that has been designed and built by
                    professional engineers for engineering professionals. It is
                    a specialised place for talented engineers, technicians,
                    technologists, and scientists to provide their quality
                    services to high-end clients and businesses. Our talent pool
                    is among the top in the world and each applicant is
                    carefully screened before becoming a Maxlancer service
                    provider.
                  </Typography>
                  <Typography variant="body1" component="p" className="">
                    The Maxlancer platform provides a powerful workspace where
                    professionals can search for jobs and clients can look for
                    suitable candidates. Both parties can communicate internally
                    with ease, and progress (from start to payment) is
                    seamlessly reported and managed.
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
