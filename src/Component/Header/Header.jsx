import moment from 'moment';
import headerLogo from '../../assets/logo.png'


const Header = () => {
    return (
        <section className='text-center pt-12 pb-8'>
            <img className='mx-auto' src={headerLogo} alt="" />
            <p className='font-poppins mt-5 mb-3 text-lg font-normal text-Dark2'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-Dark2'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </section>
    );
};

export default Header;