import "./tags.scss";
import { Link } from "react-router-dom";

const Tags = () => {
  return (
    <div className="popularTags">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="h-1">
              <h1>
                <span>Hey, we’re Reiro. </span> We promote positive culture
                through <span>inspiring articles</span> on health, design, and
                web.
              </h1>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="inputs">
              <Link to="/">
                <input
                  type="text"
                  placeholder="Search posts and taqs"
                />
              </Link>
              <Link to="/">
                 <button>Search</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
