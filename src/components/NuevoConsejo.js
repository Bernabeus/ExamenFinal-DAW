import Container from "@material-ui/core/Container";
import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from "react";
import api from "../api/index";


const ConsejoN = () => {
  const [tip, setTip] = useState([]);
  const [tipF, setTipF] = useState([]);
  const tipid = useState(0);

  async function datos() {
    try {
      const res = await api.get("/advice");
      setTip(res.data.slip);
    } catch (e) {}
  };

  useEffect(() => {
    datos();
  }, []);

  async function tipFavoriteNext() {
    setTipF((prevState) => {
      const newTip = tip
      return [...prevState, newTip];
  });
  };

  async function tipRemove(tipR) {
    setTipF((prevState) => {
      const newTip = prevState;
      for (var i = 0; i < newTip.length; i++) {
        if (newTip[i] === tipR) {
          newTip.splice(i, 1);
        }
      }
      return [...newTip];
    });
  }

  const handleFavorite = () => {
    tipFavoriteNext();
    console.log(tipF);
  };

  const handleRemove = (tipId) => {
    tipRemove(tipId);
    console.log(tipF);
  };

  const handleNext = () => {
    datos();
  };

  return (
    <Container>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <Box>
          <Grid item xs={12}>
        <Box>
          <h1>Consejo del día</h1>
          
            <Grid md={12}>
              <Grid item xs={12} md={12}>
                <p>{tip.advice}</p>
              </Grid>
            </Grid>
         
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFavorite}
              >
                Marcar como favorito
              </Button>
            </Grid>
            <Grid item xs={6} md={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                //startIcon={<SearchIcon />}
              >
                Siguiente consejo
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
          <h1>Consejos favoritos</h1>
            <Grid container spacing={2}>
            {tipF.map((consejo) => (
              <Grid  container spacing={3} key={consejo.id}>
                <Grid item xs={6} md={8}>
                <p>{consejo.advice}</p>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>handleRemove(consejo)}
                  >
                    Quitar de la lista
                  </Button>
                </Grid>
              </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ConsejoN;
