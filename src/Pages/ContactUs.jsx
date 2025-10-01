import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-base-200  items-center justify-center px-6">
        <div className="flex flex-col lg:flex-row-reverse justify-center gap-10 items-center w-full  min-h-[calc(100vh-64px)] ">
          <div className="lg:w-1/3  lg:text-left">
            <h1 className="text-5xl font-bold text-center">Contact Us</h1>
            <p className="py-6 text-2xl lg:text-4xl wrap-anywhere">
              At Plant Tree, we’re always happy to connect with you. Whether
              you’re curious about our trees, need planting advice, or have
              questions about your order, our team is here to help every step of
              the way. <br /> <br />
              📱 Phone: <a href="">+880 1234-567890 </a>
              <br />
              ✉️ Email:{" "}
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                tusharchowdhury20211@gmail.com
              </a>{" "}
              <br /> <br />
              You can also reach us directly through our Contact Form below.
              Simply fill in your details, write your message, and submit—it
              only takes a minute. Once we receive your request, our team will
              get back to you as soon as possible to provide the help and
              guidance you need.
            </p>
          </div>
          <div className=" flex bg-base-100 w-full justify-center items-center  lg:w-1/2 shadow-2xl h-full">
            <div className="card-body w-full h-full">
              <fieldset className="fieldset">
                <label className="label text-2xl">Your Name</label>
                <input
                  type="email"
                  className="input w-full text-2xl"
                  placeholder="Your Name"
                />
                <label className="label  text-2xl">Email</label>
                <input
                  type="email"
                  className="input w-full text-2xl"
                  placeholder="Email"
                />
                <label className="label  text-2xl">Enquiry</label>
                <input
                  type="text"
                  className="input w-full text-2xl"
                  placeholder="Ask About Plant"
                  required
                />
                <label className="label text-2xl">Phone</label>
                <input
                  type="text"
                  className="input w-full text-2xl"
                  placeholder="Your Phone Number"
                />

                <button className="btn btn-neutral mt-4 text-2xl">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
