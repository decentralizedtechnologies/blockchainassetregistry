import { Box, Button, Container, Grid, Paper, Theme, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { RouteComponentProps } from "react-router";
import { SidebarNavigation } from ".";
import { Dropzone, DropzonePreview, StepsSidebar, ToolbarPadding } from "../../../components";
import routes from "../../../routes";
import ls from "../../../utils/ls";
import { SidebarFooter } from "../../components";

interface IParams extends RouteComponentProps<{ id: string }> {
  classes: any;
}

export const Params = withStyles((theme: Theme) => ({}))(
  ({ classes, history, ...props }: IParams) => {
    const [name, setName] = React.useState(ls.get("eth", "erc20.name", ""));
    const [symbol, setSymbol] = React.useState(ls.get("eth", "erc20.symbol", ""));
    const [supply, setSupply] = React.useState(
      ls.get("eth", "erc20.supply", "1000000000000000000"),
    );

    const onSetName = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setName(e.target.value);
      ls.update("eth", { erc20: { name: e.target.value } });
    };

    const onSetSymbol = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSymbol(e.target.value);
      ls.update("eth", { erc20: { symbol: e.target.value } });
    };

    const onSetSupply = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const supply = Number(e.target.value);
      setSupply(e.target.value);
      ls.update("eth", { erc20: { supply: e.target.value } });
    };

    const onNext = () => {
      history.push(routes.eth.erc20.new.create);
    };

    const onAddFile = (file: any) => {
      return;
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          console.log(reader.result);
        } catch (error) {
          console.error(error);
        }
      };
      reader.readAsArrayBuffer(file);
    };

    return (
      <Box display="flex">
        <StepsSidebar footer={<SidebarFooter history={history} {...props} />}>
          <SidebarNavigation history={history} {...props} />
        </StepsSidebar>
        <Container maxWidth="xl">
          <ToolbarPadding />
          <Box mb={4}>
            <Paper elevation={1}>
              <Box p={2}>
                <Typography gutterBottom variant="body2">
                  Welcome to the easiest way of creating a digital certificate in the blockchain.
                </Typography>
                <Typography variant="body2">
                  During the creation process, the BAR will NOT store any sensitive data such as
                  private keys or personal information.
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box mb={4}>
            <Paper elevation={1}>
              <Box p={2}>
                <Typography gutterBottom>Step 1 · Upload and set data</Typography>
                <Box mt={4}>
                  <Box>
                    <Dropzone onAddFile={onAddFile} />
                  </Box>
                  <Box mt={2}>
                    <DropzonePreview />
                  </Box>
                </Box>
                <Box mt={4}></Box>
                <Box mt={4}>
                  <Grid container spacing={2} justify="flex-end">
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={onNext}>
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    );
  },
);
