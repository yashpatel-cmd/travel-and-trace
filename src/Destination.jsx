import React from 'react';
import './Destination.css';

const galleryItems = [
  {
    id: 1,
    href: "https://media.istockphoto.com/id/1263131145/photo/hiker-young-woman-with-hot-drink-cup-near-a-mountain-river.jpg?s=612x612&w=0&k=20&c=f6WwW8FkxtIXWb70RCJV3xg14oxPKNm05OW6ijPYphc=",
    alt: "Destination 1 (Mountain Hiker)",
  },
  {
    id: 2,
    href: "https://media.istockphoto.com/id/2204035655/photo/young-man-hikes-on-mountain-ridge-above-lake.jpg?s=612x612&w=0&k=20&c=R_qUQai7sBGap7S2OMNJGpZZ6Mw3ZhgNw7jZI2ZPmOA=",
    alt: "Destination 2 (Mountain Ridge)",
  },
  {
    id: 3,
    href: "https://www.princess.com/content/dam/princess-headless/shorex/ports/santorini-greece-oia-village-blue-roof-buildings.jpg",
    alt: "Destination 3 (Santorini, Greece)",
  },
  {
    id: 4,
    href: "https://thumbs.dreamstime.com/b/hiking-trail-svaneti-region-georgia-two-hikers-men-walk-trek-mountain-tourists-backpacks-hike-highlands-trekking-127694858.jpg",
    alt: "Destination 4 (Hiking Trail, Georgia)",
  },
  {
    id: 5,
    href: "https://southeastasiabackpacker.com/wp-content/uploads/2023/04/Kelingkling.jpg",
    alt: "Destination 5 (Kelingking Beach)",
  },
  {
    id: 6,
    href: "https://media.istockphoto.com/id/613107036/photo/modern-shanghai-skyline.jpg?s=612x612&w=0&k=20&c=oTA9CpzHvdV01gwkh8HgwwtFNtSICK0RmFQFxbmJmxI=",
    alt: "Destination 6 (Shanghai Skyline)",
  },
  {
    id: 7,
    href: "https://www.sunsiyam.com/media/qnfnzgmq/ssiv_general_04.jpg?width=782&height=521&mode=max",
    alt: "Destination 7 (Tropical Resort)",
  },
  {
    id: 8,
    href: "https://i.natgeofe.com/k/54b5e731-f8d6-4a93-92e0-b7b137cac411/france-champs-elysees-paris.jpg?wp=1&w=1084.125&h=609",
    alt: "Destination 8 (Champs-Élysées, Paris)",
  },
  {
    id: 9,
    href: "https://expertvagabond.com/wp-content/uploads/venice-italy-highlights-guide.jpg",
    alt: "Destination 9 (Venice, Italy)",
  },
];

const Destination = () => {

  const titleStyle = {
    color: 'orange',
    fontSize: '20px',
  };

  return (
    <>
      <section className="destination">
        <div>
          <h1>Destination</h1> 
          <p>
            Home <i className="fa fa-arrow-right" aria-hidden="true"></i> About
          </p>
        </div>
      </section>

      <section>
        <div className="title">
          <h5 style={titleStyle}>
            VIEW OUR GALLERY
          </h5>
          <p className="line">Best Tourist's Shared Photo</p>
        </div>
      </section>

      <section className="destinations-gallery">
        {galleryItems.map((item) => (
          <a 
            key={item.id} 
            data-fancybox="gallery" 
            href={item.href}
 
          >
            <img src={item.href} alt={item.alt} />
          </a>
        ))}
      </section>
    </>
  );
};

export default Destination