import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  makeStyles ,
} from "@mui/material";
import * as React from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function Erorpage() {
  return (
    <Container  maxWidth="sm" sx={{marginTop: 20}} >
      <Card sx={{ minWidth: 275 , width: 320,
        height: 300
        }}>
        <CardContent>
          <Typography
            variant="h2"
            color="error"
          >
            404
          </Typography>
          <Typography variant="h4" color="error" sx={{ marginBottom: 2 }}>
            Page Not found!
          </Typography>
          <Typography variant="body2">
            looks Like you've followed a broken link or entered a URL that
            doesn't exist on this site
          </Typography>
          <CardActions>
            {/* <Button startIcon={<ArrowBackIcon />}></Button> */}
          <Link to="/" sx={{}}>Go Back to our site  </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Erorpage;
