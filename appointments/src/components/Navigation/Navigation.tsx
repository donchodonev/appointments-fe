import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getCompanyName, getFirstName, userExists } from "../../utils/userUtils";
import { IMsalContext } from "@azure/msal-react";

const Navigation: React.FC<{ msalContext: IMsalContext }> = (props) => {
  const { msalContext } = props;

  const isLoggedIn = userExists(msalContext);
  const firstName = getFirstName(msalContext);
  const companyName = getCompanyName(msalContext);

  return (
    <Box>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {companyName
              ?
              companyName
              : firstName
                ? `Hi, ${firstName}`
                : ""}
          </Typography>
          {!isLoggedIn && (
            <Button variant="outlined" color="inherit">
              <Link to="/login">Sign-up / Sign-in</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
