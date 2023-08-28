import React from "react";


function Section(params) {
    return (
        <div>
        <div class="container-fluid contact-us-bg">
            <div class="row">
                <div class="col-12 px-0">
                    <div class="position-relative bg-dark text-white rounded-top p-4 what-we-do-container">
                        <p class="text-11px fw-semibold what-we-do px-2 py-1 rounded">CONTACT US</p>
                        <p class=" display-5 pt-5 fw-bold what-we-do-heading">Partner with Us for<br/>Comprehensive IT</p>
                    </div>
                </div>
            </div>
            <div class="row p-2">
                <div class="col-12 col-md-6 py-5">
                    <p class="fs-5">We're here to address any inquiries you might have and assist you in identifying the services that align most effectively with your requirements.</p>
                    <a href="#" class="fs-5 hover-black text-decoration-none text-dark fw-semibold">Call us at: 1-800-356-8933</a>
                    <h4 class="pt-5">Your benefits:</h4>
                    <div class="row">
                        <div class="col-md-4 d-flex">
                            <div>
                                <i class="bi bi-check bg-primary  rounded-circle text-light"></i>
                            </div>
                            <p class="px-2">Client-oriented</p>
                        </div>
                        <div class="col-md-4 d-flex">
                            <div><i class="bi bi-check bg-primary rounded-circle text-light"></i></div>
                            <p class="px-2">Results-driven</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 d-flex">
                            <div><i class="bi bi-check bg-primary  rounded-circle text-light"></i></div>
                            <p class="px-2">Independent</p>
                        </div>
                        <div class="col-md-4 d-flex">
                            <div><i class="bi bi-check bg-primary  rounded-circle text-light"></i></div>
                            <p class="px-2">Problem-solving</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 d-flex">
                            <div><i class="bi bi-check bg-primary  rounded-circle text-light"></i></div>
                            <p class="px-2">Competent</p>
                        </div>
                        <div class="col-md-4 d-flex">
                            <div><i class="bi bi-check bg-primary rounded-circle text-light"></i></div>
                            <p class="px-2">Transparent</p>
                        </div>
                    </div>
                    <h4 class="pt-5 pb-sub2">What happens next?</h4>
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
                <div class=" col-md-6 ">
                    <div class="bg-white py-3 rounded contact-form">
                        <h2 class="text-center">Schedule a Free Consultation</h2><hr/>
                        <form class="mx-4">
                            <div class="row mb-3">
                                <div class="form-group col-6">
                                    <label for="firstName">First Name</label>
                                    <input type="text" class="form-control" name="firstName" value=""/>
                                </div>
                                <div class="form-group col-6">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" class="form-control" name="lastName" value=""/>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" name="email" value=""/>
                            </div>
                            <div class="form-group mb-3">
                                <label for="company">Company / Organization</label>
                                <input type="text" class="form-control" name="company" value=""/>
                            </div>
                            <div class="form-row mb-3">
                                <label for="phone">Phone Number</label>
                                <div class=" react-tel-input ">
                                    <div class="special-label">Phone</div>
                                    <input class="form-control " placeholder="Enter phone number" type="tel" value="+91"/>
                                        <div class="flag-dropdown ">
                                            <div class="selected-flag" title="India: + 91" tabindex="0" role="button" aria-haspopup="listbox">
                                                <div class="flag in">
                                                    <div class="arrow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="helpDropdown">How Can We Help You With</label>
                                    <select class="form-control" name="helpDropdown">
                                        <option value="">Select an option</option>
                                        <option value="Managed Services">Managed Services</option>
                                        <option value="IT Consulting &amp; Advisory">IT Consulting &amp; Advisory</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile Development">Mobile Development</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="message">Message</label>
                                    <textarea class="form-control" name="message" rows="4"></textarea>
                                </div>
                                <div class="py-2  d-flex justify-content-between">
                                    <div class="py-3">
                                        <button type="submit" class="primary-button fw-semibold btn-block">Submit</button>
                                    </div>
                                    <div class="alert alert-" role="alert"></div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
     </div>
    )
}


export default Section;