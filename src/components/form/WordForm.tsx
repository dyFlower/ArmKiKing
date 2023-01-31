import { useState } from 'react';
import { FormData, WordList } from '../../types/types';

const WordForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ word: '', mean: '' });
  const [wordList, setWordList] = useState<WordList>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleList = () => {
    setWordList(wordList.concat([[formData.word, formData.mean]]));
  };
  const removeWord = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const parentElement = e.currentTarget.parentElement;
    if (parentElement) {
      const removeIndex = parseInt(parentElement.innerText.split('\n')[0]);
      setWordList(wordList.filter((_, i) => i !== removeIndex));
    }
  };

  return (
    <form>
      <div>
        <label htmlFor='word'>단어 : </label>
        <input type='text' id='word' name='word' value={formData.word} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='mean'>뜻 : </label>
        <input type='text' id='mean' name='mean' value={formData.mean} onChange={handleChange} />
      </div>
      <button type='button' onClick={handleList}>
        제출
      </button>
      <div>
        {wordList.map((v, i) => {
          return (
            <div key={i}>
              {i}
              <div>{v[0]}</div>
              <div>{v[1]}</div>
              <button type='button' onClick={removeWord}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default WordForm;
