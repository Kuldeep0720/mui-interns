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
            <Grid item xs={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ lineHeight: "2" }}>
                    Color Palette
                  </Typography>
                  <Divider />
                  <Stack spacing={2} sx={{ pt: "15px", pb: "15px" }}>
                    <form onSubmit={handleSubmit}>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="primaryColor">Primary</InputLabel>
                        <Select
                          native
                          id="primaryColor"
                          label="Primary"
                          value={defaultprimaryColor}
                          onChange={handlePrimary}
                        >
                          <option aria-label="None" value="" />
                          {Object.entries(Color).map((obj, j) => (
                            <optgroup label={obj[0]}>
                              {Object.entries(obj[1]).map((ent, i) => (
                                <option
                                  value={ent[1]}
                                >{`${obj[0]}[${ent[0]}]`}</option>
                              ))}
                            </optgroup>
                          ))}
                        </Select>
                        {console.log(Object.entries(Color))}
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="secondaryColor">Error</InputLabel>
                        <Select
                          native
                          defaultValue=""
                          id="secondaryColor"
                          label="Secondary"
                          value={defaultsecondaryColor}
                          onChange={handleSecondary}
                        >
                          <option aria-label="None" value="" />
                          {Object.entries(Color).map((obj, j) => (
                            <optgroup label={obj[0]}>
                              {Object.entries(obj[1]).map((ent, i) => (
                                <option
                                  value={ent[1]}
                                >{`${obj[0]}[${ent[0]}]`}</option>
                              ))}
                            </optgroup>
                          ))}
                        </Select>
                        {console.log(Object.entries(Color))}
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="errorColor">Error</InputLabel>
                        <Select
                          native
                          defaultValue=""
                          id="errorcolor"
                          label="Error"
                          value={defaulterrorColor}
                          onChange={handleError}
                        >
                          <option aria-label="None" value="" />
                          {Object.entries(Color).map((obj, j) => (
                            <optgroup label={obj[0]}>
                              {Object.entries(obj[1]).map((ent, i) => (
                                <option
                                  value={ent[1]}
                                >{`${obj[0]}[${ent[0]}]`}</option>
                              ))}
                            </optgroup>
                          ))}
                        </Select>
                        {console.log(Object.entries(Color))}
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="warningcolor">Warning</InputLabel>
                        <Select
                          native
                          id="warningColor"
                          label="Warning"
                          value={defaultwarningColor}
                          onChange={handleWarning}
                        >
                          <option aria-label="None" value="" />
                          {Object.entries(Color).map((obj, j) => (
                            <optgroup label={obj[0]}>
                              {Object.entries(obj[1]).map((ent, i) => (
                                <option
                                  value={ent[1]}
                                >{`${obj[0]}[${ent[0]}]`}</option>
                              ))}
                            </optgroup>
                          ))}
                        </Select>
                        {console.log(Object.entries(Color))}
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="infoColor">Info</InputLabel>
                        <Select
                          native
                          id="infoColor"
                          label="Info"
                          value={defaultinfoColor}
                          onChange={handleInfo}
                        >
                          <option aria-label="None" value="" />
                          {Object.entries(Color).map((obj, j) => (
                            <optgroup label={obj[0]}>
                              {Object.entries(obj[1]).map((ent, i) => (
                                <option
                                  value={ent[1]}
                                >{`${obj[0]}[${ent[0]}]`}</option>
                              ))}
                            </optgroup>
                          ))}
                        </Select>
                        {console.log(Object.entries(Color))}
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="successColor">Success</InputLabel>
                        <Select
                          native
                          id="successColor"
                          label="Success"
                          value={defaultsuccessColor}
                          onChange={handleSuccess}
                        >
                          <option aria-label="None" value="" />
                          {Object.entries(Color).map((obj, j) => (
                            <optgroup label={obj[0]}>
                              {Object.entries(obj[1]).map((ent, i) => (
                                <option
                                  value={ent[1]}
                                >{`${obj[0]}[${ent[0]}]`}</option>
                              ))}
                            </optgroup>
                          ))}
                        </Select>
                        {console.log(Object.entries(Color))}
                      </FormControl>
                      <Divider />

                      <Stack direction="row" spacing={1} sx={{ pt: "10px" }}>
                        <Button variant="text" type="submit">
                          SAVE
                        </Button>
                        <Button
                          variant="text"
                          color="secondary"
                          onClick={handleReset}
                        >
                          RESET
                        </Button>
                      </Stack>
                    </form>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Buttons Part */}
            <Grid item xs={6} spacing={2}>
              <ThemeProvider theme={theme}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ lineHeight: "2" }}>
                      Demo
                    </Typography>
                    <Divider />
                    <Typography variant="h4" sx={{ lineHeight: "2" }}>
                      Buttons
                    </Typography>
                    <Stack direction="row" spacing={3}>
                      <Button variant="text">Contained</Button>
                      <Button variant="text">Outlined</Button>
                      <Button variant="text">Text</Button>
                    </Stack>

                    <Typography variant="div" sx={{ "& button": { m: 1 } }}>
                      <div spacing={2} direction="row">
                        <Button variant="contained" size="large">
                          Large
                        </Button>

                        <Button variant="outlined" size="medium">
                          Medium
                        </Button>

                        <Button variant="outlined" size="small">
                          Small
                        </Button>
                      </div>

                      <div spacing={2} direction="row">
                        <Button
                          variant="contained"
                          size="large"
                          color="secondary"
                        >
                          Large
                        </Button>

                        <Button
                          variant="outlined"
                          size="medium"
                          color="secondary"
                        >
                          Medium
                        </Button>

                        <Button
                          variant="outlined"
                          size="small"
                          color="secondary"
                        >
                          Small
                        </Button>
                      </div>
                      <div spacing={2} direction="row">
                        <Button variant="contained" size="large" color="error">
                          Large
                        </Button>

                        <Button variant="outlined" size="medium" color="error">
                          Medium
                        </Button>

                        <Button variant="outlined" size="small" color="error">
                          Small
                        </Button>
                      </div>
                      <div spacing={2} direction="row">
                        <Button
                          variant="contained"
                          size="large"
                          color="warning"
                        >
                          Large
                        </Button>

                        <Button
                          variant="outlined"
                          size="medium"
                          color="warning"
                        >
                          Medium
                        </Button>

                        <Button variant="outlined" size="small" color="warning">
                          Small
                        </Button>
                      </div>
                      <div spacing={2} direction="row">
                        <Button variant="contained" size="large">
                          Large
                        </Button>

                        <Button variant="outlined" size="medium">
                          Medium
                        </Button>

                        <Button variant="outlined" size="small">
                          Small
                        </Button>
                      </div>
                      <div spacing={2} direction="row">
                        <Button
                          variant="contained"
                          size="large"
                          color="success"
                        >
                          Large
                        </Button>

                        <Button
                          variant="outlined"
                          size="medium"
                          color="success"
                        >
                          Medium
                        </Button>

                        <Button variant="outlined" size="small" color="success">
                          Small
                        </Button>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Crumbs;
