import CareerForm from 'components/career-form';
import { createMarkup } from 'utils/helpers';

export default function SingleCareerBody({ title, position, contact }) {
  return (
    <>
      <div className="p-2 mt-3 bg-light-gray w-100">
        <h4 className="mt-1 mb-0 w-75">{title}</h4>
      </div>
      <div className="w-100" dangerouslySetInnerHTML={createMarkup(position)} />
      <CareerForm contact={contact} title={title} />
    </>
  );
}
