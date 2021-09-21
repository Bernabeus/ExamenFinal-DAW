import Container from "@material-ui/core/Container";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

const ConsejoB = () => {
  
  const  [busq, setBusq] = useState([]);


  const handleSearch = () => {};
  const handleFavorite = () => {
  };

  useEffect(() => {
    
    
  }, []);


  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <h1>Buscador de consejos</h1>
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <p>Palabra clave:</p>
          </Grid>
          <Grid item xs={6} md={2}>
            <input type="text" size="50" name="busqueda"></input>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Buscar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <h2>Resultados de la búsqueda</h2>
        </Grid>
        <Grid container spacing={2}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={8}>
              <p>DSADA</p>
            </Grid>
            <Grid item xs={6} md={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFavorite}
              >
                Marcar como favorito
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ConsejoB;
