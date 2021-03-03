export default function Content({ contentSection, results }) {
  return (
    <div>
      Get more from this attorney
      {' '}
      {JSON.stringify({ contentSection, results })}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const contentSection = params.type;

  // modify single attorney endpoint to grab specific content
  // do some major refactoring on the single attorney bio API endpoint

  return {
    props: {
      contentSection,
      results: [],
    },
  };
}
