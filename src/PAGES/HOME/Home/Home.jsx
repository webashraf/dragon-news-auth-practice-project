import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaEye, FaRegStar, FaShare, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import moment from "moment/moment";
import Rating from "react-rating";

const Home = () => {
  const newsLoaderData = useLoaderData();
  // console.log(newsLoaderData);

  return (
    <div>
      <h1 className="text-center">Home page</h1>
      {newsLoaderData.map((news) => (
        <Card className="text-center mb-4" key={news._id}>
          <Card.Header className="d-flex gap-3 align-items-center">
            <Image
              src={news.author?.img}
              className=""
              style={{ width: "60px" }}
              roundedCircle
            />
            <div className="text-start">
              <h4 className="mb-0 mt-2">{news.author?.name}</h4>
              <p>{moment(news.author?.published_date).format("MMM Do YY")}</p>
            </div>
            <div className="d-flex gap-3 flex-grow-1 justify-content-end">
              <BsShare></BsShare>
              <BsBookmark></BsBookmark>
            </div>
          </Card.Header>
          <Card.Img src={news.image_url} alt="Card image" />
          <Card.Body>
            <Card.Title>{news.title}</Card.Title>
            <Card.Text>
              {news.details.slice(0, 150)}.....{" "}
              <Link to={`news/${news._id}`}>
                <Button variant="danger">Read more</Button>
              </Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex">
            <div className="d-flex align-items-center gap-2">
            <Rating
            readonly
              placeholderRating={news.rating?.number}
              emptySymbol={
                <FaRegStar className="text-warning"></FaRegStar>
              }
              placeholderSymbol={
                <FaStar className="text-warning" />
              }
            />
            <span>{news.rating?.number}</span>

            </div>
            <div className="flex-grow-1 text-end">
              <FaEye></FaEye>
              <span className="ms-2">{news.total_view}</span>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default Home;
