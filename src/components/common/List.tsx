import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

interface Props {
  listArr: any;
  keyword: string;
}

const List: React.FC<Props> = ({ listArr, keyword }) => (
  <Swiper
    navigation
    spaceBetween={50}
    slidesPerView={4}
  >
    {listArr.data.results.map((result: any, i: number) => (
      <SwiperSlide key={i}>
        <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt="contentsImg" />
        <Link to={`/${keyword}/${result.id}`}>
          {keyword === 'movie' ? result.title : result.name}
        </Link>
        <div>{result.vote_average}</div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default List; 