import React from 'react';
import styled from 'styled-components';
import TitleStyle from '../components/ui/Title';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import Geolocation from '../components/Geolocation';

const DashboardWrapper = styled.div`
  width: 50vw;
  height: 100%;
  padding: 15px;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <TitleStyle>Actu à la une</TitleStyle>
      <NewsCard />
      <TitleStyle>Autour de moi</TitleStyle>
      <Geolocation />
      <EventCard />
      <p>Dashboard Page</p>
    </DashboardWrapper>
  );
};

export default Dashboard;
