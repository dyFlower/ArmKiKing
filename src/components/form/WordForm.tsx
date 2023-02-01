import { useState } from 'react';
import styled from 'styled-components';
import { FormData, WordList } from '../../types/interface';

const PaperWrap = styled.div`
  margin: 0 auto;
  background-color: var(--light-gray);
  border: 1px solid gray;
  padding: 20px;
  width: 80%;
`;
const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

const IndexNum = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 30px;
  text-align: center;
`;

const WordDiv = styled.div`
  font-size: 1.3rem;
  margin-left: 10px;
  width: 40%;
`;

const MeanDiv = styled.div`
  font-size: 1.3rem;
  margin-left: 10px;
  width: 40%;
  background-color: #cfcbcb;
`;

const RemoveBtn = styled.button`
  font-size: 14px;
  background-color: white;
  border: 1px solid gray;
  padding: 5px 10px;
  cursor: pointer;
`;

const WordForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ word: '', mean: '' });
  const [wordList, setWordList] = useState<WordList>([]);
  const [selected, setSelected] = useState<boolean[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleList = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setWordList(wordList.concat([[formData.word, formData.mean]]));
    const newSelected: boolean[] = [...selected, true];
    setSelected(newSelected);
  };
  const removeWord = (e: React.MouseEvent<HTMLButtonElement>) => {
    const parentNode = e.currentTarget.parentElement;
    const removeIndex = parentNode?.firstChild?.textContent;
    if (removeIndex) {
      setWordList(wordList.filter((_, i) => i + 1 !== parseInt(removeIndex)));
    }
  };
  const handleClick = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };
  const handleHideAll = () => {
    const newSelected = selected.map((v) => true);
    setSelected(newSelected);
  };
  const handleShowAll = () => {
    const newSelected = selected.map((v) => false);
    setSelected(newSelected);
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor='word'>단어 : </label>
          <input type='text' id='word' name='word' value={formData.word} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='mean'>뜻 : </label>
          <input type='text' id='mean' name='mean' value={formData.mean} onChange={handleChange} />
        </div>
        <button type='submit' onClick={handleList}>
          제출
        </button>
        <div>암기목록</div>

        <button type='button' onClick={handleHideAll}>
          전체 숨기기
        </button>

        <button type='button' onClick={handleShowAll}>
          전체 보기
        </button>

        <PaperWrap>
          {wordList.map((v, i) => {
            return (
              <ListWrap key={i}>
                <IndexNum>{i + 1}</IndexNum>
                <WordDiv>{v[0]}</WordDiv>
                <MeanDiv style={{ color: selected[i] ? 'transparent' : 'black' }} onClick={() => handleClick(i)}>
                  {v[1]}
                </MeanDiv>
                <RemoveBtn type='button' onClick={removeWord}>
                  삭제
                </RemoveBtn>
              </ListWrap>
            );
          })}
        </PaperWrap>
      </form>
    </>
  );
};

export default WordForm;
