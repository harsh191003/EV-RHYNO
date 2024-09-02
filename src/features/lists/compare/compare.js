import "./compare.css";

export default function Compare() {
  return (
    <div className="compare px-5 pt-3 pb-5">
      <div className="row m-0 ">
        <div className="col-6 py-3">
          <div>
            <h2>Rhyno SEO3 Lite ,Rhyno SEO3 and Rhyno SEO3 Max</h2>
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
        </div>
        <div className="col-6">
          <div className="row justify-content-center align-items-center">
            <img src="/images/grp.png" alt="Rhyno-EV"></img>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10">
          <table className="table table-striped table-dark m-0">
            <thead>
              <tr>
                <th scope="col">Specification</th>
                <th scope="col">Rhyno SE03 Lite </th>
                <th scope="col">Rhyno SE03 </th>
                <th scope="col">Rhyno SE03 Max </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Battery </th>
                <td>1.8Kwh</td>
                <td>2.7Kwh</td>
                <td>2.7Kwh</td>
              </tr>
              <tr>
                <th scope="row">Battery features</th>
                <td>LFP with 1500 cycles Active Balancing Waterproof (IP67)</td>
                <td>
                  LFP with 1500 cycles Active Balancing Waterproof (IP67){" "}
                </td>
                <td>LFP with 1500 cycles Active Balancing Waterproof (IP67)</td>
              </tr>
              <tr>
                <th scope="row">Battery warranty </th>
                <td>3 years</td>
                <td>3 years</td>
                <td>3 years</td>
              </tr>
              <tr>
                <th scope="row">Charging time </th>
                <td>3 hours (12A)</td>
                <td>4 hours (12A)</td>
                <td>4 hours (12A)</td>
              </tr>
              <tr>
                <th scope="row">Motor </th>
                <td>1500W</td>
                <td>1500W</td>
                <td>2000W</td>
              </tr>
              <tr>
                <th scope="row">Max speed </th>
                <td>55 km/h</td>
                <td>55 km/h</td>
                <td>65 km/h</td>
              </tr>
              <tr>
                <th scope="row">Warranty on electronics</th>
                <td>1 year</td>
                <td>1 year</td>
                <td>1 year</td>
              </tr>
              <tr>
                <th scope="row">Max range (@30km/h)</th>
                <td>100 km</td>
                <td>150 km</td>
                <td>120 km</td>
              </tr>
              <tr>
                <th scope="row">Max range (@45km/h)</th>
                <td>90 km </td>
                <td>110 km</td>
                <td>100 km</td>
              </tr>
              <tr>
                <th scope="row">Max range (@full speed)</th>
                <td>60 km</td>
                <td>90 km</td>
                <td>80 km</td>
              </tr>
              <tr>
                <th scope="row">Other key benefits</th>
                <td>
                  Fire-safe Battery Range prediction Comfortable ride Stable and
                  safe
                </td>
                <td>
                  Fire-safe battery Range prediction Comfortable ride Stable and
                  safe
                </td>
                <td>
                  Fire-safe battery Range prediction Comfortable ride Stable and
                  safe
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
