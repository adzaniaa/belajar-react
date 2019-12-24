import React from "react";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import StarsIcon from "@material-ui/icons/Stars";
import { Grid, Typography } from "@material-ui/core";

function Component() {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid align="center" item xs={3}>
          <MotorcycleIcon
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoRide
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Component;
