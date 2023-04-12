import "./posts.scss";
const Posts = () => {
  return (
    <div className="post">
      <div className="h-6">
        <h6>PREVIOUS POSTS</h6>
      </div>
      <div className="container-box">
        <div className="post-1">
          <div className="box-1">
            <div className="box-img">
              <div className="box-child1"></div>
            </div>

            <div className="box-child2">
              <div className="btns">
                <a href="/">
                  <button>LifeStyle</button>
                </a>
                <a href="/">
                  <button>Eco</button>
                </a>
                <a href="/">
                  <button>Health</button>
                </a>
              </div>
            </div>
            <div className="box-child3">
              <a href="/">
                <h2>
                  We are stronger as a group <br /> than an individual
                </h2>
              </a>
              <p>
                Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus.
                Vivamus lobortis posuere enim finibus sodales. Phasellus quis
                tellus scelerisque, sagittis tortor et,... <br />
                by <a href="/">Damian Erdman</a>
              </p>
            </div>
          </div>

          <div className="box-2">
            <div className="box-img">
              <div className="box-child1"></div>
            </div>

            <div className="box-child2">
              <div className="btns">
                <a href="/">
                  <button>Interior</button>
                </a>
                <a href="/">
                  <button>LifeStyle</button>
                </a>
                <a href="/">
                  <button>Design</button>
                </a>
              </div>
            </div>
            <div className="box-child3">
              <a href="/">
                <h2>
                  Every day, in every city and <br /> town across the country
                </h2>
              </a>
              <p>
                Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo.
                Vestibulum volutpat velit ac tellus mollis, sit amet sodales
                metus elementum. Aliquam eu mi massa. Proin... <br />
                by <a href="/">Breana Flatley</a>
              </p>
            </div>
          </div>

          <div className="box-3">
            <div className="box-img">
              <div className="box-child1"></div>
            </div>

            <div className="box-child2">
              <div className="btns">
                <a href="/">
                  <button>Paid-members</button>
                </a>
                <a href="/">
                  <button>LifeStyle</button>
                </a>
                <a href="/">
                  <button>Eco</button>
                </a>
              </div>
            </div>
            <div className="box-child3">
              <a href="/">
                <h2>
                  I believe the world is one big <br /> family
                </h2>
              </a>
              <p>
                Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus.
                Vivamus lobortis posuere enim finibus sodales. Phasellus quis
                tellus scelerisque, sagittis tortor et,... <br />
                by <a href="/">Breana Flatley</a>
              </p>
            </div>
          </div>
        </div>

        <div className="post-2">
          <div className="box-1">
            <div className="box-img">
              <div className="box-child1"></div>
            </div>

            <div className="box-child2">
              <div className="btns">
                <a href="/">
                  <button>Members</button>
                </a>
                <a href="/">
                  <button>LifeStyle</button>
                </a>
                <a href="/">
                  <button>Review</button>
                </a>
              </div>
            </div>
            <div className="box-child3">
              <a href="/">
                <h2>
                  A healthy outside starts from <br /> the inside
                </h2>
              </a>
              <p>
                Quae in controversiam veniunt, de iis, si placet, disseramus.
                Iam quae corporis sunt, ea nec auctoritatem cum animi partibus.
                Duo enim genera quae erant, fecit... <br />
                by <a href="/">Daryl Wehner</a>
              </p>
            </div>
          </div>

          <div className="box-2">
            <div className="box-img">
              <div className="box-child1"></div>
            </div>

            <div className="box-child2">
              <div className="btns">
                <a href="/">
                  <button>Idea</button>
                </a>
                <a href="/">
                  <button>Design</button>
                </a>
              </div>
            </div>
            <div className="box-child3">
              <a href="/">
                <h2>
                  Everyone has a different life <br /> story
                </h2>
              </a>
              <p>
                Non est igitur summum malum dolor. Tu autem inter haec tantam
                multitudinem hominum interiectam non vides nec laetantium nec
                dolentium. Nunc vero a primo... <br />
                by <a href="/">Breana Flatley</a>
              </p>
            </div>
          </div>

          <div className="box-3">
            <div className="box-img">
              <div className="box-child1"></div>
            </div>

            <div className="box-child2">
              <div className="btns">
                <a href="/">
                  <button>Health</button>
                </a>
                <a href="/">
                  <button>Interior</button>
                </a>
                <a href="/">
                  <button>Idea</button>
                </a>
              </div>
            </div>
            <div className="box-child3">
              <a href="/">
                <h2>
                  Look at life with the eyes of a <br /> child
                </h2>
              </a>
              <p>
                Curabitur elementum nulla sapien, vel suscipit turpis convallis
                quis. Morbi sagittis non quam at aliquet. Suspendisse ut diam
                erat. Donec sed faucibus magna.... <br />
                by <a href="/">Nichole Becker</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn1">
        <a href="/">
        <button>Load more</button>
        </a>
      </div>
    </div>
  );
};

export default Posts;
