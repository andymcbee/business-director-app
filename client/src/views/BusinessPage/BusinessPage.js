import React from "react";
import { Grid } from "@material-ui/core";

export default function BusinessPage() {
  return (
    <Grid
      className="businessPageMainGrid"
      container
      align-items="stretch"
      spacing={3}
    >
      <Grid cs={12} sm={12} md={8} lg={10} item>
        test
      </Grid>
      <Grid cs={12} sm={12} md={2} lg={2} item>
        test
      </Grid>
    </Grid>
  );
}
