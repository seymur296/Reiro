import "./feature.scss";
import phone from "../../images/phone.jpeg";
import fruit from "../../images/fruit.jpeg";
import tablet from "../../images/tablets.jpeg";


const Feature = () => {
  return (
    <div className="feature">
      <div className="h-6">
        <h6>FEATURED POSTS</h6>
      </div>
      <div className="container-box">
        <div className="edit">
          <div className="editors">
            <h3>Editor’s Choice</h3>
            <h1>
              Get started with our <br /> best stories
            </h1>
          </div>
        </div>
        <div className="stories">
          <div className="box1">
            <div className="box-child">
              <img src={phone} alt={phone} />
            </div>
            <div className="child-text">
              <h2>
                Al can solve new <br /> problems very easily
              </h2>
              <p>
                by <a href="/">Daryl Wehner</a>
              </p>
            </div>
          </div>
          <div className="box1">
            <div className="box-child">
              <img src={fruit} alt={fruit} />
            </div>
            <div className="child-text">
              <h2>
                A healthy outside starts <br /> from the inside
              </h2>
              <p>
                by <a href="/">Daryl Wehner</a>
              </p>
            </div>
          </div>
          <div className="box1">
            <div className="box-child">
              <img src={tablet} alt={tablet} />
            </div>
            <div className="child-text">
              <h2>
                It`s a new era in design <br />there are no rules
              </h2>
              <p>
                by <a href="/">Daryl Wehner</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
