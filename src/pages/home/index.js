import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Logo from "../../instrument/gojek.png";
import Card from "@material-ui/core/Card";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import Category from "../../components/category";

function Component() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xs"
        style={{ padding: 0, backgroundColor: "#fff", height: "100vh" }}
      >
        <AppBar position="static" style={{ backgroundColor: "#fff" }}>
          <Grid container spacing={0} style={{ padding: 10 }}>
            <Grid item xs={6}>
              <img src={Logo} style={{ width: 75 }} />
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Grid style={{ color: "#FAAF19" }}>
                <LocalOfferIcon />
              </Grid>
              <Typography
                variant="caption"
                gutterBottom
                style={{ color: "#000" }}
              >
                Promo
              </Typography>
            </Grid>
          </Grid>
        </AppBar>

        <div style={{ padding: 10 }}>
          <Card>
            <Grid
              container
              spacing={0}
              style={{ backgroundColor: "#3064BB", padding: 10 }}
            >
              <Grid
                item
                xs={6}
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "flex-start"
                }}
              >
                <AccountBalanceWalletRoundedIcon />
                <Grid>
                  <Typography variant="caption" gutterBottom>
                    gopay
                  </Typography>
                </Grid>
              </Grid>
              <Grid align="right" item xs={6}>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#fff", padding: 5 }}
                >
                  Rp999
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              style={{ backgroundColor: "#2A5EB5", padding: 20 }}
            >
              <Grid align="left" item xs={3} style={{ color: "#fff" }}>
                <Grid>
                  <OpenInBrowserIcon />
                </Grid>
                <Typography variant="caption" gutterBottom>
                  Bayar
                </Typography>
              </Grid>
              <Grid item xs={3} style={{ color: "#fff" }}>
                <Grid>
                  <OpenInBrowserIcon />
                </Grid>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ padding: 10 }}
                >
                  Promo
                </Typography>
              </Grid>
              <Grid align="center" item xs={3} style={{ color: "#fff" }}>
                <Grid>
                  <OpenInBrowserIcon />
                </Grid>
                <Typography variant="caption" gutterBottom>
                  Isi Saldo
                </Typography>
              </Grid>
              <Grid align="right" item xs={3} style={{ color: "#fff" }}>
                <Grid>
                  <OpenInBrowserIcon />
                </Grid>
                <Typography variant="caption" gutterBottom>
                  Lainnya
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div style={{ padding: 10 }}>
          <Category />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Component;
