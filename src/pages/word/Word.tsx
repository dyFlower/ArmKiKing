import WordForm from '../../components/form/WordForm/WordForm';
import WordHeader from '../../components/header/WordHeader';
import WordWrapper from '../../components/wrapper/WordWrapper';
// import WordTestBtn from '../components/button/WordTestBtn';
const InputForm: React.FC = () => {
  return (
    <WordWrapper>
      <WordHeader />
      {/* <WordTestBtn /> */}
      <WordForm />
    </WordWrapper>
  );
};

export default InputForm;
