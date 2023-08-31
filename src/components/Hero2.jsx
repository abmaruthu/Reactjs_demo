import React from "react";
import image1 from "../assets/Clutch-logo-(002).jpg";
import image2 from "../assets/gaming.jpg";
import image3 from "../assets/game logo.png";
import image4 from "../assets/erp logo.png";
import image5 from "../assets/erp.jpg";
import image6 from "../assets/fin.jpg";
import image7 from "../assets/fin logo.jpg";
import image8 from "../assets/cost.png";
import image9 from "../assets/innovative.png";
import image0 from "../assets/industry.jpg";
import image from "../assets/scale.png";
import image11 from "../assets/Im.png";
import image12 from "../assets/track.png";
import image13 from "../assets/health.jpg";
import image14 from "../assets/bank.png";
import image15 from "../assets/consult.png";
import image16 from "../assets/profit.png";
import Button from "react-bootstrap/Button";
import img from "../assets/intel.png";
import img1 from "../assets/Ms.png";
import img2 from "../assets/lenovo.png";
import img3 from "../assets/acronis.png";
import img4 from "../assets/cisco.png";
import img5 from "../assets/dell.png";
import img6 from "../assets/ubiquti.png";
import images from "../assets/cloud-hosting.png";
import images0 from "../assets/IT-c.jpg";
import images1 from "../assets/underground.png";
import "./navbar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Card.css";
import "swiper/css/navigation";
import "swiper/css";
import { FormControl } from "react-bootstrap";

