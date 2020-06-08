import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup, addRandomKey } from '../../utils/helpers';

function Table(props) {
  const {
    title,
    currentTab,
    tabTitle,
    content,
  } = props;

  return (
    <div className={(currentTab === tabTitle) ? 'tab-pane active' : 'tab-pane'} id={tabTitle} role="tabpanel" aria-labelledby={`nav-${tabTitle}-tab`}>
      <h4 className="bg-light-gray">{title}</h4>
      <div className="article-container" id={`nav-${tabTitle}-tab`}>
        <table className="table mb-5">
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
        </table>
      </div>
    </div>
  );
}

Table.propTypes = {
  title: PropTypes.string,
  currentTab: PropTypes.string,
  tabTitle: PropTypes.string,
  content: PropTypes.objectOf(PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.array,
  )),
};

Table.defaultProps = {
  title: '',
  currentTab: '',
  tabTitle: '',
  content: {},
};

export default Table;
