import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://i.imgur.com/OypdbZN.png',
      title: 'Special events masks',
      width: '40%',
    },
    {
      url:
        'https://i.imgur.com/2cDAU18.png',
      title: 'High-tech',
      width: '20%',
    },
    {
      url:
        'https://cdn.shopify.com/s/files/1/1773/4523/products/Inlighten-Mask-Close-up_1024x1024.png?v=1578514905',
      title: 'Video production mask',
      width: '40%',
    },
    {
      url:
        'https://i.pinimg.com/564x/25/f2/21/25f221e15e2bb085425275c51df6ee5b.jpg',
      title: 'Neon-theme',
      width: '38%',
    },
    {
      url:
        'https://i.pinimg.com/originals/2f/0b/3d/2f0b3d610f3063f614c615eda2c13e18.jpg',
      title: 'Alan Walker mask',
      width: '38%',
    },
    {
      url:
        'https://i.imgur.com/hYyI90v.png',
      title: 'Custom tailored',
      width: '24%',
    },
    {
      url:
        'https://i.pinimg.com/originals/99/d6/11/99d611f3bad3f6551e24bfcb855a9013.png',
      title: '100 patterns available',
      width: '40%',
    },
    {
      url:
        'https://live.staticflickr.com/7232/7285444398_f5d8d32e69.jpg',
      title: 'Proffessional sewing',
      width: '20%',
    },
    {
      url:
        'https://cdn.shopify.com/s/files/1/0027/1705/7093/products/LED-Light-Up-Rave-Mask-AIGO2C_15_1024x1024.jpg?v=1568439640',
      title: 'Fully customisable',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        All our products are hand-made!
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
