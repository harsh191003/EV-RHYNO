import "./seo.css";

export default function Seo() {
  return (
    <div className="seo px-5 pt-3">
      <div className="row m-0 ">
        <div className="col-6 py-3">
          <div>
            <h2>Rhyno SEO3</h2>
          </div>
          <div className="pb-3">
            <p>
              Indulge in the perfect harmony of power and range with this Rhyno.
              Offering an exhilarating experience with its robust 2000W motor,
              it ensures a thrilling ride while still delivering an impressive
              80-100km range on a single charge. Like its counterparts, this
              machine features the safety assurance of a fire-safe advanced LFP
              battery, along with the comprehensive benefits of owning a Rhyno.
              Boasting a formidable combination of a 2000W motor and a 2.7kWh
              battery, this beast is ready to roar on the roads, providing an
              electrifying journey at every turn. Check out the other details
              below!
            </p>
          </div>
          <div className="d-flex ">
            <div className="pe-4">
              <b>Colors :</b>
            </div>
            <div>
              <input type="radio" name="color" value="red"></input>
              <label>Red</label>
            </div>
            <div className="px-2">
              <input type="radio" name="color" value="blue"></input>
              <label>Blue</label>
            </div>
            <div>
              <input type="radio" name="color" value="black"></input>
              <label>Black</label>
            </div>
            <div className="px-2">
              <input type="radio" name="color" value="yellow"></input>
              <label>Yellow</label>
            </div>
          </div>
          <div className="pt-5">
            <button className="text-white bg-primary px-5 py-2 border-0">
              <a href="prebook">Buy Now</a>
            </button>
          </div>
        </div>
        <div className="col-6">
          <div className="row justify-content-center">
            <img src="/images/black.png" alt="Rhyno-EV"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
