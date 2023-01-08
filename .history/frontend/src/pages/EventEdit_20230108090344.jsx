import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Store } from "../Store";
import { getError } from "../utils";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Button from "react-bootstrap/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "UPDATE_ERROR":
      return { ...state, loadingUpdate: false };
    case "UPLOAD_REQUEST":
      return { ...state, loadingUpload: true, errorUpload: "" };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        loadingUpload: false,
        errorUpload: "",
      };
    case "UPLOAD_ERROR":
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
};
const EventEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id: eventId } = params;
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [information, setInformation] = useState("");
  const [informationSource, setInformationSource] = useState("");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/events/${eventId}`);
        setSlug(data.slug);
        setTitle(data.title);
        setType(data.type);
        setImage(data.image);
        setImages(data.images);
        setInformation(data.information);
        setInformationSource(data.informationSource);
        setReference(data.reference);
        setDate(data.date);
        setTime(data.time);
        setLocation(data.location);
        setLanguage(data.language);
        dispatch({ type: "FETCH_SUCCESS" });
      } catch (err) {
        dispatch({
          type: "FETCH_ERROR",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [eventId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      await axios.put(
        `/api/events/${eventId}`,
        {
          _id: eventId,
          slug,
          title,
          type,
          image,
          images,
        
          informationSource,
          reference,
          date,
          time,
          location,
          language,  information,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: "UPDATE_SUCCESS",
      });
      toast.success("Event updated successfully");
      navigate("/admin/events");
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: "UPDATE_ERROR" });
    }
  };
  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const { data } = await axios.post("/api/upload", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: "UPLOAD_SUCCESS" });

      if (forImages) {
        setImages([...images, data.secure_url]);
      } else {
        setImage(data.secure_url);
      }
      toast.success("Image uploaded successfully. Click to update, please");
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: "UPLOAD_ERROR", payload: getError(err) });
    }
  };
  return (
    <Container className="small-container">
      <Helmet>
        <title>Edit Event ${eventId}</title>
      </Helmet>
      <h1>Edit Event {eventId}</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="slug">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image File</Form.Label>
            <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageFile">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={uploadFileHandler} />
            {loadingUpload && <Loader></Loader>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="information">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={information}
              onChange={(e) => setInformation(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="informationSource">
            <Form.Label>InformationSource</Form.Label>
            <Form.Control
              value={informationSource}
              onChange={(e) => setInformationSource(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="reference">
            <Form.Label>Reference</Form.Label>
            <Form.Control
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="language">
            <Form.Label>Language</Form.Label>
            <Form.Control
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button disabled={loadingUpdate} type="submit">
              Update
            </Button>
            {loadingUpdate && <Loader></Loader>}
          </div>
        </Form>
      )}
    </Container>
  );
};

export default EventEdit;
