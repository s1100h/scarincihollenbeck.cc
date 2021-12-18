import FadeLoader from 'react-spinners/FadeLoader';

const Loader = (loading) => {
  if (loading) {
    <div
      className="d-flex flex-colum justify-content-center align-items-center"
      style={{ height: '300px' }}
    >
      <FadeLoader size={32} color="#a9a9a9" />
    </div>;
  }
  return null;
};

export default Loader;
