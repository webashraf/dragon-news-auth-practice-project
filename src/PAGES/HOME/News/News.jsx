import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsFillChatLeftHeartFill } from 'react-icons/bs';
import { FaAngleLeft } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const News = () => {
    const news =  useLoaderData();
    console.log(news);
    const {title, image_url, details} = news;
    return (
            <Card className='border-0'>
              <Card.Img variant="top" className='h-25' src={image_url} />
              <Card.Body>
                <Card.Title className='fs-3 fw-bolder'>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button variant="danger"> <FaAngleLeft></FaAngleLeft> All news in this categorie</Button>
              </Card.Body>
            </Card>
    );
};

export default News;