import React, { useReducer, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Event from '../components/Event';
import axios from "axios";
import logger from "use-reducer-logger";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import Message from "../components/Message";

const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, eventsList: action.payload, loading: false };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

function Events() {

    const [{ loading, error, eventsList }, dispatch] = useReducer(
        logger(reducer),
        {
          eventsList: [],
          loading: true,
          error: "",
        }
      );
      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const result = await axios.get("/api/events");
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          } catch (error) {
            dispatch({ type: "FETCH_ERROR", payload: error.message });
          }
        };
        fetchData();
      }, []);



    


    return (
        <div></div>
    )

export default Event;