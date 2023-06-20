import { BsLinkedin, BsFillPersonLinesFill, BsDownload } from 'react-icons/bs';
import { ContactList, ItemContactList } from 'styles/attorney-page/AttorneyProfile.style';

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
          <ItemContactList socialNetwork={Object.keys(item).toString()} key={idx++}>
            <a href={(item.linkedIn && (item.linkedIn.url || 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/')) || item.pdf || item.vizibility} rel="noopener noreferrer" target="_blank">
              {iconsMap[Object.keys(item)]}
              {item.linkedIn && 'LinkedIn'}
              {item?.pdf && 'Print Bio'}
              {item.vizibility && 'Business Card'}
            </a>
          </ItemContactList>
        ))}
    </>
  );
};

const ContactIcons = ({
  slug, linkedIn, pdf, vizibility,
}) => {
  const contactItemsArr = pdf ? [{ linkedIn }, { pdf }, { vizibility }] : [{ linkedIn }, { vizibility }];
  return <ContactList>{renderListItem(contactItemsArr)}</ContactList>;
};

export default ContactIcons;
