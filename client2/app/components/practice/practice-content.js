import TabPane from 'react-bootstrap/TabPane';
import { createMarkup } from '../../utils/helpers';

export default function PracticeContent(props) {
  const { content, tabTitle, title } = props;
  return (
    <TabPane eventKey={tabTitle} title={title}>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
    </TabPane>    
  )
}