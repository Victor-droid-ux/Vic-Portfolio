import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className="pt-16 pb-20 bg-[#050709] text-white">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10">
        {/* Contact Form */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-bottom">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-base mt-4">
            I'm here to help you with any questions or concerns you may have.
            Please fill out the form below to get in touch with us.
          </p>
          <p className="text-base mt-4">
            I will get back to you as soon as possible.
          </p>
          <p className="text-base mt-4">
            Thank you for your interest in my services.
          </p>

          <ContactForm />
        </div>

        {/* Contact Information */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
          className="xl:mx-auto"
        >
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
