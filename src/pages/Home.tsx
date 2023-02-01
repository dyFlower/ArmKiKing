import PageButton from '../components/button/PageButton';
import { pages } from '../assets/titleList';
import HomeWrapper from '../components/wrapper/HomeWrapper';


function Home() {
  return (
    <HomeWrapper>
      {pages.map((v) => (
        <PageButton props={v} />
      ))}
    </HomeWrapper>
  );
}

export default Home;
