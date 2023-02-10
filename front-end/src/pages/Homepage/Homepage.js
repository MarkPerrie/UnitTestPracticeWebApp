import ReactLogo from '../../components/ReactLogo/ReactLogo'
import Map from '../../components/Map/Map'
import Email from '../../components/Email/Email'
import Checklist from '../../components/Checklist/Checklist'
import './Homepage.css'

function Homepage() {
  return (
    <div className="homepage">
      <div className='section'>
        <ReactLogo />
      </div>
      <div className='section'>
        <Map />
      </div>
      <div className='section'>
        <Email />
      </div>
      <div className='section'>
        <Checklist />
      </div>
    </div>
  );
}

export default Homepage;
