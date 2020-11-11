import TabPane from 'react-bootstrap/TabPane';
import Table from 'react-bootstrap/Table';
import { createMarkup, addRandomKey } from '../../utils/helpers';

export default function TableTab({
  title,
  tabTitle,
  content,
}) {
  return (
    <TabPane eventKey={tabTitle} title={title}>
      <h4 className="bg-light-gray">{title}</h4>
      <div className="article-container" id={`nav-${tabTitle}-tab`}>
        <Table responsive="sm" className="mb-5">
          <thead className="thead-dark">
            <tr>
              {(content.header) && content.header.map((h) => <th key={h.c} className="text-uppercase">{h.c}</th>)}
            </tr>
          </thead>
          <tbody>
            {(content.body) && content.body.map((b) => (
              <tr key={addRandomKey(b[0].c)}>
                <td dangerouslySetInnerHTML={createMarkup(b[0].c)} />
                <td dangerouslySetInnerHTML={createMarkup(b[1].c)} />
                {
                    (b[2]) ? <td>{b[2].c}</td> : <td />
                  }
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </TabPane>
  );
}
