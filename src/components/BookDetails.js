import React from 'react';
import { useParams } from 'react-router-dom';
import book5Image from "../book5.jpg";
import book6Image from "../book6.jpg";

const books = [
  { id: 1, title: "Other London book 1", author: "M.V.Scott", price: "Rs.570", description: "A secret city where magic went to hide. An ancient evil desperate to get inside. Once, there was magic in London, but when a monster made of hunger came to devour it all, the Uncanny were forced to abandon their home.And so they fled to Other London, a secret city adjacent to their own, and there they hid, barricaded, isolated from the rest of the world. For two hundred years, the people of Other London have cowered behind closed doors. No one can get in and no one can get out. Until, one day, the impossible happens: someone from outside finds their way into the hidden city.Verity Adams has no magic in her—she doesn’t even believe in the stuff—so how on earth did she find herself in Other London? And could she be a sign that something much worse is about to follow her? Something the Uncanny thought they had locked out for good? Something that has been clawing at the door, hungry for magic, for two long centuries…", image: book5Image },
  { id: 2, title: "The last four things", author: "Paul Hoffman", price: "Rs. 890", description: "The epic story of Thomas Cale-introduced so memorably in 'The Left Hand of God'--continues as the Redeemers use his prodigious gifts to further their sacred goal: the extinction of humankind and the end of the world.To the warrior-monks known as the Redeemers, who rule over massive armies of child slaves, 'the last four things' represent the culmination of a faithful life. Death. Judgement. Heaven. Hell. The last four things represent eternal bliss-or endless destruction, permanent chaos, and infinite pain. Perhaps nowhere are the competing ideas of heaven and hell exhibited more clearly than in the dark and tormented soul of Thomas Cale. Betrayed by his beloved but still marked by a child's innocence, possessed of a remarkable aptitude for violence but capable of extreme tenderness, Cale will lead the Redeemers into a battle for nothing less than the fate of the human race. And though his broken heart foretells the bloody trail he will leave in pursuit of a personal peace he can never achieve, a glimmer of hope remains. The question even Cale can't answer: When it comes time to decide the fate of the world, to ensure the extermination of humankind or spare it, what will he choose? To express God's will on the edge of his sword, or to forgive his fellow man-and himself?", image: book6Image },
  { id: 3, title: "Intertidal: A Coast and Marsh Diary", author: "Yuvan Aves", price: "Rs. 454", description: "Over two years and three monsoons, Yuvan Aves pays scrupulous attention to the living world of his coastal city. The result is a diary of deep observation of coast and wetland, climate and self. Set in beaches and marshes, and the wild places of the mind, Intertidal comprises daily accounts of being in a multispecies milieu. In language that is jewel-like and precise, we hear frog calls through the night, spot butterflies miles into the ocean, find blue buttons washed ashore, see the churning of longshore currents and meditate on the composting abilities of worms. We also witness communities stand together to preserve the homes and livelihoods of the human and non-human inhabitants of the coast and the marsh.  Intertidal asks us to reimagine values to live by in the here and now, heeding the living world and attending to the climate's calling, moving away from the old political, religious and cultural values that have proved to be ecologically disastrous. Yuvan Aves invites us to see beyond the binaries of sea and coast, mindscape and landscape, human and not human, self and other, and live in deep animism amid all of life.", image: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9789356402348.jpg" },
  { id: 4, title: "It Ends with Us", author: " Colleen Hoover", price: "Rs. 351", description: "Sometimes it is the one who loves you who hurts you the most.Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true.Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place.As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.", image: "https://images-na.ssl-images-amazon.com/images/I/91OT29EvAXL.jpg" }
];

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={book.image} className="img-fluid" alt={book.title} />
        </div>
        <div className="col-md-6">
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
          <p>{book.description}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
