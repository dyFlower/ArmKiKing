import styled from 'styled-components';

export const InputForm = styled.form`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
`;
export const WordInput = styled.input`
  background-color: var(--black);
  width: 80%;
  color: white;
  font-size: inherit;
  margin-left: 5px;
  border-radius: 5px;
  padding: 5px 0 5px 5px;
`;
export const PaperWrap = styled.div`
  margin: 0 auto;
  background-color: var(--light-gray);
  width: 85%;
  border-radius: 5px;
`;

export const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 5px;
  transition: background-color 0.2s ease-in-out;
  border-radius: 10px;
  word-break: break-all;
`;

export const IndexNum = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 30px;
  text-align: center;
`;

export const WordDiv = styled.div`
  font-size: 1.3rem;
  margin-left: 10px;
  width: 40%;
`;

export const MeanDiv = styled.div`
  padding: 10px 0 10px;
  font-size: 1.3rem;
  width: 40%;
  border: 3px solid var(--black);
`;

export const RemoveBtn = styled.button`
  font-size: 14px;
  background-color: white;
  border: 1px solid gray;
  padding: 5px 10px;
  cursor: pointer;
`;
