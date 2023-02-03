import PageButton from '../components/button/PageButton';
import { pages } from '../assets/titleList';
import CardWrapper from '../components/wrapper/CardWrapper';
import HomeWrapper from '../components/wrapper/HomeWrapper';
import HomeHeader from '../components/header/HomeHeader';

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <CardWrapper>
        {pages.map((v) => (
          <PageButton props={v} />
        ))}
      </CardWrapper>
    </HomeWrapper>
  );
}

export default Home;
