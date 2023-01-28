import PageButton from '../components/button/PageButton';
import { pages } from '../assets/titlsList';

function Home() {
  return (
    <div>
      {pages.map((v) => (
        <PageButton props={v} />
      ))}
    </div>
  );
}

export default Home;
