import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";
import { Box, Toolbar, Typography } from "@mui/material";

const Navigation: React.FC = () => {
  const { accounts } = useMsal();
  const firstName = accounts[0]?.name?.split(" ")[0];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {firstName ? `Hi, ${firstName}` : "Welcome"}
          </Typography>
          {!firstName && (
            <Button variant="outlined" color="inherit" href="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
