import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

export default function SidebarInformationList({
  content,
}) {
  const filteredSideBarItems = content.filter((a) => JSON.stringify(a) !== '[]');
  console.log(filteredSideBarItems);
  console.log(filteredSideBarItems.map((i) => typeof i.content));
  return (
    <>
      {filteredSideBarItems.map((item) => (
        <div key={item} id={item.title.toLowerCase().replace(/\s/g, '-')}>
          <div className={lineStyles.lineHeader}>
            <h3>{item.title}</h3>
          </div>
          {typeof item.content === 'string' && <div className="my-4" dangerouslySetInnerHTML={createMarkup(item.content)} />}
          {typeof item.content === 'object' && item.content.map((subItem) => (
            <>
              <p><strong>{subItem.title}</strong></p>
              <div className="my-4" dangerouslySetInnerHTML={createMarkup(subItem.content)} />
            </>
          ))}
        </div>
      ))}
    </>
  );
}
