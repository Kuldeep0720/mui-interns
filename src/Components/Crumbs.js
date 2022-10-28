import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as Color from "@mui/material/colors";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Crumbs = () => {
  const [defaultprimaryColor, setDefaultPrimaryColor] = useState("#3f50b5");
  const [defaultsecondaryColor, setDefaultSecondaryColor] = useState("#f44336");
  const [defaulterrorColor, setDefaultErrorColor] = useState("#f44336");
  const [defaultwarningColor, setDefaultWarningColor] = useState("#ffa726");
  const [defaultinfoColor, setDefaultInfoColor] = useState("#29b6f6");
  const [defaultsuccessColor, setDefaultSuccessColor] = useState("#66bb6a");

  const [primaryColor, setPrimaryColor] = useState("#3f50b5");
  const [secondaryColor, setSecondaryColor] = useState("#f44336");
  const [errorColor, setErrorColor] = useState("#f44336");
  const [warningColor, setWarningColor] = useState("#ffa726");
  const [infoColor, setInfoColor] = useState("#29b6f6");
  const [successColor, setSuccessColor] = useState("#66bb6a");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrimaryColor(defaultprimaryColor);
    setSecondaryColor(defaultsecondaryColor);
    setErrorColor(defaulterrorColor);
    setWarningColor(defaultwarningColor);
    setInfoColor(defaultinfoColor);
    setSuccessColor(defaultsuccessColor);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPrimaryColor("#3f50b5");
    setSecondaryColor("#f44336");
    setErrorColor("#f44336");
    setWarningColor("#ffa726");
    setInfoColor("#29b6f6");
    setSuccessColor("#66bb6a");
  };

  const handlePrimary = (event) => {
    setDefaultPrimaryColor(event.target.value);
  };
  const handleSecondary = (event) => {
    setDefaultSecondaryColor(event.target.value);
  };

  const handleError = (event) => {
    setDefaultErrorColor(event.target.value);
  };
  const handleWarning = (event) => {
    setDefaultWarningColor(event.target.value);
  };
  const handleInfo = (event) => {
    setDefaultInfoColor(event.target.value);
  };
  const handleSuccess = (event) => {
    setDefaultSuccessColor(event.target.value);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Settings
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Organization
    </Link>,
    <Typography key="3" color="text.primary">
      Theme Prefrences
    </Typography>,
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      error: {
        main: errorColor,
      },
      warning: {
        main: warningColor,
      },
      info: {
        main: infoColor,
      },
      success: {
        main: successColor,
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#fff", height: "100vh" }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Typography variant="h4" sx={{ lineHeight: "2" }}>
            Theme Preferences
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: "2" }}>
            Here You Can Configure the look and feel of the platform for you and
            your team and really own it.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}></Grid>

            {/* Buttons Part */}
            <Grid item xs={6} spacing={2}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Crumbs;
