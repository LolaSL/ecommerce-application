import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { Store } from "../Store";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getError } from "../utils";
import Container from "react-bootstrap/Container";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        events: action.payload.events,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreate: true };
    case "CREATE_SUCCESS":
      return {
        ...state,
        loadingCreate: false,
      };
    case "CREATE_ERROR":
      return { ...state, loadingCreate: false };

    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true, successDelete: false };
    case "DELETE_SUCCESS":
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case "DELETE_ERROR":
      return { ...state, loadingDelete: false, successDelete: false };

    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

const EventList = () => {
  const [
    {
      loading,
      error,
      events,
      pages,
      loadingCreate,
      loadingDelete,
      successDelete,
    },
    dispatch,
  ] = useReducer(reducer, {
    events: {},
    loading: true,
    error: "",
  });

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get("page") || 1;

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/events/admin?page=${page} `, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {}
    };

    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const createHandler = async () => {
    if (window.confirm("Are you sure to create?")) {
      try {
        dispatch({ type: "CREATE_REQUEST" });
        const { data } = await axios.post(
          "/api/events",
          {},
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        toast.success("Event created successfully");
        dispatch({ type: "CREATE_SUCCESS" });
        navigate(`/admin/event/${data.event._id}`);
      } catch (err) {
        toast.error(getError(error));
        dispatch({
          type: "CREATE_FAIL",
        });
      }
    }
  };

  const deleteHandler = async (event) => {
    if (window.confirm("Are you sure to delete?")) {
      try {
        await axios.delete(`/api/events/${event._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success("event deleted successfully");
        dispatch({ type: "DELETE_SUCCESS" });
      } catch (err) {
        toast.error(getError(error));
        dispatch({
          type: "DELETE_FAIL",
        });
      }
    }
  };

  return (
    <div>
      <Container className="middle-container">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Events</h1>
          </Col>
          <Col className="col text-end">
            <div>
              <Button type="button" onClick={createHandler}>
                Create Event
              </Button>
            </div>
          </Col>
        </Row>

        {loadingCreate && <Loader></Loader>}
        {loadingDelete && <Loader></Loader>}

        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>SLUG</th>
                  <th>TITLE</th>
                  <th>TYPE</th>
                  <th>INFORMATION</th>
                  <th>INFORMATION SOURCE</th>
                  <th>REFERENCE</th>
                  <th>DATE</th>
                  <th>TIME</th>
                  <th>LOCATION</th>
                  <th>LANGUAGE</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event._id}>
                    <td>{event._id}</td>
                    <td>{event.slug}</td>
                    <td>{event.title}</td>
                    <td>{event.type}</td>
                    <td>{event.information}</td>
                    <td>{event.informationSource}</td>
                    <td>{event.reference}</td>
                    <td>{event.date}</td>
                    <td>{event.tile}</td>
                    <td>{event.location}</td>
                    <td>{event.language}</td>
                    <td>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => navigate(`/admin/event/${event._id}`)}
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => deleteHandler(event)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              {[...Array(pages).keys()].map((x) => (
                <Link
                  className={x + 1 === Number(page) ? "btn text-bold" : "btn"}
                  key={x + 1}
                  to={`/admin/events?page=${x + 1}`}
                >
                  {x + 1}
                </Link>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default EventList;
