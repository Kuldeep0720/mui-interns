import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import DropDown from "./DropDown";
import TextInput from "./TextInput";
import { useState } from "react";
import CircularLoading from "./CircularLoading";
import { FormControlLabel, Stack, Switch } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import * as Color from "@mui/material/colors";
import { styled } from "@mui/material/styles";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Crumbs = () => {
  const theme1 = createTheme();
  const [openh1, setOpenh1] = React.useState(false);
  const [openh2, setOpenh2] = React.useState(false);
  const [openh3, setOpenh3] = React.useState(false);
  const [openh4, setOpenh4] = React.useState(false);
  const [openh5, setOpenh5] = React.useState(false);
  const [openh6, setOpenh6] = React.useState(false);
  const [openbody1, setOpenbody1] = React.useState(false);
  const [openbody2, setOpenbody2] = React.useState(false);
  const [opensubtitle1, setOpensubtitle1] = React.useState(false);
  const [opensubtitle2, setOpensubtitle2] = React.useState(false);
  const [openbutton, setOpenbutton] = React.useState(false);

  const handleh1Click = () => {
    setOpenh1(!openh1);
  };
  const handleh2Click = () => {
    setOpenh2(!openh2);
  };
  const handleh3Click = () => {
    setOpenh3(!openh3);
  };
  const handleh4Click = () => {
    setOpenh4(!openh4);
  };
  const handleh5Click = () => {
    setOpenh5(!openh5);
  };
  const handleh6Click = () => {
    setOpenh6(!openh6);
  };
  const handlebody1Click = () => {
    setOpenbody1(!openbody1);
  };
  const handlebody2Click = () => {
    setOpenbody2(!openbody2);
  };
  const handlesubtitle1Click = () => {
    setOpensubtitle1(!opensubtitle1);
  };

  const handlesubtitle2Click = () => {
    setOpensubtitle2(!opensubtitle2);
  };
  const handlebuttonClick = () => {
    setOpenbutton(!openbutton);
  };

  const h1_default = {
    name: "Heading 1",
    fontSize: "6rem",
    fontWeight: "300",
    lineHeight: "1.167",
    letterSpacing: "-0.01562em",
  };
  const h2_default = {
    name: "Heading 2",
    fontSize: "3.75rem",
    fontWeight: "300",
    lineHeight: "1.2",
    letterSpacing: "-0.00833em",
  };
  const h3_default = {
    name: "Heading 3",
    fontSize: "3rem",
    fontWeight: "400",
    lineHeight: "1.167",
    letterSpacing: "0em",
  };
  const h4_default = {
    name: "Heading 4",
    fontSize: "2.125rem",
    fontWeight: "400",
    lineHeight: "1.235",
    letterSpacing: "0.00735em",
  };
  const h5_default = {
    name: "Heading 5",
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "1.334",
    letterSpacing: "0em",
  };
  const h6_default = {
    name: "Heading 6",
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: "1.6",
    letterSpacing: "0.0075rem",
  };

  const body1_default = {
    name: "Body 1",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
  };
  const body2_default = {
    name: "Body 2",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
  };
  const Subtitle1_default = {
    name: "Subtitle 1",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.75",
    letterSpacing: "0.00938em",
  };
  const Subtitle2_default = {
    name: "Subtitle 2",
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "1.57",
    letterSpacing: "0.00714em",
  };
  const Button_default = {
    name: "Button",
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
  };
  const [h1fontSize, seth1fontSize] = useState(h1_default.fontSize);
  const [h1fontWeight, seth1fontWeight] = useState(h1_default.fontWeight);
  const [h1lineHeight, seth1lineHeight] = useState(h1_default.lineHeight);
  const [h1letterSpacing, seth1letterSpacing] = useState(
    h1_default.letterSpacing
  );
  const [h2fontSize, seth2fontSize] = useState(h2_default.fontSize);
  const [h2fontWeight, seth2fontWeight] = useState(h2_default.fontWeight);
  const [h2lineHeight, seth2lineHeight] = useState(h2_default.lineHeight);
  const [h2letterSpacing, seth2letterSpacing] = useState(
    h2_default.letterSpacing
  );
  const [h3fontSize, seth3fontSize] = useState(h3_default.fontSize);
  const [h3fontWeight, seth3fontWeight] = useState(h3_default.fontWeight);
  const [h3lineHeight, seth3lineHeight] = useState(h3_default.lineHeight);
  const [h3letterSpacing, seth3letterSpacing] = useState(
    h3_default.letterSpacing
  );
  const [h4fontSize, seth4fontSize] = useState(h4_default.fontSize);
  const [h4fontWeight, seth4fontWeight] = useState(h4_default.fontWeight);
  const [h4lineHeight, seth4lineHeight] = useState(h4_default.lineHeight);
  const [h4letterSpacing, seth4letterSpacing] = useState(
    h4_default.letterSpacing
  );
  const [h5fontSize, seth5fontSize] = useState(h5_default.fontSize);
  const [h5fontWeight, seth5fontWeight] = useState(h5_default.fontWeight);
  const [h5lineHeight, seth5lineHeight] = useState(h5_default.lineHeight);
  const [h5letterSpacing, seth5letterSpacing] = useState(
    h5_default.letterSpacing
  );
  const [h6fontSize, seth6fontSize] = useState(h6_default.fontSize);
  const [h6fontWeight, seth6fontWeight] = useState(h6_default.fontWeight);
  const [h6lineHeight, seth6lineHeight] = useState(h6_default.lineHeight);
  const [h6letterSpacing, seth6letterSpacing] = useState(
    h6_default.letterSpacing
  );
  const [body1fontSize, setbody1fontSize] = useState(body1_default.fontSize);
  const [body1fontWeight, setbody1fontWeight] = useState(
    body1_default.fontWeight
  );
  const [body1lineHeight, setbody1lineHeight] = useState(
    body1_default.lineHeight
  );
  const [body1letterSpacing, setbody1letterSpacing] = useState(
    body1_default.letterSpacing
  );

  const [body2fontSize, setbody2fontSize] = useState(body2_default.fontSize);
  const [body2fontWeight, setbody2fontWeight] = useState(
    body2_default.fontWeight
  );
  const [body2lineHeight, setbody2lineHeight] = useState(
    body2_default.lineHeight
  );
  const [body2letterSpacing, setbody2letterSpacing] = useState(
    body2_default.letterSpacing
  );
  const [Subtitle1fontSize, setSubtitle1fontSize] = useState(
    Subtitle1_default.fontSize
  );
  const [Subtitle1fontWeight, setSubtitle1fontWeight] = useState(
    Subtitle1_default.fontWeight
  );
  const [Subtitle1lineHeight, setSubtitle1lineHeight] = useState(
    Subtitle1_default.lineHeight
  );
  const [Subtitle1letterSpacing, setSubtitle1letterSpacing] = useState(
    Subtitle1_default.letterSpacing
  );

  const [Subtitle2fontSize, setSubtitle2fontSize] = useState(
    Subtitle2_default.fontSize
  );
  const [Subtitle2fontWeight, setSubtitle2fontWeight] = useState(
    Subtitle2_default.fontWeight
  );
  const [Subtitle2lineHeight, setSubtitle2lineHeight] = useState(
    Subtitle2_default.lineHeight
  );
  const [Subtitle2letterSpacing, setSubtitle2letterSpacing] = useState(
    Subtitle2_default.letterSpacing
  );

  const [ButtonfontSize, setButtonfontSize] = useState(Button_default.fontSize);
  const [ButtonfontWeight, setButtonfontWeight] = useState(
    Button_default.fontWeight
  );
  const [ButtonlineHeight, setButtonlineHeight] = useState(
    Button_default.lineHeight
  );
  const [ButtonletterSpacing, setButtonletterSpacing] = useState(
    Button_default.letterSpacing
  );

  const [h1fSize, seth1fSize] = useState("");
  const [h1fWeight, seth1fWeight] = useState("");
  const [h1lHeight, seth1lHeight] = useState("");
  const [h1lSpacing, seth1lSpacing] = useState("");
  const [h2fSize, seth2fSize] = useState("");
  const [h2fWeight, seth2fWeight] = useState("");
  const [h2lHeight, seth2lHeight] = useState("");
  const [h2lSpacing, seth2lSpacing] = useState("");
  const [h3fSize, seth3fSize] = useState("");
  const [h3fWeight, seth3fWeight] = useState("");
  const [h3lHeight, seth3lHeight] = useState("");
  const [h3lSpacing, seth3lSpacing] = useState("");
  const [h4fSize, seth4fSize] = useState("");
  const [h4fWeight, seth4fWeight] = useState("");
  const [h4lHeight, seth4lHeight] = useState("");
  const [h4lSpacing, seth4lSpacing] = useState("");
  const [h5fSize, seth5fSize] = useState("");
  const [h5fWeight, seth5fWeight] = useState("");
  const [h5lHeight, seth5lHeight] = useState("");
  const [h5lSpacing, seth5lSpacing] = useState("");
  const [h6fSize, seth6fSize] = useState("");
  const [h6fWeight, seth6fWeight] = useState("");
  const [h6lHeight, seth6lHeight] = useState("");
  const [h6lSpacing, seth6lSpacing] = useState("");
  const [body1fSize, setbody1fSize] = useState("");
  const [body1fWeight, setbody1fWeight] = useState("");
  const [body1lHeight, setbody1lHeight] = useState("");
  const [body1lSpacing, setbody1lSpacing] = useState("");
  const [body2fSize, setbody2fSize] = useState("");
  const [body2fWeight, setbody2fWeight] = useState("");
  const [body2lHeight, setbody2lHeight] = useState("");
  const [body2lSpacing, setbody2lSpacing] = useState("");
  const [Subtitle1fSize, setSubtitle1fSize] = useState("");
  const [Subtitle1fWeight, setSubtitle1fWeight] = useState("");
  const [Subtitle1lHeight, setSubtitle1lHeight] = useState("");
  const [Subtitle1lSpacing, setSubtitle1lSpacing] = useState("");
  const [Subtitle2fSize, setSubtitle2fSize] = useState("");
  const [Subtitle2fWeight, setSubtitle2fWeight] = useState("");
  const [Subtitle2lHeight, setSubtitle2lHeight] = useState("");
  const [Subtitle2lSpacing, setSubtitle2lSpacing] = useState("");
  const [ButtonfSize, setButtonfSize] = useState("");
  const [ButtonfWeight, setButtonfWeight] = useState("");
  const [ButtonlHeight, setButtonlHeight] = useState("");
  const [ButtonlSpacing, setButtonlSpacing] = useState("");

  function handleSubmitTy(e) {
    e.preventDefault();
    seth1fSize(h1fontSize);
    seth1fWeight(h1fontWeight);
    seth1lHeight(h1lineHeight);
    seth1lSpacing(h1letterSpacing);
    seth2fSize(h2fontSize);
    seth2fWeight(h2fontWeight);
    seth2lHeight(h2lineHeight);
    seth2lSpacing(h2letterSpacing);
    seth3fSize(h3fontSize);
    seth3fWeight(h3fontWeight);
    seth3lHeight(h3lineHeight);
    seth3lSpacing(h3letterSpacing);
    seth4fSize(h4fontSize);
    seth4fWeight(h4fontWeight);
    seth4lHeight(h4lineHeight);
    seth4lSpacing(h4letterSpacing);
    seth5fSize(h5fontSize);
    seth5fWeight(h5fontWeight);
    seth5lHeight(h5lineHeight);
    seth5lSpacing(h5letterSpacing);
    seth6fSize(h6fontSize);
    seth6fWeight(h6fontWeight);
    seth6lHeight(h6lineHeight);
    seth6lSpacing(h6letterSpacing);
    setbody1fSize(body1fontSize);
    setbody1fWeight(body1fontWeight);
    setbody1lHeight(body1lineHeight);
    setbody1lSpacing(body1letterSpacing);
    setbody2fSize(body2fontSize);
    setbody2fWeight(body2fontWeight);
    setbody2lHeight(body2lineHeight);
    setbody2lSpacing(body2letterSpacing);
    setSubtitle1fSize(Subtitle1fontSize);
    setSubtitle1fWeight(Subtitle1fontWeight);
    setSubtitle1lHeight(Subtitle1lineHeight);
    setSubtitle1lSpacing(Subtitle1letterSpacing);
    setSubtitle2fSize(Subtitle2fontSize);
    setSubtitle2fWeight(Subtitle2fontWeight);
    setSubtitle2lHeight(Subtitle2lineHeight);
    setSubtitle2lSpacing(Subtitle2letterSpacing);
    setButtonfSize(ButtonfontSize);
    setButtonfWeight(ButtonfontWeight);
    setButtonlHeight(ButtonlineHeight);
    setButtonlSpacing(ButtonletterSpacing);
  }

  function handleResetTy(e) {
    e.preventDefault();
    seth1fontSize(h1_default.fontSize);
    seth1fontWeight(h1_default.fontWeight);
    seth1lineHeight(h1_default.lineHeight);
    seth1letterSpacing(h1_default.letterSpacing);
    seth1fSize(h1fontSize);
    seth1fWeight(h1fontWeight);
    seth1lHeight(h1lineHeight);
    seth1lSpacing(h1letterSpacing);
    seth2fontSize(h2_default.fontSize);
    seth2fontWeight(h2_default.fontWeight);
    seth2lineHeight(h2_default.lineHeight);
    seth2letterSpacing(h2_default.letterSpacing);
    seth2fSize(h2fontSize);
    seth2fWeight(h2fontWeight);
    seth2lHeight(h2lineHeight);
    seth2lSpacing(h2letterSpacing);
    seth3fontSize(h3_default.fontSize);
    seth3fontWeight(h3_default.fontWeight);
    seth3lineHeight(h3_default.lineHeight);
    seth3letterSpacing(h3_default.letterSpacing);
    seth3fSize(h3fontSize);
    seth3fWeight(h3fontWeight);
    seth3lHeight(h3lineHeight);
    seth3lSpacing(h3letterSpacing);
    seth4fontSize(h4_default.fontSize);
    seth4fontWeight(h4_default.fontWeight);
    seth4lineHeight(h4_default.lineHeight);
    seth4letterSpacing(h4_default.letterSpacing);
    seth4fSize(h4fontSize);
    seth4fWeight(h4fontWeight);
    seth4lHeight(h4lineHeight);
    seth4lSpacing(h4letterSpacing);
    seth5fontSize(h5_default.fontSize);
    seth5fontWeight(h5_default.fontWeight);
    seth5lineHeight(h5_default.lineHeight);
    seth5letterSpacing(h5_default.letterSpacing);
    seth5fSize(h5fontSize);
    seth5fWeight(h5fontWeight);
    seth5lHeight(h5lineHeight);
    seth5lSpacing(h5letterSpacing);
    seth6fontSize(h6_default.fontSize);
    seth6fontWeight(h6_default.fontWeight);
    seth6lineHeight(h6_default.lineHeight);
    seth6letterSpacing(h6_default.letterSpacing);
    seth6fSize(h6fontSize);
    seth6fWeight(h6fontWeight);
    seth6lHeight(h6lineHeight);
    seth6lSpacing(h6letterSpacing);
    setbody1fontSize(body1_default.fontSize);
    setbody1fontWeight(body1_default.fontWeight);
    setbody1lineHeight(body1_default.lineHeight);
    setbody1letterSpacing(body1_default.letterSpacing);
    setbody1fSize(body1fontSize);
    setbody1fWeight(body1fontWeight);
    setbody1lHeight(body1lineHeight);
    setbody1lSpacing(body1letterSpacing);
    setbody2fontSize(body2_default.fontSize);
    setbody2fontWeight(body2_default.fontWeight);
    setbody2lineHeight(body2_default.lineHeight);
    setbody2letterSpacing(body2_default.letterSpacing);
    setbody2fSize(body2fontSize);
    setbody2fWeight(body2fontWeight);
    setbody2lHeight(body2lineHeight);
    setbody2lSpacing(body2letterSpacing);
    setSubtitle1fontSize(Subtitle1_default.fontSize);
    setSubtitle1fontWeight(Subtitle1_default.fontWeight);
    setSubtitle1lineHeight(Subtitle1_default.lineHeight);
    setSubtitle1letterSpacing(Subtitle1_default.letterSpacing);
    setSubtitle1fSize(Subtitle1fontSize);
    setSubtitle1fWeight(Subtitle1fontWeight);
    setSubtitle1lHeight(Subtitle1lineHeight);
    setSubtitle1lSpacing(Subtitle1letterSpacing);
    setSubtitle2fontSize(Subtitle2_default.fontSize);
    setSubtitle2fontWeight(Subtitle2_default.fontWeight);
    setSubtitle2lineHeight(Subtitle2_default.lineHeight);
    setSubtitle2letterSpacing(Subtitle2_default.letterSpacing);
    setSubtitle2fSize(Subtitle2fontSize);
    setSubtitle2fWeight(Subtitle2fontWeight);
    setSubtitle2lHeight(Subtitle2lineHeight);
    setSubtitle2lSpacing(Subtitle2letterSpacing);
    setButtonfontSize(Button_default.fontSize);
    setButtonfontWeight(Button_default.fontWeight);
    setButtonlineHeight(Button_default.lineHeight);
    setButtonletterSpacing(Button_default.letterSpacing);
    setButtonfSize(ButtonfontSize);
    setButtonfWeight(ButtonfontWeight);
    setButtonlHeight(ButtonlineHeight);
    setButtonlSpacing(ButtonletterSpacing);
  }

  theme1.typography.h1 = {
    fontSize: h1fSize,
    fontWeight: h1fWeight,
    lineHeight: h1lHeight,
    letterSpacing: h1lSpacing,
  };
  theme1.typography.h2 = {
    fontSize: h2fSize,
    fontWeight: h2fWeight,
    lineHeight: h2lHeight,
    letterSpacing: h2lSpacing,
  };

  theme1.typography.h3 = {
    fontSize: h3fSize,
    fontWeight: h3fWeight,
    lineHeight: h3lHeight,
    letterSpacing: h3lSpacing,
  };

  theme1.typography.h4 = {
    fontSize: h4fSize,
    fontWeight: h4fWeight,
    lineHeight: h4lHeight,
    letterSpacing: h4lSpacing,
  };
  theme1.typography.h5 = {
    fontSize: h5fSize,
    fontWeight: h5fWeight,
    lineHeight: h5lHeight,
    letterSpacing: h5lSpacing,
  };
  theme1.typography.h6 = {
    fontSize: h6fSize,
    fontWeight: h6fWeight,
    lineHeight: h6lHeight,
    letterSpacing: h6lSpacing,
  };

  theme1.typography.body1 = {
    fontSize: body1fSize,
    fontWeight: body1fWeight,
    lineHeight: body1lHeight,
    letterSpacing: body1lSpacing,
  };

  theme1.typography.body2 = {
    fontSize: body2fSize,
    fontWeight: body2fWeight,
    lineHeight: body2lHeight,
    letterSpacing: body2lSpacing,
  };

  theme1.typography.subtitle1 = {
    fontSize: Subtitle1fSize,
    fontWeight: Subtitle1fWeight,
    lineHeight: Subtitle1lHeight,
    letterSpacing: Subtitle1lSpacing,
  };

  theme1.typography.subtitle2 = {
    fontSize: Subtitle2fSize,
    fontWeight: Subtitle2fWeight,
    lineHeight: Subtitle2lHeight,
    letterSpacing: Subtitle2lSpacing,
  };

  theme1.typography.button = {
    fontSize: ButtonfSize,
    fontWeight: ButtonfWeight,
    lineHeight: ButtonlHeight,
    letterSpacing: ButtonlSpacing,
    textTransform: "uppercase",
  };

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
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Typography
                  </Typography>
                  <Divider />
                  <Typography sx={{ paddingTop: "20px" }}>
                    <TextField
                      id="selecting font"
                      label="Font Family"
                      variant="outlined"
                      defaultValue={`"Roboto","Helvetica","Arial",sans-serif`}
                      disabled
                      fullWidth
                    />
                  </Typography>
                  <List spacing={2}>
                    <form onSubmit={handleSubmitTy}>
                      <ListItemButton onClick={handleh1Click} spacing={2}>
                        <ListItemText>{h1_default.name}</ListItemText>
                        {openh1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openh1} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={h1fontSize}
                                value={h1fontSize}
                                onChange={(e) => seth1fontSize(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={h1fontWeight}
                                  onChange={(e) =>
                                    seth1fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={h1lineHeight}
                                value={h1lineHeight}
                                onChange={(e) =>
                                  seth1lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={h1letterSpacing}
                                value={h1letterSpacing}
                                onChange={(e) =>
                                  seth1letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handleh2Click} spacing={2}>
                        <ListItemText>{h2_default.name}</ListItemText>
                        {openh2 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openh2} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={h2fontSize}
                                value={h2fontSize}
                                onChange={(e) => seth2fontSize(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={h2fontWeight}
                                  onChange={(e) =>
                                    seth2fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={h2lineHeight}
                                value={h2lineHeight}
                                onChange={(e) =>
                                  seth2lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={h2letterSpacing}
                                value={h2letterSpacing}
                                onChange={(e) =>
                                  seth2letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handleh3Click} spacing={2}>
                        <ListItemText>{h3_default.name}</ListItemText>
                        {openh3 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openh3} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={h3fontSize}
                                value={h3fontSize}
                                onChange={(e) => seth3fontSize(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={h3fontWeight}
                                  onChange={(e) =>
                                    seth3fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={h3lineHeight}
                                value={h3lineHeight}
                                onChange={(e) =>
                                  seth3lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={h3letterSpacing}
                                value={h3letterSpacing}
                                onChange={(e) =>
                                  seth3letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handleh4Click} spacing={2}>
                        <ListItemText>{h4_default.name}</ListItemText>
                        {openh4 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openh4} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={h4fontSize}
                                value={h4fontSize}
                                onChange={(e) => seth4fontSize(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={h4fontWeight}
                                  onChange={(e) =>
                                    seth4fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={h4lineHeight}
                                value={h4lineHeight}
                                onChange={(e) =>
                                  seth4lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={h4letterSpacing}
                                value={h4letterSpacing}
                                onChange={(e) =>
                                  seth4letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handleh5Click} spacing={2}>
                        <ListItemText>{h5_default.name}</ListItemText>
                        {openh5 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openh5} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={h5fontSize}
                                value={h5fontSize}
                                onChange={(e) => seth5fontSize(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={h5fontWeight}
                                  onChange={(e) =>
                                    seth5fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={h5lineHeight}
                                value={h5lineHeight}
                                onChange={(e) =>
                                  seth5lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={h5letterSpacing}
                                value={h5letterSpacing}
                                onChange={(e) =>
                                  seth5letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handleh6Click} spacing={2}>
                        <ListItemText>{h6_default.name}</ListItemText>
                        {openh6 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openh6} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={h6fontSize}
                                value={h6fontSize}
                                onChange={(e) => seth6fontSize(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={h6fontWeight}
                                  onChange={(e) =>
                                    seth6fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={h6lineHeight}
                                value={h6lineHeight}
                                onChange={(e) =>
                                  seth6lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={h6letterSpacing}
                                value={h6letterSpacing}
                                onChange={(e) =>
                                  seth6letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handlebody1Click} spacing={2}>
                        <ListItemText>{body1_default.name}</ListItemText>
                        {openbody1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openbody1} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={body1fontSize}
                                value={body1fontSize}
                                onChange={(e) =>
                                  setbody1fontSize(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={body1fontWeight}
                                  onChange={(e) =>
                                    setbody1fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={body1lineHeight}
                                value={body1lineHeight}
                                onChange={(e) =>
                                  setbody1lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={body1letterSpacing}
                                value={body1letterSpacing}
                                onChange={(e) =>
                                  setbody1letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handlebody2Click} spacing={2}>
                        <ListItemText>{body2_default.name}</ListItemText>
                        {openbody2 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openbody2} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={body2fontSize}
                                value={body2fontSize}
                                onChange={(e) =>
                                  setbody2fontSize(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={body2fontWeight}
                                  onChange={(e) =>
                                    setbody2fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={body2lineHeight}
                                value={body2lineHeight}
                                onChange={(e) =>
                                  setbody2lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={body2letterSpacing}
                                value={body2letterSpacing}
                                onChange={(e) =>
                                  setbody2letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton
                        onClick={handlesubtitle1Click}
                        spacing={2}
                      >
                        <ListItemText>{Subtitle1_default.name}</ListItemText>
                        {opensubtitle1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={opensubtitle1} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={Subtitle1fontSize}
                                value={Subtitle1fontSize}
                                onChange={(e) =>
                                  setSubtitle1fontSize(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={Subtitle1fontWeight}
                                  onChange={(e) =>
                                    setSubtitle1fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={Subtitle1lineHeight}
                                value={Subtitle1lineHeight}
                                onChange={(e) =>
                                  setSubtitle1lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={Subtitle1letterSpacing}
                                value={Subtitle1letterSpacing}
                                onChange={(e) =>
                                  setSubtitle1letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton
                        onClick={handlesubtitle2Click}
                        spacing={2}
                      >
                        <ListItemText>{Subtitle2_default.name}</ListItemText>
                        {opensubtitle2 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={opensubtitle2} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={Subtitle2fontSize}
                                value={Subtitle2fontSize}
                                onChange={(e) =>
                                  setSubtitle2fontSize(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={Subtitle2fontWeight}
                                  onChange={(e) =>
                                    setSubtitle2fontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={Subtitle2lineHeight}
                                value={Subtitle2lineHeight}
                                onChange={(e) =>
                                  setSubtitle2lineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={Subtitle2letterSpacing}
                                value={Subtitle2letterSpacing}
                                onChange={(e) =>
                                  setSubtitle2letterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handlebuttonClick} spacing={2}>
                        <ListItemText>{Button_default.name}</ListItemText>
                        {openbutton ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openbutton} timeout="auto" unmountOnExit>
                        <List component="div">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Font Size"
                                variant="outlined"
                                defaultValue={ButtonfontSize}
                                value={ButtonfontSize}
                                onChange={(e) =>
                                  setButtonfontSize(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel id="font-weight-label">
                                  Font Weight
                                </InputLabel>
                                <Select
                                  labelId="font-weight-label"
                                  id="demo-simple-select"
                                  label="fontWeight"
                                  value={ButtonfontWeight}
                                  onChange={(e) =>
                                    setButtonfontWeight(e.target.value)
                                  }
                                >
                                  <MenuItem value={100}>100</MenuItem>
                                  <MenuItem value={200}>200</MenuItem>
                                  <MenuItem value={300}>300</MenuItem>
                                  <MenuItem value={400}>400</MenuItem>
                                  <MenuItem value={500}>500</MenuItem>
                                  <MenuItem value={600}>600</MenuItem>
                                  <MenuItem value={700}>700</MenuItem>
                                  <MenuItem value={800}>800</MenuItem>
                                  <MenuItem value={900}>900</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Line Height"
                                variant="outlined"
                                defaultValue={ButtonlineHeight}
                                value={ButtonlineHeight}
                                onChange={(e) =>
                                  setButtonlineHeight(e.target.value)
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                id="outlined-basic"
                                label="Letter Spacing"
                                variant="outlined"
                                defaultValue={ButtonletterSpacing}
                                value={ButtonletterSpacing}
                                onChange={(e) =>
                                  setButtonletterSpacing(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </List>
                      </Collapse>

                      <Button type="submit">Save</Button>
                      <Button onClick={handleResetTy} color="secondary">
                        Reset
                      </Button>
                    </form>
                  </List>
                </CardContent>
              </Card>

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
              <ThemeProvider theme={theme1}>
                <Card variant="outlined" sx={{ mb: "10px" }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Inputs
                    </Typography>
                    <DropDown />
                    <Typography sx={{ pt: "20px", pb: "20px" }}>
                      <TextInput />
                    </Typography>
                    <Stack direction="row">
                      <Typography sx={{ m: 1 }}>Switches</Typography>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="On"
                      />
                      <FormControlLabel control={<Switch />} label="Off" />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Typography sx={{ m: 1 }}>Loading Indicators</Typography>
                      <CircularLoading color="primary" />
                      <CircularLoading color="secondary" />
                      <CircularLoading color="grey" />
                    </Stack>
                    <Divider />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "700", pt: "20px", pb: "20px" }}
                    >
                      Headings
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="h1">h1</Typography>
                      <Typography variant="h2">h2</Typography>
                      <Typography variant="h3">h3</Typography>
                      <Typography variant="h4">h4</Typography>
                      <Typography variant="h5">h5</Typography>
                      <Typography variant="h6">h6</Typography>
                    </Stack>
                    <Divider />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "700", pt: "20px", pb: "20px" }}
                    >
                      Body Text
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="body1">
                        Body text comes in ranges 1-2,and it's typically used
                        for long-form writing as it works well for small text
                        sizes.For longer sections of text,a serif or sans serif
                        typeface is recommended.
                      </Typography>
                      <Typography variant="body2">
                        Body text comes in ranges 1-2,and it's typically used
                        for long-form writing as it works well for small text
                        sizes.For longer sections of text,a serif or sans serif
                        typeface is recommended.
                      </Typography>
                    </Stack>
                    <Divider />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "700", pt: "20px", pb: "20px" }}
                    >
                      Subtitle Text
                    </Typography>
                    <Stack direction="row" spacing={2} gutterBottom>
                      <Typography variant="body1">
                        Subtitles are smaller than headlines. They are typically
                        reserved for medium-emphasis text that is shorter in
                        length
                      </Typography>
                      <Typography variant="body2">
                        Subtitles are smaller than headlines. They are typically
                        reserved for medium-emphasis text that is shorter in
                        length
                      </Typography>
                    </Stack>
                  </CardContent>
                  <Divider />
                  <Stack direction="row" spacing={2} sx={{ pt: "20px" }}>
                    <Typography variant="button" display="block">
                      primary text button
                    </Typography>
                    <Typography
                      variant="button"
                      display="block"
                      color="secondary"
                    >
                      secondary text button
                    </Typography>
                  </Stack>
                </Card>
              </ThemeProvider>
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
