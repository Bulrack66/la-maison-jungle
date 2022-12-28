import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'La maison jungle'
    return <div >
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className="lmj-banner">La maison jungle</h1>
    </div>
}

export default Banner