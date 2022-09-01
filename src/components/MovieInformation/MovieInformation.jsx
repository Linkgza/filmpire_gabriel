import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, UseMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { useStyles } from './styles';
import { useGetMoviesQuery } from '../../services/TMDB';

function MovieInformation() {
  const { data, isFetching, error } = useGetMoviesQuery(id);
  const { id } = useParams();
  const classes = useStyles();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }

  return (
    <div>
      <Grid container className={classes.cointainerSpaceAround}>
        <Grid item sm={12} lg={4}>
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MovieInformation;
