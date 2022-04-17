import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
} from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";
// import ArticleIcon from "@mui/icons-material/Article";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import Image from "../Images/image1.jpg";
// importing components of articles

import articleCard from "../components/article/cards";

const useStyles = makeStyles({
  tabsBox: {
    justifyContent: "center",
  },
  articleBody: {
    backgroundColor: "whitesmoke",
    marginTop: 50,
  },
});

// Grid Cards

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = makeStyles({
    maindiv: {
      marginTop: 20,
    },
  });
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Articles() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div className={classes.articleBody}>
      <Container>
        <Box>
          <Typography
            variant="h4"
            color="#06ba00"
            sx={{ fontWeight: "500", paddingTop: 5 }}
          >
            Articles <ArticleOutlinedIcon fontSize="large" />
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Example One" {...a11yProps(1)} />
              <Tab label="Example Two" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Islamic Image"
                      height="200"
                      image={Image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Tittle
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Some Discription About Article
                      </Typography>
                    </CardContent>
                    <CardActions spacing={2}>
                      <Button size="small"> Read More </Button>
                      <Button size="small"> Download / Share</Button>
                    </CardActions>
                  </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Adding card in artcile */}

            <Grid container spacing={2} xs={4} md={6}>
              <Grid item>
                <Item>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Islamic Image"
                      height="200"
                      image={Image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Tittle
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Some Discription About Article
                      </Typography>
                    </CardContent>
                    <CardActions spacing={2}>
                      <Button size="small"> Read More </Button>
                      <Button size="small"> Download / Share</Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
              <Grid item>
                <Item>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="Islamic Image"
                      height="140"
                      image={Image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Tittle
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Some Discription About Article
                      </Typography>
                    </CardContent>
                    <CardActions spacing={2}>
                      <Button size="small"> Read More </Button>
                      <Button size="small"> Download / Share</Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
              <Grid item>
                <Item>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="Islamic Image"
                      height="140"
                      image={Image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Tittle
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Some Discription About Article
                      </Typography>
                    </CardContent>
                    <CardActions spacing={2}>
                      <Button size="small"> Read More </Button>
                      <Button size="small"> Download / Share</Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
              <Grid item>
                <Item>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="Islamic Image"
                      height="140"
                      image={Image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Tittle
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Some Discription About Article
                      </Typography>
                    </CardContent>
                    <CardActions spacing={2}>
                      <Button size="small"> Read More </Button>
                      <Button size="small"> Download / Share</Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Example Two
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}
export default Articles;
