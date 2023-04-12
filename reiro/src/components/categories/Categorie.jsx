import './categorie.scss'
import andrea from '../../images/andrea.jpg'
import post2 from '../../images/post2.jpeg'
import post3 from '../../images/post3.jpeg'
import fruit from '../../images/fruit.jpeg'
import desert from '../../images/desert.jpeg'

const Categorie = () => {
    return(
        <div className="categorie">
            <div className="h-6">
                <h6>YOU MIGHT ALSO LIKE</h6>
            </div>
            <div className="container-box">
                  <div className="box1">
                    <div className="child-box1">
                        <img src={andrea} alt={andrea} />
                    </div>
                    <h3><a href="/">We are stronger as a group than an individual</a></h3>
                    <p>by <a href="/">Damian Erdman</a></p>
                  </div>
                  <div className="box1">
                    <div className="child-box1">
                        <img src={post2} alt={post2} />
                    </div>
                    <h3><a href="/">Every day, in every city the country</a></h3>
                    <p>by <a href="/">Breana Flatley</a></p>
                  </div>

                  <div className="box1">
                    <div className="child-box1">
                        <img src={post3} alt={post3} />
                    </div>
                    <h3><a href="/">I believe the world is one big family</a></h3>
                    <p>by <a href="/">Breana Flatley</a></p>
                  </div>

                  <div className="box1">
                    <div className="child-box1">
                        <img src={fruit} alt={fruit} />
                    </div>
                    <h3><a href="/">I believe the world is one big family</a></h3>
                    <p>by <a href="/">Daryl Wehner</a></p>
                  </div>

                  <div className="box1">
                    <div className="child-box1">
                        <img src={desert} alt={desert} />
                    </div>
                    <h3><a href="/">I have my own definition <br />of minimalism</a></h3>
                    <p>by <a href="/">Breana Flatley</a></p>
                  </div>
            </div>
        </div>
    )
}

export default Categorie