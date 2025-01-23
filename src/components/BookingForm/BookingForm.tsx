import { Field, Form, Formik } from "formik";

const BookingForm = () => {
  return (
    <div>
      <p>Book your campervan now</p>
      <p>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field name="name" placeholder="Name" />

          <Field name="email" type="email" placeholder="Email" />

          <Field name="bookingDate" type="date" placeholder="Booking date" />

          <Field name="comment" placeholder="comment" />

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
