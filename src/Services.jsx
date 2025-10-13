import React from 'react'
import './Services.css'

const serviceItems = [
  {
    number: '01',
    title: "Let's Enjoy The Wonders Of Nature",
    imageSrc: "https://media.istockphoto.com/id/1263131145/photo/hiker-young-woman-with-hot-drink-cup-near-a-mountain-river.jpg?s=612x612&w=0&k=20&c=f6WwW8FkxtIXWb70RCJV3xg14oxPKNm05OW6ijPYphc=",
    altText: "Nature",
    reverse: false,
  },
  {
    number: '02',
    title: "Keep Calm & Travelling On",
    imageSrc: "https://media.istockphoto.com/id/2204035655/photo/young-man-hikes-on-mountain-ridge-above-lake.jpg?s=612x612&w=0&k=20&c=R_qUQai7sBGap7S2OMNJGpZZ6Mw3ZhgNw7jZI2ZPmOA=",
    altText: "Travel",
    reverse: true,
  },
  {
    number: '03',
    title: "Better Prices Exceptional People.",
    imageSrc: "https://www.princess.com/content/dam/princess-headless/shorex/ports/santorini-greece-oia-village-blue-roof-buildings.jpg",
    altText: "Better Prices",
    reverse: false,
  },
  {
    number: '04',
    title: "Beautiful One Day, Perfect The Next.",
    imageSrc: "https://thumbs.dreamstime.com/b/hiking-trail-svaneti-region-georgia-two-hikers-men-walk-trek-mountain-tourists-backpacks-hike-highlands-trekking-127694858.jpg",
    altText: "Beautiful Day",
    reverse: true,
  },
];

const Service = () => {
  return (
    <>
      {/* Page Header/Breadcrumb Section */}
      <section className="service">
        <div>
          <h1>Service</h1>
          <p>
            Home <i className="fa fa-arrow-right" aria-hidden="true"></i> About
          </p>
        </div>
      </section>

      {/* Main Services Content Section */}
      <section className="services-section">
        {serviceItems.map((item) => (
          <div
            key={item.number}
            className={`service-item ${item.reverse ? 'reverse' : ''}`}
          >
            <div className="service-image">
              <img src={item.imageSrc} alt={item.altText} />
            </div>
            <div className="service-content">
              <span className="service-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam
                sequi optio consectetur adipisicing elit. Fuga, suscipit totam
                animi consequatur saepe blanditiis.
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Service;
