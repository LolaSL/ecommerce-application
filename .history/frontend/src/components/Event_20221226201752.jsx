import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";


function Event(props) {
  const [readMore, setReadMore] = useState(false);
  const { event } = props;

  return (
    <Card className="shadow border"></Card>
    <div className="card mb-3" key={slug}>
      <div className="card-header py-3">
        <strong>{type}</strong>
        <strong>
          {" "}
          {location} {date} {time}{" "}
        </strong>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-2">
          <h4> {title}</h4>
          <div className="events">
            <img
              className="card-img-top rounded position-unset"
              src={imageUrl}
              alt={imageUrl}
            />
            <Button
              type="button"
              className="btn btn-secondary"
              onClick={() => setReadMore(!readMore)}
            >
              <h6>
                {" "}
                {`${!readMore ? "readMore" : "readLess"}`}
              </h6>
            </Button>
            <div className="read-more">{readMore && information}</div>
          </div>
          <footer className="blockquote-footer">
            {informationSource}
            <cite title="Source Title"> {reference}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
export default Event;