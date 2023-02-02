import styled from 'styled-components';

export const PaperWrap = styled.div`
  margin: 0 auto;
  background-color: var(--light-gray);
  border: 1px solid gray;
  padding: 20px;
  width: 80%;
`;
export const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
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
  font-size: 1.3rem;
  margin-left: 10px;
  width: 40%;
  background-color: #cfcbcb;
`;

export const RemoveBtn = styled.button`
  font-size: 14px;
  background-color: white;
  border: 1px solid gray;
  padding: 5px 10px;
  cursor: pointer;
`;
