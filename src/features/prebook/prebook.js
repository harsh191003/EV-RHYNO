import "./prebook.css";

export default function Prebook() {
  return (
    <div className="prebook p-3"><br></br><br></br><br></br>
      <div className="row justify-content-center m-0" >
        <div className="col-4 p-3">
          <div className="text-center pb-3">
            <h3>Prebook</h3>
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
            <h6>Products :</h6>
            <select className="col-9  p-2" >
              <option>select</option>
              <option>Rhyno SE03 Lite</option>
              <option>Rhyno SE03</option>
              <option>Rhyno SE03 Max </option>
            </select>
          </div>
          <div className="form">
            <h6>color :</h6>
            <select className="col-9  p-2">
              <option>select</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Black</option>
              <option>yellow</option>
            </select>
          </div>
          <div className="text-center">
            <button
              className="px-3 py-2"
              onClick={() => {
                alert("Order recorded Successfully");
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
