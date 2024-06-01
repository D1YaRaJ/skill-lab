import React from 'react';
import { Link } from 'react-router-dom';
import book5Image from "../book5.jpg";
import book6Image from "../book6.jpg";

const Books = () => {
  const books = [
    { id: 1, title: "Other London book 1", author: "M.V.Scott", price: "Rs.570", description: "In 'Other London', a secret city where magic retreated to hide from a monstrous, insatiable evil, its inhabitants have been isolated for two hundred years. The city's fragile peace is shattered when Verity Adams, a non-magical outsider, inexplicably enters their hidden sanctuary. Her arrival raises fears that the ancient evil, long kept at bay, might finally find its way in, threatening to devour the magic the Uncanny have fought to protect.", image: book5Image },
    { id: 2, title: "The last four things", author: "Paul Hoffman", price: "Rs. 890", description: "In 'The Last Four Things',Thomas Cale, from 'The Left Hand of God', is exploited by the Redeemers to achieve their apocalyptic goal: human extinction. The warrior-monks rule over child slave armies, embodying Death, Judgement, Heaven, and Hell. Cale, with a dark yet tender soul, leads a battle for humanity's fate. Betrayed and seeking peace, he faces a crucial choice: to enforce divine will or to seek forgiveness for himself and mankind.", image: book6Image },
    { id: 3, title: "Intertidal: A Coast and Marsh Diary", author: "Yuvan Aves", price: "Rs. 454", description: "Over 2 years, Yuvan observes his coastal city in 'Intertidal', detailing the interplay of coast, wetland, climate, and self. Set in beaches and marshes, it captures a multispecies milieu. With vivid language,he describes frog calls, ocean-bound butterflies, and longshore currents & also highlights communities protecting coastal inhabitants. It advocates for reevaluating values and embracing deep animism for a harmonious existence with all life forms.", image: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9789356402348.jpg" },
    { id: 4, title: "It Ends with Us", author: " Colleen Hoover", price: "Rs. 351", description: "In 'It Ends with Us', Lily navigates a complex love triangle between herself, Ryle Kincaid, a charming neurosurgeon, and Atlas Corrigan, her first love. Despite her successes, Lily grapples with the challenges of her relationships. Ryle's aversion to commitment clashes with Lily's desires, while Atlas's return forces her to confront her past. As Lily unravels the complexities of love and pain, she must ultimately decide what she is willing to fight for and what she is willing to let go.", image: "https://images-na.ssl-images-amazon.com/images/I/91OT29EvAXL.jpg" }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {books.map(book => (
          <div className="col-md-4" key={book.id}>
            <div className="card mb-4 shadow-sm">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Price: {book.price}</p>
                <p className="card-text">{book.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/book/${book.id}`} className="btn btn-sm btn-outline-secondary">View Details</Link>
                  <button className="btn btn-sm btn-outline-secondary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
