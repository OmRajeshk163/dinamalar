import Slider from "react-slick";
import PropTypes from "prop-types";
import styles from "./carousel.module.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const SliderItem = ({ src = "", alt = " " }) => {
  return (
    <div className={styles.sliderItemWrap}>
      <Image
        loader={() => mySliderImgLoader(src)}
        alt={alt}
        src={src}
        layout="fill"
        objectFit="contain"
        className={styles.sliderItemImage}
      />
      <div style={{ position: "absolute", bottom: 10, left: "33%" }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "1.5rem", mb: 2, color: "#fff", fontWeight: 600 }}
        >
          Lorem Opium
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
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed,
    slidesToShow: 1.3,
    slidesToScroll: slidesToShow,
    prevArrow: customPrevArrow,
    nextArrow: customNextArrow,
    adaptiveHeight: false,
    responsive,
    arrow: true,
  };
  return (
    <div className={styles.imgGalleryContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: "#fff", fontWeight: 600 }}>
          Photo Gallery
        </Typography>
        <ArrowForwardIcon
          sx={{ fontSize: "2.5rem", color: "#fff", fontWeight: 600 }}
        />
      </Box>
      <Slider {...settings}>
        <SliderItem src="https://images.unsplash.com/photo-1665165154115-4a0515fd2347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
        <SliderItem src="https://images.unsplash.com/uploads/1413135232798a43d1442/79e54635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
        <SliderItem src="https://images.unsplash.com/photo-1665002931165-58406d38aaf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        <SliderItem src="https://images.unsplash.com/photo-1633494974123-c66ad1b1fc9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        <SliderItem src="https://images.unsplash.com/photo-1665165154115-4a0515fd2347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
      </Slider>
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
