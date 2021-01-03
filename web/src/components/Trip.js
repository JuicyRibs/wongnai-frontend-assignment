import React from "react";

function Trip() {
  return (
    <div className="mb-5">
      <div className="row justify-content-center">
        <div className="col-2">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg)`,
            }}
          ></div>
        </div>
        <div className="col-4">
          <div className="row text-start location-text">
            <div className="location-name" style={{ height: "60px" }}>Place Name</div>
            <div className="location-description" style={{ height: "100px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, dolor vitae tempus scelerisque, nisl ante semper ante, non vehicula orci velit in tellus. Integer tincidunt enim ut dolor ultrices convallis. Morbi et dui non risus dapibus consequat. Cras nec sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, dolor vitae tempus scelerisque, nisl ante semper ante, non vehicula orci velit in tellus. Integer tincidunt enim ut dolor ultrices convallis. Morbi et dui non risus dapibus consequat. Cras nec sem</div>
            <div className="tags" style={{ height: "40px" }}>
              <span>Tag1</span>
              <span>Tag2</span>
              <span>Tag3</span>
            </div>
          </div>
          <div className="row justify-content-start">
              <span
                className="preview"
                style={{
                  backgroundImage: `url(https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg)`,
                }}
              ></span>

              <span
                className="preview"
                style={{
                  backgroundImage: `url(https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg)`,
                }}
              ></span>


              <span
                className="preview"
                style={{
                  backgroundImage: `url(https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg)`,
                }}
              ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
