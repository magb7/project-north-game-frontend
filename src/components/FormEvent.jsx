import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import FormTitleStyle from './ui/FormTitle';
import Form from './ui/FormPost';
import Input from './ui/FormInput';
import InputContent from './ui/FormContent';
import InputBtn from './ui/FormInputBtn';
import 'react-toastify/dist/ReactToastify.css';

const FormEvent = ({ openBtnEvent, setOpenBtnEvent }) => {
  const [events, setEvents] = useState({});
  const NewsChange = (e) => {
    const tmp = { ...events, [e.target.name]: e.target.value };
    setEvents(tmp);
  };
  const error = () => toast.error('oups il y a une erreur');
  const notify = () => toast.dark('ton event a bien été posté!');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/events`, events)
      .then(notify)
      .then(setOpenBtnEvent(!openBtnEvent))
      .catch(error);
  };
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: '30px', textAlign: 'center' }}
      />
      {openBtnEvent && (
        <>
          <FormTitleStyle>Ajoutes ton events</FormTitleStyle>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Input
              type="text"
              name="author"
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Auteur"
            />
            <Input
              type="text"
              name="event_date"
              required
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Date de l'events au format AAAA/MM/JJ HH:MM:SS"
            />
            <InputContent
              type="text"
              name="adress"
              required
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Adresse"
            />
            <Input
              type="text"
              name="title"
              required
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Titre"
            />
            <Input
              type="text"
              name="picture_url"
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="url de ton image"
            />
            <InputContent
              type="text"
              name="description"
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Décris l'event"
            />
            <Input
              type="number"
              name="is_published"
              required
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="inscris 1 si publiée ou 0 si non publiée"
            />
            <Input
              type="text"
              name="release_date"
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Date de libération au format AAAA/MM/JJ HH:MM:SS"
            />
            <Input
              type="text"
              name="event_latitude"
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Latitude"
            />
            <Input
              type="text"
              name="event_longitude"
              onChange={(e) => {
                NewsChange(e);
              }}
              placeholder="Longitude"
            />
            <InputBtn type="submit" value="poster" />
          </Form>
        </>
      )}
    </div>
  );
};
FormEvent.propTypes = {
  openBtnEvent: PropTypes.bool,
  setOpenBtnEvent: PropTypes.bool,
};
FormEvent.defaultProps = {
  openBtnEvent: false,
  setOpenBtnEvent: true,
};
export default FormEvent;
