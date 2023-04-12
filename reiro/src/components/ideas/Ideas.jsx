import './ideas.scss'
const Ideas = () => {
  return (
    <div className="popular">
      <div className="container-box">
        <div className="h-6">
          <h6>POPULAR TAGS</h6>
        </div>
        <div className="slides">
          <div className="idea">
               <p>Idea</p>
          </div>
          <div className="Lifestyle">
               <p>Lifestyle</p>
          </div>
          <div className="Design">
               <p>Design</p>
          </div>
          <div className="Health">
               <p>Health</p>
          </div>
          <div className="Interior">
               <p>Interior</p>
          </div>
          <div className="Eco">
               <p>Eco</p>
          </div>
          <div className="Review">
               <p>Review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
