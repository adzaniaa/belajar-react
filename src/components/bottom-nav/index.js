import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Component() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        width: "100%",
        display: "flex",
        maxWidth: 450,
        positon: "fixed",
        bottom: 0,
        zIndex: 99
      }}
    >
      <BottomNavigationAction label="Beranda" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Pesanan" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Inbox" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Akun" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Akun" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default Component;
