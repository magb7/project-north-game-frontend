import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../conf';

const NewsPageContainer = styled.div`
  height: 100vh;
  display: grid;
  justify-items: center;
`;

const TitleOneNews = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
`;

const ImageNews = styled.img`
  object-fit: cover;
  width: 50vw;
  height: 50vh;
  border-radius: 5px;
`;
export default function NewsPage() {
  const dispatch = useDispatch();
  const oneNews = useSelector((state) => state.oneNewsReducer.oneNews);
  const { id } = useParams();

  const getOneNews = () => {
    axios.get(`${backend}/news/${id}`).then(({ data }) => {
      dispatch({
        type: 'GET_ONE_NEWS',
        data,
      });
    });
  };

  useEffect(() => {
    getOneNews();
  }, [dispatch]);

  return (
    <NewsPageContainer>
      <TitleOneNews>{oneNews.title}</TitleOneNews>
      <p>
        written by
        <span>{oneNews.author} </span>
        {oneNews.creationDate}
      </p>
      <ImageNews src={oneNews.pictureUrl} alt={oneNews.title} />
      <p>{oneNews.content}</p>
    </NewsPageContainer>
  );
}
