import React from 'react'
import './Onecard.css'
import { CardGroup, Card, Col,Row,Button } from 'react-bootstrap';


export default function Onecard(props) {
    return (
        <div className="col-md-4">
            
            
            <Col md="14">
            
                <CardGroup>

                    <Card className="col-md-3">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.item.backdrop_path}`} height="300px" width="250px" />
                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>{props.item.original_title}</Card.Title>
                            <Card.Text>
                            Language : {props.item.original_language} <br/>
                            Release date : {props.item.release_date}
                            <br/><br/><br/>
                            <Button variant="primary">Booking</Button>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                
            </Col>
            
            
           
        </div>
    )
}
