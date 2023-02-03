import { BackBtn } from '../button/BackBtn';

const SentenceHeader = () => {
  return (
    <>
      <h2 style={{ fontFamily: 'FlowerSalt', fontSize: '50px', paddingTop: '30px', position: 'relative' }}>
        <BackBtn />
        Sentence
      </h2>
      <p style={{ fontFamily: 'FlowerSalt', fontSize: '30px', paddingTop: '30px', marginBottom: '40px' }}>* 좌측의 공간에 외우고 싶은 글을 넣고, 우측에 입력하면 일치 여부를 판단해준답니다! *</p>
    </>
  );
};

export default SentenceHeader;
