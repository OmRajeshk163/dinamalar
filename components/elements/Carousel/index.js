import Slider from "react-slick";
import PropTypes from "prop-types";
import styles from "./carousel.module.css";
import Image from "next/image";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Arrow = ({ className, onClick, type }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ color: "black", fontSize: "1rem" }}
    >
      {type === "prev" ? "\u21D0" : "\u21D2"}
    </div>
  );
};
const mySliderImgLoader = (src) => src;

const SliderItem = ({ src = "", alt = " ", title = "" }) => {
  return (
    <div className={styles.sliderItemWrap}>
      <Image
        // loader={() => mySliderImgLoader(src)}
        alt={alt}
        src={src}
        layout="fill"
        objectFit="contain"
        unoptimized={true}
        className={styles.sliderItemImage}
      />
      <div style={{ position: "absolute", bottom: 10, left: "50%" }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "1.2rem", mb: 2, color: "#fff", fontWeight: 600 }}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};
const Carousel = ({
  contentList,
  customPrevArrow,
  customNextArrow,
  slidesToShow,
  speed,
  dots,
  adaptiveHeight,
  responsive,
  photoitems,
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    prevArrow: customPrevArrow,
    nextArrow: customNextArrow,
    adaptiveHeight: false,
    responsive,
    arrow: true,
  };
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // backgroundColor: "var(--primary)",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={styles.imgGalleryContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 0.5,
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mt: 2, mb: 1, color: "var(--primary)", fontWeight: 600 }}
        >
          Photo Gallery
        </Typography>
        <ArrowForwardIcon
          sx={{ fontSize: "2.5rem", color: "#fff", fontWeight: 600 }}
        />
      </Box>
      {photoitems ? (
        photoitems.length > 0 && (
          <Item>
            <Slider {...settings}>
              {photoitems.map((photo, index) => (
                <SliderItem
                  key={index}
                  // src="https://images.unsplash.com/photo-1665331626213-8eb051094b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  src={photo.image}
                  title={photo.text}
                />
              ))}
            </Slider>
          </Item>
        )
      ) : (
        <Slider {...settings}>
          <SliderItem src="https://images.unsplash.com/photo-1665331626213-8eb051094b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          <SliderItem src="https://images.unsplash.com/uploads/1413135232798a43d1442/79e54635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          <SliderItem src="https://images.unsplash.com/photo-1665002931165-58406d38aaf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          <SliderItem src="https://images.unsplash.com/photo-1633494974123-c66ad1b1fc9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          <SliderItem src="https://images.unsplash.com/photo-1560517961-1cdc66f62d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
        </Slider>
      )}
    </div>
  );
};

Carousel.propTypes = {
  contentList: PropTypes.array.isRequired,
  slidesToShow: PropTypes.number,
  speed: PropTypes.number,
  adaptiveHeight: PropTypes.bool,
  responsive: PropTypes.array,
  customPrevArrow: PropTypes.object,
  customNextArrow: PropTypes.object,
  dots: PropTypes.bool,
};

Carousel.defaultProps = {
  // customPrevArrow: <Arrow type="prev" />,
  // customNextArrow: <Arrow type="next" />,
  slidesToShow: 1,
  speed: 500,
  adaptiveHeight: false,
  dots: true,
  contentList: [],
};

export default Carousel;
