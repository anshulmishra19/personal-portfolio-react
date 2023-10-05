import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/posts/anshul-mishra-106456234_anchoring-hosting-publicspeaking-activity-7106253845478948864-t8jP?utm_source=share&utm_medium=member_desktop',
      name: 'Anchor/Host',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'I am always eager to take on new challenges and collaborate with like-minded individuals to create memorable events. 🌟🎤, A special thanks to Gurukul Dream Foundation for providing me this opportunity to host the ज्ञानार्थ 2.0 Education Award 2023 💥💫',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/posts/anshul-mishra-106456234_podcastwithanshul-entrepreneurship-career-activity-7079845245911281664-95co?utm_source=share&utm_medium=member_desktop',
      name: 'Podcaster',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "Hosted 15+ podcasts and Seminars with the Founder and CEO's of different Startups. ✨🥳Meet 'IIT Laundrywala' Arunabh Sinha, Who Made A Rs 100 Crore Business Doing Laundry 👈",
    },
    
  ];
  return (
    <section id="testmonials">
      <h5>Recent posts from Linkedin!</h5>
      <h2>Other Activities</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials