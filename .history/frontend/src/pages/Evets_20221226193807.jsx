import React, { useReducer, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Event from '../components/Event';
import axios from "axios";
import logger from "use-reducer-logger";
import { Link } from 'react-router-dom';





function Events() {

    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);




    


    return isLoading ? (< div className=" loader d-flex align-items-center py-2">
        <strong>loader.loader</strong>
        <div className="spinner-border ml-auto text-success" role="status" aria-hidden="true"></div>
    </div>) :
        events.length ?
            (
                <Fragment>
                    <div className="container my-4">
                        <h1 className="event-title pt-4" >{t("pages.event.title")}</h1>
                    </div>
                    {events.map((event, id) => {
                        return <Event {...event} key={id} />
                    })}
                    <div className="text-center">
                        <Link to="/booking">
                            <Button type="button" className="btn btn-secondary rounded mx-auto mb-4">
                               Book ticket
                            </Button>
                        </Link>
                    </div>

                </Fragment>
            ) : (<div>"loader.notification2"</div>)
};

export default Event;