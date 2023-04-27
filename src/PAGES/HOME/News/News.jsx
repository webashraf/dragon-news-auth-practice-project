import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsFillChatLeftHeartFill } from "react-icons/bs";
import { FaAngleLeft, FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { title, image_url, details, category_id } = news;
  return (
    <Card className="border-0">
      <Card.Img variant="top" className="h-25" src={image_url} />
      <Card.Body>
        <Card.Title className="fs-3 fw-bolder">{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/categorie/${category_id}`}>
          <Button variant="danger">

            <FaArrowLeft></FaArrowLeft> All news in this categorie
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
