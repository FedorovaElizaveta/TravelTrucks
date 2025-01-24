import css from "./BookingForm.module.css";
import { Field, Form, Formik } from "formik";

const BookingForm = () => {
  return (
    <div className={css.formWrapper}>
      <p className={css.formHeading}>Book your campervan now</p>
      <p className={css.formInvitationText}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        onSubmit={(values) => {
          const data = `
            Name: ${values.name}
            Email: ${values.email}
            Booking Date: ${values.bookingDate}
            Comment: ${values.comment}`;

          alert(data);
        }}
      >
        <Form className={css.form}>
          <Field name="name" placeholder="Name" className={css.userDataField} />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className={css.userDataField}
          />

          <Field
            name="bookingDate"
            placeholder="Booking date"
            className={css.userDataField}
          />

          <Field
            name="comment"
            placeholder="Comment"
            className={css.commentField}
          />

          <button type="submit" className={css.submitBtn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
