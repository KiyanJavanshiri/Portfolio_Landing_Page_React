import React from "react";
import { Formik, Form } from "formik";
import { validationScheme } from "@/utils/validation";
import Input from "@/components/Input";
import Container from "@/layout/Container";
import LocationIcon from "@/assets/icons/location.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import TwitterIcon from "@/assets/icons/twitter.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";

interface InitialValuesType {
  name: string;
  email: string;
  phone: string;
  partner1: string;
  partner2: string;
  date: string;
  guests: string;
  additionalInfo: string;
}

const ContactUs = () => {
  const initialValue: InitialValuesType = {
    name: "",
    email: "",
    phone: "",
    partner1: "",
    partner2: "",
    date: "",
    guests: "",
    additionalInfo: "",
  };
  const socials = [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <InstagramIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
  ];
  return (
    <section id="contactus" className="mb-12">
      <Container>
        <div className="md:mx-auto md:max-w-[800px] lg:max-w-[1040px] flex flex-col gap-y-14 md:flex-row md:justify-between  md:items-center">
          <div className="md:w-[300px] lg:w-[480px]">
            <h2 className="font-cormorant text-primary-500 text-[32px] leading-10 -tracking-[2%] font-bold mb-1">
              Contact us
            </h2>
            <p className="font-inter font-normal leading-6 text-base text-primary-300">
              we are excited to get planning!
            </p>
            <Formik
              initialValues={initialValue}
              validationSchema={validationScheme}
              onSubmit={(values: InitialValuesType) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="mt-6">
                  <div className="flex flex-col gap-y-2 mb-6">
                    <h3 className="text-base leading-6 text-primary-500 text-inter font-medium">
                      Contact information
                    </h3>
                    <Input
                      name="name"
                      type="text"
                      className="px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="Name"
                      error={!!(errors.name && touched.name)}
                    />
                    <Input
                      name="email"
                      type="text"
                      className="px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="Email"
                      error={!!(errors.email && touched.email)}
                    />
                    <Input
                      name="phone"
                      type="text"
                      className="px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="Phone no."
                      error={!!(errors.phone && touched.phone)}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-base leading-6 text-primary-500 text-inter font-medium">
                      Who’s getting married?
                    </h3>
                    <Input
                      name="partner1"
                      type="text"
                      className="px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="Partner 1"
                      error={!!(errors.partner1 && touched.partner1)}
                    />
                    <Input
                      name="partner2"
                      type="text"
                      className="px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="Partner 2"
                      error={!!(errors.partner2 && touched.partner2)}
                    />
                    <Input
                      name="date"
                      type="text"
                      className="px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="MM/YY"
                      error={!!(errors.date && touched.date)}
                    />
                    <Input
                      name="guests"
                      type="text"
                      className="px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="Expected number of guests"
                      error={!!(errors.guests && touched.guests)}
                    />
                    <Input
                      name="additionalInfo"
                      type="text"
                      className="h-[162px] resize-none px-4 py-2 border-1 border-solid border-neutral-20 rounded-[8px] bg-neutral-0 w-full text-base leading-6 font-normal font-inter placeholder:text-neutral-40 text-primary-500"
                      placeholder="Tell us anything more that can help!"
                      error={!!(errors.additionalInfo && touched.additionalInfo)}
                      component="textarea"
                    />
                  </div>
                  <button
                    className="mt-6 block w-full text-center px-4 py-2 rounded-[8px] bg-primary-500 text-base font-semibold leading-7 text-neutral-0 lg:max-w-[160px] cursor-pointer"
                    type="submit"
                  >
                    Send
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="">
            <picture className="relative block rounded-[8px]">
              <img
                className="w-full h-full rounded-[8px] object-cover"
                src="/images/map.png"
                alt="location"
              />
              <picture className="absolute top-[165px] left-[159px]">
                <LocationIcon />
              </picture>
            </picture>
            <div className="text-center mt-6 md:text-left">
              <h4 className="mb-2 text-base font-medium text-primary-500 leading-6 font-inter">Head office</h4>
              <p className="mx-auto max-w-[248px] text-center text-base font-normal text-primary-400 leading-6 font-inter md:mx-0 md:text-left">
                Via Roma, 123 <span className="block">20121 Milano (MI)</span> <span className="block">Italy</span>
              </p>
              <p className="mx-auto max-w-[248px] mt-2 text-base font-normal text-primary-400 leading-6 font-inter md:mx-0">Phone: +39 (0)322 221211</p>
              <p className="mx-auto max-w-[248px] text-base font-normal text-primary-400 leading-6 font-inter md:mx-0">Mobile: +39 328 2211212</p>
              <h4 className="text-base font-medium text-primary-500 leading-6 font-inter mt-6">Follow us</h4>
              <ul className="flex justify-center items-center gap-x-2 mt-4 md:justify-start">
                {socials.map((el, i) => (
                  <li key={i}>
                    <picture>
                      <a href={el.link}>{el.icon}</a>
                    </picture>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
