import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaShare } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const newsLoaderData = useLoaderData();
  console.log(newsLoaderData);

  return (
    <div>
      <h1 className="text-center">Home page</h1>
      {newsLoaderData.map((news) => (
        <Card className="text-center mb-4" key={news._id}>
        <Card.Header className="d-flex gap-3 align-items-center">
        <Image src={news.author?.img} className="" style={{width: "60px"}} roundedCircle />
        <h4>{news.author?.name}</h4>
        <div className="d-flex gap-3 flex-grow-1 justify-content-end">
            <BsShare></BsShare>
            <BsBookmark></BsBookmark>
        </div>
        </Card.Header>
          <Card.Img src={news.image_url} alt="Card image" />
        <Card.Body>

          <Card.Title>{news.title}</Card.Title>
          <Card.Text>
           {
            news.details.slice(0, 150)
           }..... <Link to={"/"}><Button variant="danger">Read more</Button></Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      ))}
    </div>
  );
};

export default Home;
