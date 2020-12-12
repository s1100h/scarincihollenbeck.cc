import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export default function PracticeCovidResourceBox({ title, link, message }) {
  return (
    <div className="w-100 mt-4">
      <div className="sidebar-title">{title}</div>
      <div className="off-white pb-3">
        <p className="proxima-bold text-center p-3">{message}</p>
        <Link href={link}>
          <Button
            variant="danger"
            className="mx-auto p-2 d-block w-50 text-center border-r-5 mb-3 ft-14px"
          >
            Resources
          </Button>
        </Link>
      </div>
    </div>
  );
}
