import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import book1Image from "../book1.webp";
import book2Image from "../book2.jpg";
import book3Image from "../book3.jpg";

function BookCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.mos.cms.futurecdn.net/6c3s8rMup3oTAUKywn4UTT.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to the World of Knowledge</h3>
                    <p className="lead">Explore a wide range of books across various genres.</p>
                    <Link to="/books" className="btn btn-primary">Browse Books</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/922681.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Dive Deep into the world of knowledge</h3>
                    <p className="lead">Discover the latest additions to our collection.</p>
                    <Link to="/books" className="btn btn-primary">Explore Now</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.wallpaperscraft.com/image/single/library_books_shelves_192916_1920x1080.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Explore the latest books available in our store</h3>
                    <p className="lead">Check out our most popular books.</p>
                    <Link to="/books" className="btn btn-primary">Shop Bestsellers</Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

const Home = () => {
  return (
    <div className="container mt-5">
      <BookCarousel />
    </div>
  );
}

export default Home;
