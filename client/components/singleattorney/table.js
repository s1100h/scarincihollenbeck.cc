import Table from 'react-bootstrap/Table';

import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup, addRandomKey } from 'utils/helpers';

export default function SingleAttorneyTableTab({ title, content }) {
  return (
    <div id={title.toLowerCase().replace(/\s/g, '-')}>
      <div className={lineStyles.lineHeader}>
        <h3>{title}</h3>
      </div>
      <Table responsive="sm" size="sm" className="mb-5">
        <thead className="thead-dark">
          <tr>
            {content.header
                && content.header.map((h) => (
                  <th key={h.c} className="text-uppercase">
                    {h.c}
                  </th>
                ))}
          </tr>
        </thead>
        <tbody>
          {content.body
              && content.body.map((b) => (
                <tr key={addRandomKey(b[0].c)}>
                  <td
                    className="mw-45"
                    dangerouslySetInnerHTML={createMarkup(b[0].c)}
                  />
                  <td dangerouslySetInnerHTML={createMarkup(b[1].c)} />
                  {b[2] ? <td>{b[2].c}</td> : <td />}
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
}
