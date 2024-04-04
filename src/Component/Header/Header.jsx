import headerLogo from '../../assets/logo.png'


const Header = () => {
    return (
        <section>
            <img src={headerLogo} alt="" />
            <p className='font-poppins'>Journalism Without Fear or Favour</p>
            
        </section>
    );
};

export default Header;