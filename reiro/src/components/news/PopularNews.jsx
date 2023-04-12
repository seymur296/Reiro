import "./popularnews.scss";
import { Link } from "react-router-dom";
import healty from "../../images/helthy.jpeg";
import damian from "../../images/damian.jpg";
import phone from "../../images/phone.jpeg";
import bitcoin from '../../images/bitcoin.jpeg'
import andrea from '../../images/andrea.jpg'

const PopularNews = () => {
  return (
    <div className="news">
      <div className="container-box">
        <div className="healt-news">
          <div className="h-6">
            <h6>WHAT’S NEW?</h6>
          </div>
          <div className="img1">
            <Link to="/">
              <img src={healty} alt={healty} />
            </Link>
          </div>
          <div className="life-style">
            <Link to="/">
              <button>LifeStyle</button>
              <button>Eco</button>
              <button>Health</button>
            </Link>
          </div>
          <div className="h-1">
            <a href="/">
              <h1>
                The trick to getting more <br /> done is to have the freedom{" "}
                <br /> to roam around
              </h1>
            </a>
            <p>
              Vel lectus vel velit pellentesque dignissim nec id magna. Cras
              molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
              venenatis justo. Nullam felis augue, imperdiet at sodales.
            </p>
          </div>
          <div className="authors">
            <div className="damian">
              <img src={damian} alt={damian} />
            </div>
            <div className="p-tag">
              <p>
                by<a href="/"> Breana Flatley</a> &{" "}
                <a href="/">Damian Erdman</a>
                <br />
                October 7, 2022 ∙ 4 min read
              </p>
            </div>
          </div>
          <div className="authors">
            <div className="damian">
              <img src={andrea} alt={andrea} />
            </div>
            <div className="p-tag">
              <p>
                by<a href="/"> Breana Flatley</a> &{" "}
                <a href="/">Damian Erdman</a>
                <br />
                October 7, 2022 ∙ 4 min read
              </p>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <div className="box1">
            <div className="box-child">
              <h6>
                NEWSLETTER <br />
                <span>
                  Get all the latest posts delivered straight to your inbox.
                </span>
              </h6>
              <input type="email" placeholder="Your email adress" /> <br />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="box2">
            <a href="/">
              <img src={phone} alt={phone} />
            </a>
          </div>
          <div className="life-style">
            <Link to="/">
              <button>Idea</button>
              <button>App</button>
            </Link>
          </div>
          <div className="h-1">
            <a href="/">
              <h4>
                 AI can solve new problems  <br /> very easily
              </h4>
            </a>
          </div>

          <div className="box2">
            <a href="/">
              <img src={bitcoin} alt={bitcoin} />
            </a>
          </div>
          <div className="life-style">
            <Link to="/">
              <button>Idea</button>
              <button>App</button>
            </Link>
          </div>
          <div className="h-1">
            <a href="/">
              <h4>
              There are still many <br /> questions left to answer
              </h4>
            </a>
          </div>
          {/* <div className="p-tag">
                <p>by<a href="/"> Damian Edwards</a></p>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
