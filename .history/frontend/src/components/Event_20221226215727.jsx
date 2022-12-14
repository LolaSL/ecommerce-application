import React, {  useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function Event(props) {
  const [readMore, setReadMore] = useState(false);
  const { event } = props;

  return (
    <Card className="shadow border card mb-3" key={event.slug}>
    
      <div className="vcard-header py-3">
        <strong>{event.type}</strong>
        <strong >
          {" "}
          {event.location} {event.date} {event.time}{" "}
        </strong>
      </span>
      <div className="card-body">
        <blockquote className="blockquote mb-2">
          <h4 className="mb-3"> {event.title}</h4>
          <div className="events">
            <img
              className="card-img-top rounded"
              src={event.image}
              alt={event.informationSource}
            />
            <Button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={() => setReadMore(!readMore)}
            >
              <h6>
                {" "}
                {`${!readMore ? "Read More" : "Read Less"}`}
              </h6>
            </Button>
            <div className="read-more pt-4">{readMore && event.information}</div>
          </div>
          <footer className="blockquote-footer pt-4">
            {event.informationSource}
            <cite title="Source Title"> {event.reference}</cite>
          </footer>
        </blockquote>
      </div>
    </Card >
  );
}
export default Event;
