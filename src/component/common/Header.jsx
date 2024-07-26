import React, { useState } from "react"
import { Col, Row } from "reactstrap"

const Header = ({ pageName, showVersion = false }) => {
    const [timeAndDate, setTimeAndDate] = useState("7th July 2022 9:45am CST");
    const [location, setLocation] = useState("Tyler TX USA");
    const [netService, setNetService] = useState("Good");
    const [userName, setUserName] = useState("John Doe");
    const [organization, setOrganization] = useState("DAIKIN GOODMAN (WALLER TX)");
    const [version, setVersion] = useState("v2.10 Rel May 7th 2021");

  return (
    <Row>
        <Col sm="4" md="4" className="text-start">
            <div className="left_items fs-5">
                <p><span className="fw-bold">Today: </span>{timeAndDate}</p>
                <p><span className="fw-bold">Location: </span>{location}</p>
                <p><span className="fw-bold">Internet Service: </span>{netService}</p>
            </div>
        </Col>
        <Col sm="4" md="4" className="text-center">
            <div className="page_heading">
                <h1>Poweryard</h1>
                <h2>{pageName}</h2>
                {showVersion && <p>{version}</p>}
            </div>
        </Col>
        <Col sm="4" md="4" className="text-end">
            <div className="left_items">
                <p className="fs-5">{organization}</p>
                <p>{userName} / Jocky</p>
                <p><span className="fw-bold fs-6">Last Login: </span>{netService}</p>
            </div>
        </Col>
    </Row>
  );
};

export default Header;