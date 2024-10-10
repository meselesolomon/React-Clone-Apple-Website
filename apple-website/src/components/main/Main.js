import React from "react";
// import "../../css/style.css";

function Main() {
  return (
    <div className="outer-wrapper">
      {/* Macbook air div  */}
      <div className="macbook">
        <div className="macbook__image macbook-apple-images">
          <div className="macbook__contents">
            <div className="macbook__contents--model">
              <h2>MacBook Air</h2>
            </div>
            <div className="macbook__contents--title">
              <p>Learn. Mean. M3 machine.</p>
            </div>
            <div className="macbook__links">
              <ul>
                <a className="macbook__links--learn" href="learn">
                  Learn more
                </a>
                <a className="macbook__links--buy" href="#">
                  Buy
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="iphone">
        <div className="iphone__image macbook-apple-images">
          <div className="iphone__contents">
            <div className="iphone__contents--model">
              <h2>iPhone</h2>
            </div>
            <div className="iphone__contents--title">
              <h4>Our most powerful cameras yet.</h4>
              <h4>Ultrafast chips. And USB-C.</h4>
            </div>
            <div className="iphone__links">
              <ul>
                <a className="iphone__links--learn" href="">
                  Learn more
                </a>
                <a className="iphone__links--iphone" href="">
                  Shop iPhone
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ipad div  --> */}
      <div className="ipad-apple">
        <div className="ipad ipad__image all-images">
          <div className="ipad__contents ">
            <div className="ipad__contents--model">
              <h2>iPad pro</h2>
            </div>
            <div className="ipad__contents--title">
              <h4>Unblievably thin. Incredibly powerful..</h4>
            </div>
            <div className="ipad__links">
              <ul>
                <a className="ipad__links--learn" href="">
                  Learn more
                </a>
                <a className="ipad__links--ipad" href="">
                  Buy
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="apple apple__image all-images">
          <div className="apple__contents ">
            <div className="apple__contents--model">
              <h2>Apple Intelligence</h2>
            </div>
            <div className="apple__contents--title">
              <h4>AI for the rest of us.</h4>
              <h4>
                Coming in beta this fall <sup>1</sup>.
              </h4>
            </div>
            <div className="apple__links">
              <ul>
                <a className="apple__links--learn" href="">
                  Learn more
                </a>
                <a className="apple__links--apple" href="">
                  Watch the film
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- vision iphone div  --> */}
      <div className="vision-iphone">
        <div className="ipad vision-pro__image all-images">
          <div className="vision__contents vision-pro__contents">
            <div className="ipad__contents--model">
              <h2 className="logo-image-vision"></h2>
            </div>
            <div className="vision__contents--title">
              <h4>The era of spatial computing is here.</h4>
            </div>
            <div className="ipad__links">
              <ul>
                <a className="ipad__links--learn" href="">
                  Learn more
                </a>
                <a className="ipad__links--ipad" href="">
                  Buy
                </a>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="apple apple-vision__images all-images">
          <div className="apple__contents ">
            <div className="apple__contents--model">
              <h2>Apple Intelligence</h2>
            </div>
            <div className="apple__contents--title">
              <h4>AI for the rest of us.</h4>
              <h4>
                Coming in beta this fall <sup>1</sup>.
              </h4>
            </div>
            <div className="apple__links">
              <ul>
                <a className="apple__links--learn" href="">
                  Learn more
                </a>
                <a className="apple__links--apple" href="">
                  Watch the film
                </a>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="iphone-tradein iphone-tradein__image  all-images">
          <div className="iphone-tradein__contents ">
            <div className="iphone-tradein__contents--model">
              <h2>Trade in</h2>
            </div>
            <div className="iphone-tradein__contents--title">
              <h4>Get $170-$620 in credit when you.</h4>
              <h4>
                trade in iPhone 11 or higher <sup>2</sup>.
              </h4>
            </div>
            <div className="iphone-tradein__links">
              <ul>
                <a className="iphone-tradein__links--learn" href="">
                  Get your estimate
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="atm-card-iphone">
        {/* <div className="atm-card atm-card__image all-images">
          <div className="atm-card__contents atm-card-pro__contents">
            <div className="atm-card__contents--model">
              <h2 className="logo-image-vision-2"></h2>
            </div>
            <div className="atm-card__contents--title">
              <h4>Get up to 3% Daily Cash back</h4>
              <h4>with every purchase.</h4>
            </div>
            <div className="atm-card__links">
              <ul>
                <a className="atm-card__links--learn" href="">
                  Learn more
                </a>
                <a className="atm-card__links--atm-card" href="">
                  {" "}
                  Apply now
                </a>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Main;
