import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MemeCard = (props: any) => {
    const navigate = useNavigate();
    return (
        <Card style={{ width: "17rem", margin: "10px",  backgroundColor: "#EAC4FF" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button 
                 onClick={(e) => navigate(`/edit?url=${props. img}`)}
                 variant="primary"
                 style={{
                        backgroundColor: "#B588E9", 
                        borderColor: "#3E54D1", 
                        border: 5,
                        padding: "7px 40px", 
                        fontSize: "20px", 
                        borderRadius: "6px", 
                 }}
                 >Edit</Button>
            </Card.Body>
        </Card>
    );
};



export default MemeCard;