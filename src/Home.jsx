import React from 'react'
import { useEffect } from 'react'
import './Home.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom';

const Home = () => {
    useEffect(() => {
    let slideIndex = 1;

    const showSlides = (n) => {
      let i;
      const slides = document.querySelectorAll(".home_page");
      if (slides.length === 0) return;

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
    };

    const plusSlides = (n) => {
      showSlides(slideIndex += n);
    };

    showSlides(slideIndex);

    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 5000);

    const navBtn = document.querySelector('i.fa.fa-bars');
    const navList = document.querySelector('.nav_ul');

    const toggleNav = () => {
      console.log("Toggle nav called");
      if (navList) {
        navList.classList.toggle("active");
      }
    };

    if (navBtn) {
      navBtn.addEventListener('click', toggleNav);
    }

    const animateCounter = (element, targetNumber) => {
      let currentNumber = 0;
      const speed = 100;
      let animationFrameId;

      const updateCounter = () => {
        const increment = targetNumber / speed;
        if (currentNumber < targetNumber) {
          currentNumber += increment;
          element.textContent = Math.ceil(currentNumber);
          animationFrameId = requestAnimationFrame(updateCounter);
        } else {
          element.textContent = targetNumber;
        }
      };
      updateCounter();

      return () => cancelAnimationFrame(animationFrameId);
    };

    const counters = document.querySelectorAll('.count p');
    let cleanupFns = [];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const counterSection = entry.target;
          if (entry.isIntersecting && !counterSection.classList.contains('animated')) {
            counters.forEach(counter => {
              const targetNumber = parseInt(counter.textContent, 10);
              const originalText = counter.getAttribute('data-target') || targetNumber;
              counter.setAttribute('data-target', originalText);

              counter.textContent = '0';
              cleanupFns.forEach(fn => fn());
              cleanupFns = [];

              cleanupFns.push(animateCounter(counter, targetNumber));
            });
            counterSection.classList.add('animated');
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    const counterSection = document.querySelector('.autoplay_counter');
    if (counterSection) {
      observer.observe(counterSection);
    }

    if (typeof window.Swiper !== 'undefined') {
      const swiper = new window.Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
      });
    }

    const copyrightElement = document.querySelector(".copyright_year");
    if (copyrightElement) {
      const d = new Date();
      copyrightElement.innerHTML = d.getFullYear();
    }

    return () => {
      clearInterval(intervalId);

      if (navBtn) {
        navBtn.removeEventListener('click', toggleNav);
      }

      if (counterSection) {
        observer.unobserve(counterSection);
      }

      cleanupFns.forEach(fn => fn());
    };
  }, []);

  const slideshowData = [
    { col1: 'A Signature of Excellence', col2: 'Excellence' },
    { col1: 'A Destination For The New Millennium.', col2: 'Millennium' },
    { col1: 'A Signature of Excellence', col2: 'Excellence' },
    { col1: 'A Destination For The New Millennium.', col2: 'Millennium' },
  ];

  const facilityData = [
    { icon: 'fa fa-users', title: 'Best Travel Guide' },
    { icon: 'fa fa-wifi', title: 'Free Wifi' },
    { icon: 'fa fa-sign-language', title: 'Best Service' },
    { icon: 'fa fa-headphones', title: '24/7 Support' },
    { icon: 'fa fa-cutlery', title: 'Delicious Food' },
    { icon: 'fa fa-shopping-basket', title: 'Amazing Tours' },
  ];

  const pricingData = [
    { type: 'Basic package', price: 0, isFeatured: true, label: null },
    { type: 'Standard package', price: 39, isFeatured: false, label: 'Save 10%' },
    { type: 'Premium package', price: 89, isFeatured: true, label: null },
  ];

  const commonFeatures = [
    'Regular Tours', 'Free setup Guidlines', 'Seasonla Tours', 'Free Support', 'Customer Support'
  ];

  const testimonialsData = [
    { quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, optio!', name: 'yash patel', city: 'vadodara' },
    { quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, optio!', name: 'yash patel', city: 'vadodara' },
    { quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, mollitia.', name: 'yash patel', city: 'vadodara' },
    { quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nulla!', name: 'yash patel', city: 'vadodara' },
    { quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, doloremque.', name: 'yash patel', city: 'vadodara' },
    { quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, optio?', name: 'yash patel', city: 'vadodara' },
    { quote: 'Wonderful team and great service. Our family trip was seamless!', name: 'Aarav Shah', city: 'Ahmedabad' },
    { quote: 'Best travel experience ever. Quick support and perfect itinerary.', name: 'Priya Desai', city: 'Surat' },
    { quote: 'Affordable and reliable. Highly recommend Trace for weekend getaways.', name: 'Rohan Mehta', city: 'Mumbai' },
  ];

  return (
    <>
      <section className="slideshow">
        {slideshowData.map((slide, index) => (
          <div className="home_page" key={index}>
            <div className="container">
              <div className="home_text">
                <p className="hometext_col_1">{slide.col1}</p>
                <h3 className="hometext_col_2">{slide.col2}</h3>
                <p className="hometext_col_3">A more rewarding way to travel</p>
                <div className="homepage_btn">
                  <a className="home_btn_read" href="#">Read more</a>
                  <a className="home_btn_contact" href="#">Contact us</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      <section className="about">
        <div className="container">
          <div className="about_text_info">
            <h3 className="about_col_1">About us</h3>
            <h1 className="about_col_2">Traveling Makes A Man Wiser,But<br />Less Happy.</h1>
            <p className="about_col_3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi totam nam aut fugit possimus maxime unde repellendus cupiditate magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias, iure sapiente deserunt suscipit officia dolorem reprehenderit similique consequatur cumque.</p>
            <a href="#" className="about_read_more">Read more</a>
          </div>
        </div>
      </section>

      <section className="facility_info">
        <div className="container">
          <div className="grid-container">
            {facilityData.map((facility, index) => (
              <div className="box" key={index}>
                <span className={facility.icon}></span>
                <h3>{facility.title}</h3>
                <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet. Lorem ipsum dolor sit amet ut blandit eu leo.</p>
                <a href="#">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why_choose">
        <div className="container">
          <div className="combine_info">
            <div className="leftside">
              <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/trace-liberty-demo_Free/1224681717/web/assets/images/ab1.jpg" alt="Travel image" />
            </div>
            <div className="rightside">
              <h3 className="right_row1">Why choose us</h3>
              <h1 className="right_row2">what we offer for you</h1>
              <p className="right_row3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate similique natus fugiat dolores. Quae aspernatur voluptatum delectus totam explicabo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, impedit?</p>
              <div className="rightside_list">
                <ul>
                  <li><span className="fa fa-check"></span>Comunication</li>
                  <li><span className="fa fa-check"></span>10 years of experince</li>
                  <li><span className="fa fa-check"></span>knowledge</li>
                  <li><span className="fa fa-check"></span>valuing relationship</li>
                  <li><span className="fa fa-check"></span>honesty</li>
                  <li><span className="fa fa-check"></span>help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <h2 className="counter" data-target="1730">0</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h2 className="counter" data-target="1080">0</h2>
              <p>Team Members</p>
            </div>
            <div className="stat-box">
              <h2 className="counter" data-target="1812">0</h2>
              <p>Awesome Tours</p>
            </div>
            <div className="stat-box">
              <h2 className="counter" data-target="190">0</h2>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our_plans">
        <div className="container">
          <div className="our_plans_title">
            <h4>Our plans</h4>
            <h2>Affordable Packages</h2>
          </div>
          <div className="all_package">
            {pricingData.map((pkg, index) => (
              <div className={pkg.isFeatured ? "package pkg" : "package"} key={index}>
                {pkg.label && <h2>{pkg.label}</h2>}
                <p>{pkg.type}</p>
                <h4><label>$</label>{pkg.price}<span>/month</span></h4>
                <ul>
                  {commonFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a href="#">Book now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="explore">
        <div className="container">
          <div className="explore_content">
            <h4>EXPLORE THE WORLD</h4>
            <h2>Travel To Make Memories All Around The World.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur saepe, nam excepturi rerum possimus repellendus dicta quidem necessitatibus? <br /> Quas veritatis eum nostrum officiis commodi dicta placeat id, tenetur deserunt corporis deleniti ullam delectus quisquam magni nisi? Sit debitis dolorem mollitia eligendi numquam ipsum, similique fuga, impedit odit cupiditate alias.</p>
          </div>
          <div className="anchor">
            <a href="https://youtu.be/aQOli947aJ0?si=PC-s2Ie1gQ46mbKV">
              <i className="fa fa-play-circle" aria-hidden="true"></i>
              <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/trace-liberty-demo_Free/1224681717/web/assets/images/banner3.jpg" alt="Travel video thumbnail" />
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="testimonials_title">
            <h4>testimonials</h4>
            <h2>happy client & feedbacks</h2>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {testimonialsData.map((review, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="review_box">
                    <p className="review_text"><q> {review.quote} </q></p>
                    <div className="review_profile">
                      <div>
                        <img src="images/img_avatar.png" alt="Avatar" className="avatar" />
                      </div>
                      <div>
                        <span className="profile_name">{review.name}</span>
                        <p className="profile_city">{review.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="stay_update">
        <div className="container">
          <div className="update_info">
            <h3>stay update!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla est fugiat repellat, eligendi a similique alias nisi facere necessitatibus eveniet, veritatis quidem voluptatum veniam.</p>
            <div className="email_info">
              <input type="email" placeholder="Enter your email..." />
              <a href="#">Subscribe</a>
            </div>
            <div>
              <p>yash</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;