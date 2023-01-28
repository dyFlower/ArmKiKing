import PageButton from './components/button/PageButton';

function App() {
  const pages: string[] = ['단어', '문장', '내 학습', '커뮤니티'];
  
  return (
    <div>
      {pages.map((page, i) => (
        <PageButton key={i} title={page} />
      ))}
    </div>
  );
}

export default App;
