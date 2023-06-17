import React, {  useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function Event(props) {
  const [readMore, setReadMore] = useState(false);
  const { event } = props;

  return (
    <Card className="shadow border" key={event.slug}>
    {/* <div className="card mb-3" > */}
      <div className="card-header py-3 text-success">
        <strong>{event.type}</strong>
        <strong >
          {" "}
          {event.location} {event.date} {event.time}{" "}
        </strong>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-2">
          <h4> {event.title}</h4>
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
                {`${!readMore ? "readMore" : "readLess"}`}
              </h6>
            </Button>
            <div className="read-more pt-4">{readMore && event.information}</div>
          </div>
          <footer className="blockquote-footer">
            {event.informationSource}
            <cite title="Source Title"> {event.reference}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    </Card >
  );
}
export default Event;
