import { useState } from 'react';
import { FormData, WordList } from '../../../types/interface';
import CommonBtn from '../../button/CommonBtn';
import { IndexNum, InputForm, ListWrap, MeanDiv, PaperWrap, RemoveBtn, WordDiv, WordInput } from './wordFormStyle';

const WordForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ word: '', mean: '' });
  const [wordList, setWordList] = useState<WordList>([]);
  const [selected, setSelected] = useState<boolean[]>([]);
  const [highlight, setHighlight] = useState<boolean[]>([]);

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

  const handleHiglight = (index: number) => {
    const newHightlight = [...highlight];
    newHightlight[index] = !newHightlight[index];
    setHighlight(newHightlight);
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
    setSelected([]);
    setHighlight([]);
  };
  return (
    <>
      <InputForm>
        <div style={{}}>
          <label htmlFor='word'>단어 :</label>
          <WordInput type='text' id='word' name='word' value={formData.word} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='mean'>뜻 : </label>
          <WordInput type='text' id='mean' name='mean' value={formData.mean} onChange={handleChange} />
        </div>
        <CommonBtn type='submit' onClick={handleList} style={{ display: 'block' }}>
          입력
        </CommonBtn>
      </InputForm>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '30px' }}>
        <CommonBtn type='button' onClick={handleHideAll}>
          Hide
        </CommonBtn>
        <CommonBtn type='button' onClick={handleShowAll}>
          Show
        </CommonBtn>
        <CommonBtn type='button' onClick={handleRemoveAll}>
          전체 삭제
        </CommonBtn>
      </div>
      <PaperWrap>
        {wordList.map((v, i) => {
          return (
            <ListWrap key={i} style={{ backgroundColor: highlight[i] ? 'pink' : 'transparent' }}>
              <IndexNum>{i + 1}</IndexNum>
              <WordDiv
                onClick={() => {
                  handleHiglight(i);
                }}
              >
                {v[0]}
              </WordDiv>
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
