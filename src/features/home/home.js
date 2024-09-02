import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide px-5">
      <div> <p id="ppp" >
              Let's Elevate Your Ride Experience With Rhyno – Where Superiority
              Meets <span>Style</span>.
            </p></div>
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-caption d-none d-md-block">
            <button className="btn bg-primary">
              <a href="prebook"> prebook Now</a>
            </button>  &nbsp; &nbsp; &nbsp;
            <button className="btn bg-info">
              <a href="max"> Product Check Out</a>
            </button>

          </div>
          <img
            width={100}
            height="100%    "
            src="/images/final-design.png"
            class="d-block w-100"
            alt="electric"
          />
        </div>
        <div class="carousel-item">
          <div class="carousel-caption d-none d-md-block">
            <button className="btn bg-primary">
              <a href="prebook"> prebook Now</a>
            </button> &nbsp; &nbsp; &nbsp;
            <button className="btn bg-info">
              <a href="lite"> Product Check Out</a> 
             </button> 
          </div>
          <img
            width={100}
            height="100%"
            src="/images/Rhyno-EV.jpg"
            class="d-block w-100"
            alt="electric"
          />
        </div>
        <div class="carousel-item">
          <div class="carousel-caption d-none d-md-block">
            <div>
              <button className="btn bg-primary">
                <a href="prebook"> prebook Now</a>
              </button>  &nbsp; &nbsp; &nbsp;
              <button className="btn bg-info">
              <a href="seo"> Product Check Out</a>
            </button>
            </div>
            {/* <p  id="ppp">
              Let's Elevate Your Ride Experience With Rhyno – Where Superiority
              Meets Style.
            </p> */}
          </div>
          <img
            width={100}
            height="100%"
            src="/images/Rhyno-electric.jpg"
            class="d-block w-100"
            alt="electric"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div className=" py-5 d-flex">
        <div className="col-6 pe-3">
          <div class="card">
            <div class="card-body border-bottom">
              <p class="card-text">
                <b>LFP Battery :</b> Rhyno is equipped with Lithium Iron
                Phosphate (LFP) batteries, renowned for their safety
                features—eliminating the risk of fire associated with other
                Lithium batteries. These batteries boast a broader temperature
                range, ideal for the diverse Indian climate.
              </p>
            </div>
            <div className="p-2">
              <img
                src="/images/lfp_batteries.jpg"
                class="card-img-top"
                alt="lfp_batteries"
              />
            </div>
          </div>
        </div>
        <div className="col-6 ps-3">
          <div class="card">
            <div class="card-body border-bottom">
              <p class="card-text">
                <b>Wider tyres :</b> Now, say goodbye to skidding and embrace
                the leaning turns! Featuring first-of-its-kind, 9.5-inch wider
                tyres that make this machine an enormous beast that ensures
                stability on different terrains such as wet roads, mud, and
                sand.
              </p>
            </div>
            <div className="p-2">
              <img
                src="/images/wider-tyres.webp"
                class="card-img-top"
                alt="wider-tyres"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="col-3">
          <h3>Range prediction</h3>
          <p>
            Many budget-friendly electric scooters overlook this crucial
            feature, causing riders to experience range anxiety. With Rhyno, you
            can ride with peace of mind, thanks to the scooter providing precise
            information about the remaining battery.
          </p>
        </div>
        <div className="col-3">
          <h3>Extraordinery Experience</h3>
          <p>
            Rhyno is more than just a mode of transportation. It is an
            experience of sheer comfort and style! A seamless fusion of
            minimalism, sophistication, and a touch of masculinity!
          </p>
        </div>
        <div className="col-3">
          <h3>Rugged and simple Design</h3>
          <p>
            We ve had enough of the EVs looking and feeling like fragile plastic
            toys. Often fading out and shamelessly breaking in minor accidents,
            ending up spending weeks and months at service stations for complex
            repairs.
          </p>
        </div>
      </div>
    </div>
  );
}
