import { useState } from 'react';
import { BackBtn } from '../components/button/BackBtn';
import CommonBtn from '../components/button/CommonBtn';
import { SideWrapper, BlockWrapper, BtnWrapper } from '../components/wrapper/sentencePage/Wrapper';
import { ParaInput, AnswerInput, ShowInput } from '../components/input/senteneInputStyle';
import useTextAreaAutoHeight from '../hooks/useTextAreaAutoHeight';

const Sentence = () => {
  const [hide, setHide] = useState<Boolean>(false);
  const [answer, setAnswer] = useState<String>('');
  const [myAnswer, setMyAnswer] = useState<String>('');
  const textareaRef = useTextAreaAutoHeight(answer);

  return (
    <>
      <BackBtn />
      <BlockWrapper>
        <SideWrapper>
          <BtnWrapper>
            <CommonBtn
              onClick={() => {
                setHide(true);
              }}
            >
              Hide
            </CommonBtn>
            <CommonBtn
              onClick={() => {
                setHide(false);
              }}
            >
              Show
            </CommonBtn>
          </BtnWrapper>
          <ParaInput
            ref={textareaRef}
            style={{ color: hide ? 'transparent' : 'black' }}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          >
            외우고 싶은 문장을 여기에!
          </ParaInput>
        </SideWrapper>
        <SideWrapper>
          <AnswerInput
            contentEditable={true}
            onInput={(e) => {
              setMyAnswer(e.currentTarget.innerText);
            }}
          >
            맞으면 초록색, 틀리면 빨간색
          </AnswerInput>
          <ShowInput>
            {myAnswer.split('').map((char, index) => (
              <span key={index} style={{ color: char === answer[index] ? 'var(--green)' : 'var(--red)', width: '100%' }}>
                {char}
              </span>
            ))}
          </ShowInput>
        </SideWrapper>
      </BlockWrapper>
    </>
  );
};

export default Sentence;
