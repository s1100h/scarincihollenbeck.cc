import Link from 'next/link';
import { ListSimple } from 'styles/Practices.style';

const SimpleList = ({ list }) => (
  <div className="my-5">
    <ListSimple>
      {list.map((item) => (
        <li key={item.ID}>
          <Link href={item.slug.replace('https://scarincihollenbeck.com', '')}>
            <a>
              <strong>{item.title}</strong>
            </a>
          </Link>
        </li>
      ))}
    </ListSimple>
  </div>
);

export default SimpleList;
