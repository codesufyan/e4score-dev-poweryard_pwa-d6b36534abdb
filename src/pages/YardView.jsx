import React, { useState } from 'react'
import Header from '../component/common/Header';
import PageForm from '../component/common/PageForm';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const YardView = () => {
    const [selectedZone, setSelectedZone] = useState("Zone: 2A");
    const [spotsEmpty, setSpotsEmpty] = useState("5/13");

  return (
    <div className='page_top_margin p-3'>
      <Header pageName="Yard View" />
      <PageForm isYardView />
      <Row className='mt-4'>
        <Col sm="10" md="10">
        </Col>
        <Col sm="2" md="2" className='fs-4'>
            <div className='info'>
                <p className="fs-6">Yard Selected</p>
                <p className="fs-3 text-center">{selectedZone}</p>
            </div>
            <div className='info'>
                <p className="fs-6">Spots Empty/Zone</p>
                <p className="fs-3 text-center">{spotsEmpty}</p>
            </div>

            <div className="yard_view_info text-center d-flex justify-content-center align-items-center flex-column">
                <Form>
                    <Button className='w-75 m-2'>Next Zone</Button>
                    <Button className='w-75 m-2'>Prev Zone</Button>

                    <FormGroup check className='mt-3'>
                        <Input type="checkbox" checked />
                        {' '}
                        <Label check>
                            Highlight Empty Spots
                        </Label>
                    </FormGroup>
                    <FormGroup check className='mt-3'>
                        <Input type="checkbox" checked />
                        {' '}
                        <Label check>
                            Highlight Over 24 hour spots
                        </Label>
                    </FormGroup>

                    <Button className='w-75 m-2'>Show Moves</Button>
                </Form>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default YardView;