import { BackBtn } from '../button/BackBtn';

const WordHeader = () => {
  return (
    <>
      <h2 style={{ fontFamily: 'FlowerSalt', fontSize: '50px', paddingTop: '30px', position: 'relative' }}>
        <BackBtn />
        Word
      </h2>
      <p style={{ fontFamily: 'FlowerSalt', fontSize: '30px', paddingTop: '30px', marginBottom: '40px' }}>
        * 한 쌍의 값을 입력할 수 있습니다. '뜻'을 클릭하거나 Hide, Show 버튼을 통해 숨기고 나타내어 암기해보세요! *
        <br />* 단어를 누르면 형관펜이 칠해져요! *
      </p>
    </>
  );
};

export default WordHeader;
