import PageButton from '../components/button/PageButton';
import { pages } from '../assets/titleList';
import CardWrapper from '../components/wrapper/CardWrapper';
import HomeWrapper from '../components/wrapper/HomeWrapper';
import HomeHeader from '../components/header/HomeHeader';
import Footer from '../components/footer/Footer';
import LoginBtn from '../components/button/LoginBtn';
import SignUpBtn from '../components/button/SignUpBtn';
import LogoutBtn from '../components/button/LogoutBtn';

function Home() {
  return (
    <>
      <HomeWrapper>
        <HomeHeader />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <LoginBtn />
          <LogoutBtn />
          <SignUpBtn />
        </div>
        <CardWrapper>
          {pages.map((v) => (
            <PageButton props={v} />
          ))}
        </CardWrapper>
      </HomeWrapper>
      <Footer />
    </>
  );
}

export default Home;