function Bottom(params) {
  return (
    <div id="reviewSection" class=" container-fluid ">
      <div class=" pb-2  mt-5 mb-4 border-top border-2 border-danger w-100">
        <br />
        <div class="d-lg-flex row">
          <div class="col">
            <p class="m-0 fw-semibold review-text d-flex align-items-center">
              <small class="text-secondary text-20px">REVIEWED ON </small>
              <span class="d-inline d-flex align-items-center px-3 text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </span>
            </p>
            <p class="d-flex align-items-center">
              <a href="#">
                <img
                  src={image1}
                  class="rounded"
                  width={90}
                  height={50}
                  alt="clutchLogo"
                />
              </a>
              <span class="px-2">31 REVIEWS</span>
            </p>
          </div>
          <div class="border-start border-3 col">
            <p class="fw-semibold m-0 ml-3 pt-10px text-30px">20 years</p>
            <p class="text-16px">proven track record</p>
          </div>
          <div class="border-start border-3 col">
            <p class="fw-semibold m-0 text-30px">98%</p>
            <p class="text-16px">customer satisfaction</p>
          </div>
          <div class="border-start border-3 col">
            <p class="fw-semibold m-0 text-30px">1,500 projects</p>
            <p class="text-16px">We have completed</p>
          </div>
          <div class="border-start border-3 col">
            <p class="fw-semibold m-0 text-30px">3 mins</p>
            <p class="text-16px">Average answer time</p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-black h-auto">
        <div className=" p-4">
          <Button variant="secondary">WHAT WE DO</Button>
        </div>
        <h1 class=" pt-5 pb-3 mt-5 fw-bold disply-5 bottom-0 text-light">
          Simplifying IT <br /> for a complex world.
        </h1>
      </div>

      <div class="pb-2  mt-4 mb-4 border-bottom border-2 border-danger w-100">
        <div class="d-lg-flex pt-4 pb-4">
          <div className="pe-4">
            <img
              src={image8}
              className="gradient-textbody"
              alt="cost"
              width={90}
              height={100}
            />
            <h5>Cost-effectiveness</h5>
            <br />
            <p>
              We offer affordable IT solutions that help you reduce costs and
              improve your bottom line.
            </p>
          </div>
          <div className="pe-4">
            <img src={image9} alt="innovative" width={90} height={100} />
            <h5>Innovative Technology</h5>
            <br />
            <p>
              We stay up-to-date with the latest technology trends and offer
              innovative solutions that help you stay ahead of the competions.
            </p>
          </div>
          <div className="pe-4">
            <img src={image0} alt="industry" width={90} height={100} />
            <h5>Industry Expertise</h5>
            <br />
            <p>
              We specialize in serving specific industries, such as healthcare,
              finace and offer tailord solutions that meet your unique needs.
            </p>
          </div>
          <div className="pe-4">
            <img src={image} alt="scale" width={90} height={100} />
            <h5>Scalability</h5>
            <br />
            <p>
              Our solutions are scalable and can grow with your business,
              ensuring that you get the most value out of your investment.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grad">
        <div className="ms-5">
          <div className=" pt-4 ms-5 pb-4">
            <Button variant="secondary">HOW WE DO</Button>
          </div>
          <h1 className="fw-bold ms-5 me-2">Solutions</h1>
        </div>
        <div className="d-lg-flex m-2 mt-4 justify-content-around">
          <div className="me-2 ">
            <div className=" card h-auto mb-4">
              <img
                src={image2}
                className="img-fluid"
                class="rounded"
                alt="game"
              />
            </div>
            <div className="card  mb-4 text-center">
              <div className="justify-content-center">
                <img
                  src={image3}
                  className="img-fluid"
                  alt="game"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-center">Gaming</h3>
              <div className="d-flex">
                <h3 className="badge bg-secondary  text-light p-2 ms-3 ">
                  Metaverse Gaming
                </h3>
                <h3 className="badge bg-secondary text-light mx-2 ">AR</h3>
                <h3 className="badge bg-secondary text-light mx-2 ">VR</h3>
              </div>
              <div className="d-flex">
                <h3 className="badge bg-secondary text-light p-2 ms-3 ">
                  Card games
                </h3>
                <h3 className="badge bg-secondary text-light mx-2 ">
                  Web 3.0 Gaming
                </h3>
              </div>
            </div>
          </div>
          <div className="me-2 ">
            <div className="card mb-4 text-center">
              <div className="">
                <img
                  src={image4}
                  className="mx-4 img-fluid"
                  width={100}
                  height={100}
                  alt="ERP"
                />
              </div>
              <h3 className="text-center">ERP</h3>
              <div className="d-flex">
                <h3 className="badge bg-secondary  text-light p-2 ms-3 ">
                  Hospital Management
                </h3>
                <h3 className="badge bg-secondary text-light mx-2 ">HRMS</h3>
                <h3 className="badge bg-secondary text-light mx-2 ">POS</h3>
              </div>
              <div className="d-flex">
                <h3 className="badge bg-secondary text-light p-2 ms-3 ">
                  Inventary Management
                </h3>
                <h3 className="badge bg-secondary text-light mx-2 ">
                  Hotal Banking
                </h3>
              </div>
            </div>
            <div className="d-grid h-auto w-20 mb-4">
              <img
                src={image5}
                class="rounded"
                alt="ERP"
                width={280}
                height={230}
              />
            </div>
          </div>
          <div className="w-300">
            <div className="card h-auto  mb-4">
              <img src={image6} className="img-fluid  rounded" alt="fintech" />
            </div>
            <div className="card text-center ">
              <div className="justify-content-center">
                <img
                  src={image7}
                  alt="fintech"
                  className="img-fluid"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-center">Fintech App</h3>

              <div className="p-2">
                <div className="d-flex ">
                  <div>
                    <h3 class="badge bg-secondary  p-2 ms-3 text-light">
                      payment gateway
                    </h3>
                  </div>
                  <div>
                    <h3 class="badge bg-secondary  p-2 mx-2 text-light">
                      Money Tranfer App
                    </h3>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <h3 class="badge bg-secondary p-2 ms-3 text-light">
                      Currency Exchange
                    </h3>
                  </div>
                  <div>
                    <h3 class="badge bg-secondary  p-2 mx-2 text-light">
                      share Trading App
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4">
          <Button variant="dark">View All Solutions</Button>
        </div>
      </div>
      <div className="py-4 container">
        <div className="justify-content-center row">
          <div className="py-5 col-8">
            <div className="py-2">
              <div className=" p-4">
                <Button variant="secondary">HOW WE DO</Button>
              </div>
              <p class="text-dark fw-bold display-6">
                Solving IT challenges in every industries, every day.
              </p>
              <div className="container mt-4">
                <div className="row row-cols-md-4">
                  <div class="mb-4 services-card d-flex align-items-center col-md-4 col-12">
                    <div class="box d-flex align-items-center p-1 bg-body-secondary border rounded-pill">
                      <img
                        src={image11}
                        alt="industry"
                        width={40}
                        height={30}
                      />
                      <div class="mx-2">
                        <p class="fw-semibold m-0 pl-3">
                          Industry & Manufacturing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 services-card d-flex align-items-center col-md-4 col-12">
                    <div class="box d-flex align-items-center p-1 bg-body-secondary border rounded-pill">
                      <img src={image12} alt="track" width={40} height={30} />
                      <div class="mx-2">
                        <p class="fw-semibold m-0 pl-3">
                          Transportation & Logistics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 services-card d-flex align-items-center col-md-4 col-12">
                    <div class="box d-flex align-items-center p-1 bg-body-secondary border rounded-pill">
                      <img src={image13} alt="health" width={40} height={30} />
                      <div class="mx-2">
                        <p class="fw-semibold m-0 pl-3">Healthcare</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 services-card d-flex align-items-center col-md-4 col-12">
                    <div class="box d-flex align-items-center p-1 bg-body-secondary border rounded-pill">
                      <img src={image14} alt="bank" width={40} height={30} />
                      <div class="mx-2">
                        <p class="fw-semibold m-0 pl-3">Banks & Insurance</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 services-card d-flex align-items-center col-md-4 col-12">
                    <div class="box d-flex align-items-center p-1 bg-body-secondary border rounded-pill">
                      <img src={image15} alt="consult" width={40} height={30} />
                      <div class="mx-2">
                        <p class="fw-semibold m-0 pl-3">Consulting Providers</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 services-card d-flex align-items-center col-md-4 col-12">
                    <div class="box d-flex align-items-center p-1 bg-body-secondary border rounded-pill">
                      <img src={image16} alt="profit" width={40} height={30} />
                      <div class="mx-2">
                        <p class="fw-semibold m-0 pl-3">Non-profit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="text-decoration-none text-black mt-auto border-bottom border-3 border-info"
              href="/"
            >
              View All Industries
            </a>
          </div>
        </div>
      </div>
      <div class="bg-dark  py-5">
        <div class="container">
          <div className=" p-4">
            <Button variant="secondary">WHAT WE USE</Button>
          </div>
          <p class=" fw-bold what-we-do-heading text-light display-5">
            Bringing the best IT vendors to you.
          </p>
          <small class="text-light">
            Working only with the best, to ensure the quality of our services,
            and to bring state of the art technology to those who need it.
          </small>
        </div>
        <div class="text-center py-5">
          <div class=" d-inline-block ">
            <div class="controls bg-black p-2 rounded-top d-flex align-items-center">
              <button
                type="button"
                class="rounded-circle bg-dark border-0 button-dimension d-flex align-items-center btn btn-primary"
              >
                <i class="bi bi-arrow-left-short fs-2 text-secondary "></i>
              </button>
              <h4 class="text-light px-3">Your IT Challenges</h4>
              <button
                type="button"
                class="rounded-circle bg-dark border-0 button-dimension d-flex align-items-center btn btn-primary"
              >
                <i class="bi bi-arrow-right-short fs-2 text-secondary "></i>
              </button>
            </div>
          </div>
          <div class="row d-grid p-0 m-0">
            <div class="col border-5 border-top border-black  d-lg-flex ">
              .
              <div class="col border-5 border-end  border-black">
                .
              </div>
              <div class="col border-5 border-end border-black">.</div>
              <div class="col border-5 border-end  border-black">.</div>
              <div class="col border-5  ">.</div>
            </div>
          </div>
          <div class="container ">
            <div class="row">
              <div class="col">
                <div class="card-carousel">
                  <div class="card-group">
                    <div class="card mx-3 border-0 rounded challenges-container">
                      <div class="card-body bg-black  text-start">
                        <h5 class="card-title text-light text-20px">
                          Datacenter &amp; Hosting
                        </h5>
                        <p class="card-text text-secondary text-14px">
                          Our facility – Data Center – is the first in the USA
                          that meets the strict ANSI/TIA-942 rated 4 certificate
                          requirements for design, build, and operate.
                        </p>
                        <div class="d-flex text-center">
                          <div class="bg-secondary  rounded-circle">
                            <i class="bi bi-plus px-1"></i>
                          </div>
                          <a
                            href="#"
                            class="px-2 text-decoration-none text-light text-12px"
                          >
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-3 border-0 rounded challenges-container">
                      <div class="card-body bg-black  text-start">
                        <h5 class="card-title text-light text-20px">
                          Collaboration
                        </h5>
                        <p class="card-text text-secondary text-14px">
                          Despite modern cloud technology, your users operate in
                          a familiar Microsoft Office environment and benefit
                          from broad compatibility and low-threshold access.
                        </p>
                        <div class="d-flex text-center">
                          <div class="bg-secondary  rounded-circle">
                            <i class="bi bi-plus px-1"></i>
                          </div>
                          <a
                            href="#"
                            class="px-2 text-decoration-none text-light text-12px"
                          >
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-3 border-0 rounded challenges-container">
                      <div class="card-body bg-black  text-start">
                        <h5 class="card-title text-light text-20px">
                          Cloud Plattform
                        </h5>
                        <p class="card-text text-secondary text-14px">
                          Customized cloud platform designed to improve
                          performance, lower IT costs, and provide secure and
                          reliable access to your company data from any device,
                          anytime, anywhere.
                        </p>
                        <div class="d-flex text-center">
                          <div class="bg-secondary  rounded-circle">
                            <i class="bi bi-plus px-1"></i>
                          </div>
                          <a
                            href="#"
                            class="px-2 text-decoration-none text-light text-12px"
                          >
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="d-grid text-center mx-5 px-5">
          <div className="text-center">
            <div className=" pt-4 pb-4">
              <Button variant="secondary">WHERE WE DO</Button>
            </div>
            <h1 className="fw-bold me-2">Success Stories</h1>
          </div>
        </div>
      </div>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="card p-2  mx-5 justify-content-center ">
              <div className=" d-flex justify-content-center ">
                <img src={images} className="rounded p-2" alt="cloud" />
              </div>
              <div className="  justify-content-center text-center ">
                <h6>cloud hosting</h6>
                <h2>
                  Major Insurance provider Saves $750k per Month with Big Data
                  Migration.
                </h2>
                <p>
                  The company needed to complete a complex migration on a tight
                  deadline to avoid millions of dollers in post-contract fees
                  and fines.
                </p>
                <h5>Modern infrastructure Consulting services.</h5>
                <a href="#">learn more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-5 justify-content-center p-2">
              <div className=" d-flex justify-content-center ">
                <img src={images0} alt="IT" height={90} />
              </div>
              <div className="justify-content-center text-center ">
                <h6>IT consulting</h6>
                <h2>
                  Maximizing Efficiency with Proper Technology Implementation -
                  Coffee Success Story.
                </h2>
                <p>
                  The company needed to complete a complex Migration on a tight
                  deadline to avoid millions of dollers in post-contract fees
                  and fines
                </p>
                <h5>Modern infrastructure Consulting services.</h5>
                <a href="#">learn more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" card mx-5 p-2 justify-content-center">
              <div className=" d-flex justify-content-center ">
                <img src={images1} alt="underground" className="rounded p-2" />
              </div>
              <div className="  justify-content-center text-center ">
                <h6>MOBILE DEVELOPMENT</h6>
                <h2>
                  Strategic Move to an AI_supported application for Public
                  Safety Travel App in London
                </h2>
                <p>
                  The company needed to complete a complex Migration on a tight
                  deadline to avoid millions of dollers in post-contract fees
                  and fines
                </p>
                <h5>Modern infrastructure Consulting services.</h5>
                <a href="#">learn more</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div class="z-index:1; container-fluid mt-4 contact-us-bg ">
          <div class="row">
            <div class="col-12 px-0">
              <div class="position-relative bg-dark text-white rounded-top p-4 what-we-do-container">
                <div>
                  <Button
                    variant="dark"
                    className="bg-body-secondary mb-5 fw-bold text-black"
                  >
                    Contact us
                  </Button>
                </div>
                <p class="text-body-tertiary-tertiary text-opacity-50 display-5 pt-5 fw-bold what-we-do-heading">
                  Partner with Us for
                  <br />
                  Comprehensive IT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid  bg-primary  bg-opacity-25">
          <div class="row">
            <div class="col-12 col-md-6 pt-5">
              <p class="fs-5">
                We're happy to address any questions you might have and <br /> help you
                determine which of our services best fit your needs.
              </p>
              <div className="mt-5">
              <a
                href="#"
                class="fs-5 hover-black text-decoration-none text-dark fw-semibold"
              >
                Call us at: 1-800-356-8933
              </a>
              </div>
              <h4 class="pt-5 pb-3" >Your benefits:</h4>
              <div class="row">
                <div class="col-md-4  d-flex">
                  <div>
                    <i class="bi bi-check bg-black  rounded-circle text-light"></i>
                  </div>
                  <p class="px-2">Client-oriented</p>
                </div>
                <div class="col-md-4 d-flex">
                  <div>
                    <i class="bi bi-check bg-black rounded-circle text-light"></i>
                  </div>
                  <p class="px-2">Results-driven</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 d-flex">
                  <div>
                    <i class="bi bi-check bg-black  rounded-circle text-light"></i>
                  </div>
                  <p class="px-2">Independent</p>
                </div>
                <div class="col-md-4 d-flex">
                  <div>
                    <i class="bi bi-check bg-black  rounded-circle text-light"></i>
                  </div>
                  <p class="px-2">Problem-solving</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 d-flex">
                  <div>
                    <i class="bi bi-check bg-black  rounded-circle text-light"></i>
                  </div>
                  <p class="px-2">Competent</p>
                </div>
                <div class="col-md-4 d-flex">
                  <div>
                    <i class="bi bi-check bg-black rounded-circle text-light"></i>
                  </div>
                  <p class="px-2">Transparent</p>
                </div>
              </div>
              <h4 class="pt-5 pb-sub2 mb-5">What happens next?</h4>
              <div class="row">
                <div class="col-md-4 gap-2 d-flex">
                  <p class="text-24px fw-semibold">1</p>
                  <p class="pr-3">We Schedule a call at your convenience</p>
                </div>
                <div class="col-md-4 gap-2 d-flex">
                  <p class="text-24px fw-semibold">2</p>
                  <p>We do a discovery and consulting meeting</p>
                </div>
                <div class="col-md-4 gap-2 d-flex">
                  <p class="text-24px fw-semibold">3</p>
                  <p class="pr-3">We prepare a proposal</p>
                </div>
              </div>
            </div>
            <div class="form col-md-6 ">
              <div class="bg-white py-3 rounded contact-form">
                <h2 class="text-center">Schedule a Free Consultation</h2>
                <hr />
                <form class="mx-5">
                  <div class="row mb-3">
                    <div class="form-group col-6 my-3">
                      <label for="firstName">First Name</label>
                      
                      <input
                        type="text"
                        class="form-control"
                        name="firstName"
                        value=""
                      />
                    </div>
                    <div class="form-group col-6 my-3">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="lastName"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="form-group  my-4">
                    <label for="company">Company / Organization</label>
                    <input
                      type="text"
                      class="form-control"
                      name="company"
                      value=""
                    />
                  </div>
                  <div class="form-group mb-3 my-4">
                    <label for="company">Company email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="company"
                      value=""
                    />
                  </div>
                  <div class="form-row  my-4">
                    <div class=" react-tel-input ">
                      <div class="special-label">Phone</div>
                      <input
                        class="form-control "
                        placeholder="Enter phone number"
                        type="tel"
                        value="+91"
                      />
                    </div>
                  </div>
                  <div class="form-group my-4">
                    <label for="helpDropdown">How Can We Help You With</label>
                    <select class="form-control" name="helpDropdown">
                      <option value="">Select an option</option>
                      <option value="Managed Services">Managed Services</option>
                      <option value="IT Consulting &amp; Advisory">
                        IT Consulting &amp; Advisory
                      </option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">
                        Mobile Development
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class="form-group  my-4">
                    <label for="message">Message</label>
                    <textarea
                      class="form-control"
                      name="message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div class="py-2  d-flex justify-content-between">
                    <div class="py-3">
                      <button
                        variant="black"
                        type="submit"
                        class="fw-semibold px-4 py-2 bg-black btn-block text-light"
                      >
                        Submit
                      </button>
                    </div>
                    <div class="alert alert-" role="alert"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5 container">
        <div class="row">
          <div class="col">
            <div className="pt-5">
              <Button
                variant="dark"
                className="bg-body-secondary fw-bold text-black"
              >
                WHERE WE DO
              </Button>
            </div>
            <p class="text-dark fw-bold pt-5 display-5">
              Recognized by the best
            </p>
            <p class="light-gray pt-3 text-20px">
              The company needed to complete a complex migration on a tight
              deadline to avoid millions of dollers in post-contract fees and
              fines.
            </p>
          </div>
          <div className="col-md-5 pt-5 ps-5 float-end">
            <div className="justify-content-between p-4">
              <img
                src={img}
                alt="intel"
                className="ps-3"
                width={110}
                height={90}
              />
              <img
                src={img1}
                alt="ms"
                className="ps-3"
                width={190}
                height={90}
              />
            </div>
            <div className="justify-content-between ">
              <img
                src={img2}
                alt="intel"
                className="ps-3"
                width={110}
                height={90}
              />
              <img
                src={img3}
                alt="intel"
                className="ps-3"
                width={150}
                height={90}
              />
              <img
                src={img4}
                alt="intel"
                className="pe-2"
                width={130}
                height={100}
              />
            </div>
            <div className="justify-content-between p-4">
              <img
                src={img5}
                alt="intel"
                className="ps-3"
                width={190}
                height={90}
              />
              <img
                src={img6}
                alt="intel"
                className="ps-3"
                width={110}
                height={90}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="bg-black py-4 light-gray">
          <div class="container row-container">
            <div class="row">
              <div class="col-md-6 ">
                <div class="mt-4">
                  <h4 class="text-light my-3 fw-bold">Solutions</h4>
                  <div class="row my-2">
                    <a href="#" class="col-6 text-decoration-none text-light">
                      Managed services
                    </a>
                    <a href="#" class="col-6 text-decoration-none text-light">
                      Mobile Development
                    </a>
                  </div>
                  <div class="row my-2">
                    <div class="col-6 text-light">
                      IT Consulting &amp; Advisory
                    </div>
                    <div class="col-6 text-light">Cloud Services</div>
                  </div>
                  <div class="row my-2">
                    <div class="col-6 text-light">Cyber Security</div>
                    <div class="col-6 text-light">Network Connectivity</div>
                  </div>
                  <div class="row my-2">
                    <div class="col-6 text-light">Web Development</div>
                    <div class="col-6 text-light">ERP Solutions</div>
                  </div>
                  <h4 class="text-light fw-bold my-4 pt-5">Company</h4>
                  <div class="row my-2">
                    <a href="" class="col-6 text-decoration-none text-light">
                      About Us
                    </a>
                    <a href="" class="col-6 text-decoration-none text-light">
                      Blog
                    </a>
                  </div>
                  <div class="row my-2">
                    <div class="col-6 text-light">Why us</div>
                    <div class="col-6 text-light">Case studies</div>
                  </div>
                  <div class="row my-2">
                    <div class="col-6 text-light">Team</div>
                    <div class="col-6 text-light">Events</div>
                  </div>
                  <div class="row my-2">
                    <div class="col-6 text-light">Careers</div>
                    <div class="col-6 text-light">FAQ</div>
                  </div>
                  <div class="row my-2">
                    <div class="col-6 text-light">
                      Partners &amp; Certifications
                    </div>
                    <div class="col-6 text-light">Reviews &amp; Awards</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6  d-lg-flex d-none justify-content-center align-items-center">
                <div class="text-center">
                  <h1 className="fw-bold mb-3 text-light">LOCOIPUSIM</h1>
                  <div>
                    <Button variant="dark">Schedule Consultation</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4 d-lg-flex row">
          <div class="container-fluid pt-4">
            <div class="row justify-content-center">
              <div class="col">
                <p class="m-0 fw-semibold review-text d-flex align-items-center">
                  <small class="text-secondary text-11px">REVIEWED ON </small>
                  <span class="d-inline d-flex align-items-center px-3 text-warning">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </span>
                </p>
                <p class="d-flex align-items-center">
                  <a href="#">
                    <img
                      src={image1}
                      class="rounded"
                      width={90}
                      height={50}
                      alt="clutchLogo"
                    />
                  </a>
                  <span class="px-3 text-secondary fw-semibold text-12px">
                    31 REVIEWS
                  </span>
                </p>
              </div>
              <div class="col border-start border-3">
                <p class="text-16px ps-3 m-0">
                  Seventh Ave, 20th Floor <br /> New York,NY 10018
                </p>
              </div>
              <div class="col border-start  border-3">
                <p class="text-16px ps-3 m-0">T: 1-800-356-8933</p>
                <p class="text-16px ps-3 m-0">E: office@dummy.com</p>
              </div>
              <div class="col d-flex gap-3">
                <div>
                  <a href="#" class="text-black text-decoration-none">
                    <i class="bi bi-linkedin fs-3"></i>
                    <p class="m-0  text-14px">LinkedIn</p>
                  </a>
                </div>
                <div>
                  <a href="#" class="text-black text-decoration-none">
                    <i class="bi bi-github fs-3"></i>
                    <p class="m-0  text-14px">Github</p>
                  </a>
                </div>
                <div>
                  <a href="#" class="text-black text-decoration-none">
                    <i class="bi bi-twitter fs-3"></i>
                    <p class="m-0  text-14px">Twitter</p>
                  </a>
                </div>
                <div>
                  <a href="#" class="text-black text-decoration-none">
                    <i class="bi bi-facebook fs-3 black"></i>
                    <p class="m-0  text-14px">Facebook</p>
                  </a>
                </div>
                <div>
                  <a href="#" className="text-black text-decoration-none">
                    <i class="bi bi-youtube fs-3 "></i>
                    <p class="m-0 text-decoration-none  text-14px">Youtube</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="d-flex  gap-3">
            <p class="text-14px">&copy; 2023</p>
            <p class="text-14px">
              <a
                href="/terms-conditions"
                class="text-black text-decoration-none"
              >
                Terms &amp; Conditions
              </a>
            </p>
            <p class="text-14px">
              <a href="/privacy-policy" class="text-black text-decoration-none">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
