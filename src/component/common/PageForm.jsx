import React, { useState } from 'react'
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Guage from './Guage';

const PageForm = ({ isYardView = false }) => {
  const [selectedYard, setSelectedYard] = useState("Northwest Yard No 24");

  return (
    <Row className='mt-3'>
        <Col  sm="3" md="3" >
          <p>Yard Selected</p>
          <p className="fs-5">{selectedYard}</p>
        </Col>
        <Col  sm="6" md="6" className='p-0'>
          <Form className='w-100 p-0 d-flex'>
            {!isYardView ?
              <>
                <FormGroup className='w-50 p-1'>
                  <Label for="trailerName">
                    Locate Trailer / Shipment
                  </Label>
                  <Input
                    id="trailerName"
                    name="trailerName"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className='w-25 p-1'>
                  <Label for="spotType">
                    Spot Type
                  </Label>
                  <Input
                    id="spotType"
                    name="spotType"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className='w-25 p-1'>
                  <Label for="zoneSpot">
                    Zone - Spot
                  </Label>
                  <Input
                    id="zoneSpot"
                    name="zoneSpot"
                    type="text"
                  />
                </FormGroup>
              </> :
              <>
                <FormGroup className='w-50 p-1'>
                  <Label for="locateAsset">
                    Locate Asset / Spot
                  </Label>
                  <Input
                    id="locateAsset"
                    name="locateAsset"
                    type="text"
                  />
                </FormGroup>
              </>
            }
          </Form>
        </Col>
        <Col  sm="3" md="3" >
          <Guage />
        </Col>
      </Row>
  );
};

export default PageForm;