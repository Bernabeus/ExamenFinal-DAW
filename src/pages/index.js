import Container from "@material-ui/core/Container";
import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ConsejoNuevo from "../components/NuevoConsejo";
import ConsejoB from "../components/BuscadorConsejo";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
      <ConsejoNuevo />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
          <ConsejoB />
          </Box>
        </Grid>
      </Grid>

    </Container>
  );
}
