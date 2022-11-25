import { BsLinkedin, BsFillPersonLinesFill, BsDownload } from 'react-icons/bs';

const renderListItem = (itemsArr) => {
  const iconsMap = {
    linkedIn: <BsLinkedin />,
    pdf: <BsDownload />,
    vizibility: <BsFillPersonLinesFill />,
  };
  return (
    <>
      {itemsArr.length > 0
        && itemsArr.map((item, idx) => (
          <li className="d-flex gap-2 align-items-center" key={idx++}>
            {iconsMap[Object.keys(item)]}
            <a
              href={
                (item.linkedIn
                  && (item.linkedIn.url
                    || 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/'))
                || item.pdf
                || item.vizibility
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.linkedIn && 'LinkedIn Profile'}
              {item.pdf && 'Print Bio'}
              {item.vizibility && 'Business Card'}
            </a>
          </li>
        ))}
    </>
  );
};

const ContactIcons = ({
  slug, linkedIn, pdf, vizibility,
}) => {
  const contactItemsArr = [{ linkedIn }, { pdf }, { vizibility }];
  return (
    <ul>
      {renderListItem(contactItemsArr)}
      {/* <li>
        {slug && (
          <span onClick={showMessage} style={{ height: '30px' }} className="d-block text-left w-100">
            <strong style={{ cursor: 'pointer' }} className="pr-1">
              <BsChatDots style={{ marginTop: '-4px' }} />
              <span className="ml-2 d-inline-block">Get In Touch</span>
            </strong>
          </span>
        )}
      </li> */}
      {/* <li>
        <a
          href={linkedIn ? linkedIn.url : 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/'}
          rel="noopener noreferrer"
          target="_blank"
          style={{ height: '30px' }}
          variant="link"
          className="d-block text-left w-100"
        >
          <BsLinkedin />
          LinkedIn Profile
        </a>
      </li>
      {pdf && (
        <li>
          <a
            href={pdf}
            rel="noopener noreferrer"
            target="_blank"
            style={{ height: '30px' }}
            variant="link"
            className="d-block text-left w-100"
          >
            <BsCloudDownload />
            Print Bio
          </a>
        </li>
      )}
      <li>
        <a
          href={vizibility}
          rel="noopener noreferrer"
          target="_blank"
          style={{ height: '30px' }}
          variant="link"
          className="d-block text-left w-100"
        >
          <BsCardText style={{ marginTop: '-4px' }} />
          Business Card
        </a>
      </li> */}
    </ul>
  );
};

export default ContactIcons;
