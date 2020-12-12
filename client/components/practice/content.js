import TabPane from 'react-bootstrap/TabPane';
import { createMarkup } from '../../utils/helpers';

export default function PracticeContent({ content, tabTitle, title }) {
  return (
    <TabPane eventKey={tabTitle} title={title}>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
    </TabPane>
  );
}
