import { Box, Grid, Theme, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { routes } from "../../routes";
import { styles } from "../../theme";

interface ISidebarFooterProps extends RouteComponentProps<{ id: string }> {
  classes: any;
}

export const SidebarFooter = withStyles((theme: Theme) => ({
  ...styles(theme),
}))(({ classes, history, match }: ISidebarFooterProps) => {
  return (
    <Box px={3} minHeight="10vh" display="flex" flexDirection="column" justifyContent="center">
      <Grid container>
        <Grid item lg={10}>
          <Typography variant="body2">
            <Link to={routes.root} className={classes.sidebarNavigationLink}>
              Search
            </Link>
          </Typography>
        </Grid>
        <Grid item lg={2}>
          <Box textAlign="right">
            <a
              href="https://github.com/decentralizedtechnologies/simpleico"
              target="_blank"
              rel="nofollow"
              className={classes.sidebarNavigationLink}
            >
              <GitHubIcon fontSize="small" color="inherit" />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});
