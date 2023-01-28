type Title = {
  title: string;
};

const PageButton = ({ title }: Title) => {
  return (
    <button>
      <p>{title}</p>
    </button>
  );
};

export default PageButton;
