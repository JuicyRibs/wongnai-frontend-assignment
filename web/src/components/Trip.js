import React from "react";

function Trip(props) {
  console.log(props.trips[0]);
  return (
    <div>
      {props.trips.map((trip) => (
        <div className="row flex-column flex-md-row justify-content-center mb-5" key={trip.eid}>
          <div className="col-lg-2 col-md-4 col-12">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${trip.photos[0]})`,
              }}
            ></div>
          </div>
          <div className="col-lg-4 col-md-8 col-12">
            <div className="row text-start align-middle location-text">
              <div className="location-name" style={{ height: "45px" }}>
                <a href={trip.url}>{trip.title}</a>
              </div>
              <div
                className="location-description cloud l"
                style={{ height: "78px" }}
              >
                {trip.description.substring(0, 200)}<a href={trip.url} className="readMore"> &#8230;อ่านต่อ</a>
              </div>
              <div className="tagList cloud l" style={{ height: "68px" }}>
                <div>
                  หมวด - &nbsp;
                  {trip.tags.map((tag, index, tags, trip) => (
                    <span>
                      {index === tags.length - 1 ? " และ " : ""}
                      <span className="tags" key={index} onClick={props.tagClick.bind(this, tag)}>
                        {tag}
                      </span>{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="row justify-content-center justify-content-md-start">
              <span
                className="preview"
                style={{
                  backgroundImage: `url(${trip.photos[1]})`,
                }}
              ></span>

              <span
                className="preview"
                style={{
                  backgroundImage: `url(${trip.photos[2]})`,
                }}
              ></span>

              <span
                className="preview"
                style={{
                  backgroundImage: `url(${trip.photos[3]})`,
                }}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trip;
