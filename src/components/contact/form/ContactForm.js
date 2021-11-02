import { Component } from "react";
import { FaChevronCircleRight, FaTimes } from "react-icons/fa";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.createFormSet = this.createFormSet.bind(this);
  }

  createFormSet(props) {
    return (
      <div className="contact-form-set">
        <span>{props.contactFrmSpan}</span>

        <input
          type={props.contactFrmType}
          placeholder={props.contactFrmInputPH}
          name={props.contactFrmInputName}
          autoComplete="off"
          required
          className="contact-form-input"
        />
      </div>
    );
  }

  componentDidMount() {
    const resetBtn = document.getElementById("contactFormReset");
    const submitBtn = document.getElementById("contactFormSubmit");
    const allFormInputs = document.querySelectorAll(".contact-form-input");

    // This will reset the drop-shadow glow effect for all the form inputs
    function resetFormInputs() {
      allFormInputs.forEach((input) => {
        input.style.filter = "drop-shadow(0 0 0 white)";
      });
    }

    // This will check to see if any of the form inputs have a valid value, if not it will
    // highlight the inputs with a red drop-shadow and ignore the inputs with valid values
    function grabInvalidInputs() {
      allFormInputs.forEach((input) => {
        if (input.value == "") {
          input.style.filter = "drop-shadow(2px 2px 10px #FF8282)";
        }
        setTimeout(() => {
          resetFormInputs();
        }, 2500);
        setTimeout(() => {
          if (!input.value == "") {
            input.style.filter = "drop-shadow(2px 2px 10px #dc986a)";
          }
        }, 2520);
      });
    }

    // This will detect when the user has inputted a valid value into any of the
    // form inputs and will highlight them with a orange drop-shadow
    function grabValidInputs() {
      allFormInputs.forEach((input) => {
        if (!input.value == "") {
          input.style.filter = "drop-shadow(2px 2px 10px #dc986a)";
        }
      });
    }

    resetBtn.addEventListener("click", () => {
      resetFormInputs();
    });
    submitBtn.addEventListener("click", () => {
      setTimeout(() => {
        grabInvalidInputs();
      }, 20);
    });
    allFormInputs.forEach((input) => {
      input.addEventListener("keyup", grabValidInputs);
    });
  }

  render() {
    return (
      <div id="contactFormMain">
        <div
          className="contact-form-cnt aos-fade"
          data-aos="fade-in"
          data-aos-delay="600"
          data-aos-duration="600"
        >
          <form action="#" method="#" id="contactForm">
            <div className="contact-form-group">
              <this.createFormSet
                contactFrmSpan="First Name:"
                contactFrmType="text"
                contactFrmInputPH="John/Jane"
                contactFrmInputName="frmFN"
              ></this.createFormSet>
            </div>

            <div className="contact-form-group">
              <this.createFormSet
                contactFrmSpan="Last Name:"
                contactFrmType="text"
                contactFrmInputPH="Doe"
                contactFrmInputName="frmLN"
              ></this.createFormSet>
            </div>

            <div className="contact-form-group">
              <this.createFormSet
                contactFrmSpan="Email Address:"
                contactFrmType="email"
                contactFrmInputPH="burner@gmail.com"
                contactFrmInputName="frmEA"
              ></this.createFormSet>
            </div>

            <div className="contact-form-group">
              <this.createFormSet
                contactFrmSpan="Phone Number:"
                contactFrmType="tel"
                contactFrmInputPH="202-555-0464"
                contactFrmInputName="frmFN"
              ></this.createFormSet>
            </div>

            <div className="contact-form-group">
              <div className="contact-form-set">
                <span>Message:</span>

                <textarea
                  placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                  name="frmMSG"
                  required
                  className="contact-form-input"
                ></textarea>
              </div>

              <div className="contact-form-btns">
                <button type="reset" id="contactFormReset">
                  <p>Reset</p> <FaTimes className="fa-icon" />
                </button>

                <button type="submit" id="contactFormSubmit">
                  <p>Send</p> <FaChevronCircleRight className="fa-icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
