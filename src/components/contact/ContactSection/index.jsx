import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-white w-full lg:pt-16 lg:pb-20 py-6 max-w-7xl mx-auto">
      <section className="lg:px-28 px-2">
        <p className="poppins lg:mb-16 mb-4">
          <span className="text-[#808080]">Home /</span> Contact
        </p>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          {/* left side */}
          <div className="lg:w-[31%] flex flex-col gap-8 px-5 py-8 shadow">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img
                  src="./assets/icon/icons-phone.svg"
                  alt
                  className="cursor-pointer h-9"
                />
                <h5 className="text-base font-medium poppins">Call To Us</h5>
              </div>
              <p className="text-sm poppins">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm poppins">Phone: +8801611112222</p>
            </div>
            <hr className="h-0.5 bg-black" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img
                  src="./assets/icon/icons-mail.svg"
                  alt
                  className="cursor-pointer h-9"
                />
                <h5 className="text-base font-medium poppins">Write To US</h5>
              </div>
              <p className="text-sm poppins">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm poppins">Emails: customer@exclusive.com</p>
              <p className="text-sm poppins">Emails: support@exclusive.com</p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-[69%] flex flex-col gap-5 px-6 py-8 shadow">
            {/* upper */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
              <input
                type="search"
                name
                id="name"
                placeholder="Your Name *"
                className="bg-[#f5f5f5] pl-3 py-2 rounded outline-none lg:w-4/12 w-full poppins"
              />
              <input
                type="search"
                name
                id="email"
                placeholder="Your Email *"
                className="bg-[#f5f5f5] pl-3 py-2 rounded outline-none lg:w-4/12 w-full poppins"
              />
              <input
                type="search"
                name
                id="phone"
                placeholder="Your Phone *"
                className="bg-[#f5f5f5] pl-3 py-2 rounded outline-none lg:w-4/12 w-full poppins"
              />
            </div>
            {/* lower */}
            <div className>
              <textarea
                name
                placeholder="Your Massage"
                id
                cols={60}
                rows={8}
                className="bg-[#f5f5f5] pl-4 py-2 rounded w-full outline-none poppins"
                defaultValue={""}
              />
            </div>
            <div className="flex flex-row justify-center lg:justify-end">
              <button
                type="submit"
                className="py-3 px-8 rounded-md bg-[#db4444] text-white text-base font-medium poppins"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
