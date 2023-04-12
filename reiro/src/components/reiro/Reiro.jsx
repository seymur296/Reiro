import './reiro.scss'
import logo from '../../images/logo.svg'

const Reiro = () => {
    return(
        <div className="reiro">
            <div className="container-box">
               <div className="box1">
                <div className="img">
                    <a href="/">
                    <img src={logo} alt={logo} />
                    </a>
                </div>
                <p>A minimal, functional theme for running a <br /> paid-membership publication on Ghost.</p>
               </div>
               <div className="box2">
                <a href="/"><button>Become a subscriber</button></a>
                <p>Get all the latest posts delivered straight to your inbox.</p>
               </div>
            </div>
        </div>
    )
}

export default Reiro