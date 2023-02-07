import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Box, Toolbar, Typography } from "@mui/material";
import { AccountInfo } from "@azure/msal-browser";

const Navigation: React.FC<{ accounts: AccountInfo[] }> = (props) => {
  const { accounts } = props;
  const isLoggedIn = accounts.length !== 0;
  const firstName = isLoggedIn ? accounts[0].name?.split(" ")[0] : "";

  return (
    <Box>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {firstName ? `Hi, ${firstName}` : "Welcome"}
          </Typography>
          {!isLoggedIn && (
            <>
              <Button variant="outlined" color="inherit" href="/login">
                Login
              </Button><Button variant="outlined" color="inherit" href="/provider-login">
                Provider Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
