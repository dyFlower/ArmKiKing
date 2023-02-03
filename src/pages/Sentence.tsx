import { useState } from 'react';
import CommonBtn from '../components/button/CommonBtn';
import { SideWrapper, BlockWrapper, BtnWrapper, PageWrapper } from '../components/wrapper/sentencePage/Wrapper';
import { ParaInput, AnswerInput, ShowInput } from '../components/input/senteneInputStyle';
import useTextAreaAutoHeight from '../hooks/useTextAreaAutoHeight';
import SentenceHeader from '../components/header/SentenceHeader';

const Sentence = () => {
  const [hide, setHide] = useState<Boolean>(false);
  const [answer, setAnswer] = useState<String>('');
  const [myAnswer, setMyAnswer] = useState<String>('');
  const textareaRef = useTextAreaAutoHeight(answer);

  return (
    <PageWrapper>
      <SentenceHeader />
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
            placeholder='외우고 싶은 문장을 여기에!'
            ref={textareaRef}
            style={{ color: hide ? 'transparent' : 'black' }}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
        </SideWrapper>
        <SideWrapper>
          <AnswerInput
            contentEditable={true}
            onInput={(e) => {
              setMyAnswer(e.currentTarget.innerText);
            }}
          />
          <ShowInput>
            {myAnswer.split('').map((char, index) => (
              <span key={index} style={{ color: char === answer[index] ? 'var(--green)' : 'var(--red)', width: '100%' }}>
                {char}
              </span>
            ))}
          </ShowInput>
        </SideWrapper>
      </BlockWrapper>
    </PageWrapper>
  );
};

export default Sentence;
