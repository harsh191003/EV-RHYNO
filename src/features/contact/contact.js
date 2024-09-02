import "./contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="contact row m-0 p-5">
        <div className="col-6 color p-3">
          <div className="text-center ">
            <h2>Contact Us</h2>
          </div>
          <div className="py-3">
            <span>Email : </span>
            <lable> info@rhyno.in</lable>
          </div>
          <div className="py-3">
            <span>Phone : </span>
            <lable>+91-9023987528</lable>
          </div>

          <div className="py-3">
            <span>Location : </span>
            <lable>
              Location: Rhyno Wheels Private limited, Near UG hostel gate #2,
              Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
            </lable>
          </div>
          <marquee><i>Connect with Us for more detail information</i></marquee>
          {/* <hr> <h1>Connect with Us for more detail information</h1></hr> */}
        </div>

        <div className="col-6 ">
          <div className="row justify-content-center py-5 m-0">
            <div className="col-10 p-3">
              <div className="text-center pb-3">
                <h3>Your Details</h3>
              </div>
              <div className="form">
                <h6>Name :</h6>
                <input
                  className="col-9 p-2"
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                ></input>
              </div>
              <div className="form">
                <h6>Phone No :</h6>
                <input
                  className="col-9 p-2"
                  type="number"
                  placeholder="Phone Number"
                  required
                  name="phone"
                ></input>
              </div>
              <div className="form">
                <h6>Email :</h6>
                <input
                  className="col-9 p-2"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                ></input>
              </div>
              <div className="form">
                <h6>Location :</h6>
                <input
                  className="col-9 p-2"
                  type="text"
                  placeholder="Location"
                  required
                  name="location"
                ></input>
              </div>
              <div className="form">
                <h6>Gender :</h6>
                <select className="col-9  p-2">
                  <option>select</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="text-center">
                <button
                  className="px-3 py-2"
                  onClick={() => {
                    alert("Successfully Submited");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
