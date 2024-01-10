import './style.css'
import github from '../../ico/github.png'
import telegram from '../../ico/telegram.png'
import gmail from '../../ico/gmail.png'
import pycel from '../../ico/pycel.png'


const Footer = () => {
    return (
        <footer>
            <div className='box'>
                <a href="https://github.com/pycel89/"  target="_blank" rel="noreferrer" ><img src={github} alt=""></img>https://github.com/pycel89/</a>
                <a href="http://t.me/pycel"  target="_blank" rel="noreferrer"><img src={telegram} alt=""></img>http://t.me/pycel</a>
                <a href="mailto:pycel89@gmail.com"  target="_blank" rel="noreferrer"><img src={gmail} alt=""></img>pycel89@gmail.com</a>
            </div>
            <div className='box'><img height='100px' src={pycel} alt=""></img></div>

        </footer>
    )
}
export default Footer;