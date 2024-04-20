import React from 'react';
import './Testimonials.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TestimonialsWrapLayout2 = () => {
  return (
    <div className="test-container">
      <section className="testimonials-wrap-layout1">
        <div className="section-heading style-four">
          <h1 className="title">What our Customers <span>Have to Say</span></h1>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="sliderTestimonialOne swiper-container mb-5"
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="testimonial-box-layout1">
                <div className="icon-box">
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right_x5F_quote">
                      <g>
                        <path fill="#f4870b" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path fill="#f4870b" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur the more as adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna at porttitor rhoncus.</p>
                <div className="d-flex justify-content-center">
                  <div className="content-box">
                    <h3 className="title">Neel Eonathon</h3>
                    <div className="designation">Computer Member</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box-layout1">
                <div className="icon-box">
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right_x5F_quote">
                      <g>
                        <path fill="#f4870b" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path fill="#f4870b" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur the more as adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna at porttitor rhoncus.</p>
                <div className="d-flex justify-content-center">
                  <div className="content-box">
                    <h3 className="title">Leslie Alexander</h3>
                    <div className="designation">CEO Of Ac Tex</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box-layout1">
                <div className="icon-box">
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right_x5F_quote">
                      <g>
                        <path fill="#f4870b" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path fill="#f4870b" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur the more as adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna at porttitor rhoncus.</p>
                <div className="d-flex justify-content-center">
                  <div className="content-box">
                    <h3 className="title">John Doe</h3>
                    <div className="designation">Web Developer</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box-layout1">
                <div className="icon-box">
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right_x5F_quote">
                      <g>
                        <path fill="#f4870b" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path fill="#f4870b" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur the more as adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna at porttitor rhoncus.</p>
                <div className="d-flex justify-content-center">
                  <div className="content-box">
                    <h3 className="title">John Doe</h3>
                    <div className="designation">Web Developer</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box-layout1">
                <div className="icon-box">
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right_x5F_quote">
                      <g>
                        <path fill="#f4870b" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path fill="#f4870b" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur the more as adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna at porttitor rhoncus.</p>
                <div className="d-flex justify-content-center">
                  <div className="content-box">
                    <h3 className="title">John Doe</h3>
                    <div className="designation">Web Developer</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box-layout1">
                <div className="icon-box">
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right_x5F_quote">
                      <g>
                        <path fill="#f4870b" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path fill="#f4870b" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur the more as adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna at porttitor rhoncus.</p>
                <div className="d-flex justify-content-center">
                  <div className="content-box">
                    <h3 className="title">John Doe</h3>
                    <div className="designation">Web Developer</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box-layout1">
                <div className="icon-box">
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right_x5F_quote">
                      <g>
                        <path fill="#f4870b" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                        <path fill="#f4870b" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur the more as adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna at porttitor rhoncus.</p>
                <div className="d-flex justify-content-center">
                  <div className="content-box">
                    <h3 className="title">John Doe</h3>
                    <div className="designation">Web Developer</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <br />
        <div className="text-center">
          <a href="contact.html" className="btn-fill style-one">REGISTER NOW</a>
        </div>
        <br />
        <br />
      </section>
    </div>
  );
};

export default TestimonialsWrapLayout2;
