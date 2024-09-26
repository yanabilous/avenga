import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email address is required"),
  message: Yup.string().required("Message is required"),
  agree: Yup.bool().oneOf([true], "You must agree to the terms and conditions")
});

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Ready to innovate in your business?</h2>
      <p className="contact-form__subtitle">We! Let's start our path to success!</p>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          message: "",
          agree: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({isSubmitting}) => (
          <Form className="contact-form__form">
            <div className="contact-form__field">
              <Field type="text" name="fullName" placeholder="Full name"/>
              <ErrorMessage name="fullName" component="div" className="contact-form__error"/>
            </div>

            <div className="contact-form__field">
              <Field type="email" name="email" placeholder="Email address"/>
              <ErrorMessage name="email" component="div" className="contact-form__error"/>
            </div>

            <div className="contact-form__field">
              <Field as="textarea" name="message" placeholder="Message"/>
              <ErrorMessage name="message" component="div" className="contact-form__error"/>
            </div>

            <div className="contact-form__checkbox">
              <div className="flex">
                <label>
                  <Field type="checkbox" name="agree"/>
                </label>
                <span>Yes, I have read and agree to the Data Privacy and Legal Notice.*</span>
              </div>
            </div>

            <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
              Send <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clipPath="url(#clip0_0_306)">
                <path
                  d="M13.0979 0H2.51865C2.021 0 1.61631 0.404688 1.61631 0.902344C1.61631 1.4 2.021 1.80469 2.51865 1.80469H10.9159L0.265527 12.4578C-0.087207 12.8105 -0.087207 13.382 0.265527 13.7348C0.618262 14.0875 1.18975 14.0875 1.54248 13.7348L12.1929 3.08164V11.4789C12.1929 11.9766 12.5976 12.3813 13.0952 12.3813C13.5929 12.3813 13.9976 11.9766 13.9976 11.4789V0.902344C14.0003 0.404688 13.5956 0 13.0979 0Z"
                  fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_0_306">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;