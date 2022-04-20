import * as React from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useTabPanel,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// importing Image
import Image from "../Images/image1.jpg";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  Links: {
    textDecoration: "none",
  },
});

const Articles = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ marginTop: 10 }}>
        <Grid
          container
          spacing={{ xs: 4, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sm={4} md={4}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Image}
                    alt="image"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'right'}}>
                         قرباني جانوروں کا ضیاع نہیں بلکہ باعث نجات ہے
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Itaque aut sit, ullam reiciendis mollitia alias, enim sint
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to="/Articles/Article" className={classes.Links}>
                    <Button size="medium" color="primary">
                      Read More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Articles;
