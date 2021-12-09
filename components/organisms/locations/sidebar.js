import OfficeDetails from 'components/molecules/location/OfficeDetails';
import { sortByKey } from 'utils/helpers';

export default function LocationsSidebar({ offices }) {
  const officeList = sortByKey(offices, 'title');
  return (
    <>
      <ul>
        {officeList.map((office) => (
          <li key={office.ID || office.id} className="list-unstyled border-bottom py-2">
            <OfficeDetails office={office} />
          </li>
        ))}
        <style jsx>
          {`
            ul {
              margin-left: -2.48em;
              margin-top: -10px;
            }
            ul li {
              margin-bottom: 6px;
            }
          `}
        </style>
      </ul>
    </>
  );
}
