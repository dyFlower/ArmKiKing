import { useState } from 'react';
import { FormData, WordList } from '../../../types/interface';
import CommonBtn from '../../button/CommonBtn';

import { IndexNum, ListWrap, MeanDiv, PaperWrap, RemoveBtn, WordDiv } from './wordFormStyle';

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
  const handleRemoveAll = () => {
    setWordList([]);
  };
  return (
    <>
      <form style={{ fontSize: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginBottom: '20px' }}>
        <div style={{}}>
          <label htmlFor='word'>단어 :</label>
          <input style={{ backgroundColor: 'var(--light-gray)', fontSize: 'inherit' }} type='text' id='word' name='word' value={formData.word} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='mean'>뜻 : </label>
          <input style={{ backgroundColor: 'var(--light-gray)', fontSize: 'inherit' }} type='text' id='mean' name='mean' value={formData.mean} onChange={handleChange} />
        </div>
        <CommonBtn type='submit' onClick={handleList} style={{ display: 'block', margin: '0 auto' }}>
          입력
        </CommonBtn>
      </form>

      <CommonBtn type='button' onClick={handleHideAll}>
        Hide
      </CommonBtn>
      <CommonBtn type='button' onClick={handleShowAll}>
        Show
      </CommonBtn>
      <CommonBtn type='button' onClick={handleRemoveAll}>
        전체 삭제
      </CommonBtn>
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
    </>
  );
};

export default WordForm;
