import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import ContactAddress from "./ContactAddress";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name Required!"),
  email: Yup.string().email("Invalid Email Format").required("Email Required"),
  subject: Yup.string().required("Subject must be Given"),
  message: Yup.string().required("Kindly Comment Here"),
});

const onSubmit = (values, onSubmitProp) => {
  console.log("Form Data", values);

  onSubmitProp.resetForm();
};

const ContactForm = () => {
  return (
    <section className="section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h3 className="mb-4 pb-2">We'd love to hear from you</h3>
          </div>
          <div className="col-lg-6 col-12">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form className="custom-form contact-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-floating">
                          <Field
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Name"
                          />
                          <label htmlFor="floatingInput">Name</label>
                          <ErrorMessage name="name" component={TextError} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-floating">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            className="form-control"
                            placeholder="Email address"
                          />
                          <label htmlFor="floatingInput">Email address</label>
                          <ErrorMessage name="email" component={TextError} />
                        </div>
                      </div>
                      <div className="col-lg-12 col-12">
                        <div className="form-floating">
                          <Field
                            type="text"
                            name="subject"
                            id="name"
                            className="form-control"
                            placeholder="Name"
                          />
                          <label htmlFor="floatingInput">Subject</label>
                          <ErrorMessage name="subject" component={TextError} />
                        </div>
                        <div className="form-floating">
                          <Field
                            type="textarea"
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Tell me about the project"
                          />
                          <label htmlFor="floatingTextarea">
                            Tell me about the project
                          </label>
                          <ErrorMessage name="message" component={TextError} />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 ms-auto">
                        <button
                          type="submit"
                          disabled={!formik.isValid}
                          className="form-control"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <ContactAddress />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
