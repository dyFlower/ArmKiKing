import { useState } from 'react';

type FormData = {
  word: string;
  mean: string;
};
type WordList = string[][];

const WordForm = () => {
  const [formData, setFormData] = useState<FormData>({ word: '', mean: '' });
  const [wordList, setWordList] = useState<WordList>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleList = () => {
    setWordList(wordList.concat([[formData.word, formData.mean]]));
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
        {wordList.map((v: any) => (
          <div>{v}</div>
        ))}
      </div>
    </form>
  );
};

export default WordForm;
