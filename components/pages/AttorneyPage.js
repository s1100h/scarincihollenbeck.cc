import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProfileHead from 'components/organisms/attorney/ProfileHead';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import ProfileFooter from 'components/organisms/attorney/ProfileFooter';
import StringContent from 'components/organisms/attorney/StringContent';
import ObjectContent from 'components/organisms/attorney/ObjectContent';
import Sidebar from 'components/organisms/attorney/Sidebark';
import { FaCaretDown } from 'react-icons/fa';
import useOnClickOutside from 'hooks/useOnClickOutside';

const AttorneyPage = ({
  seo,
  profileHeader,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
  mainTabs,
  moreTabs,
  attorneyCredentials,
  attorneyAwards,
  attorneyClients,
}) => {
  const [activeTab, setActiveTab] = useState(mainTabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState({
    type: typeof mainTabs[0].content,
    title: mainTabs[0].title,
    content: mainTabs[0].content,
  });
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setToggleDropDown(false));

  const education = {
    id: 22,
    title: 'Education',
    content: attorneyCredentials,
  };

  const contact = {
    id: 23,
    title: 'Contact',
    content: {
      emailForwarding: profileHeader.emailForwarding,
      name: profileHeader.name,
    },
  };

  const tabs = [...mainTabs, ...moreTabs, education, contact];

  useEffect(() => {
    const currentTabContent = tabs.filter((t) => t.id === activeTab);
    setActiveTabContent({
      type: typeof currentTabContent[0].content,
      title: currentTabContent[0].title,
      content: currentTabContent[0].content,
    });
  }, [activeTab]);
  return (
    <>
      <ProfileHead {...seo} />
      <ProfileHeader {...profileHeader} />
      <Container>
        <Row>
          <Col sm={12} lg={9} style={{ position: 'relative', top: '-66px' }}>
            <ButtonGroup>
              {mainTabs.map((tab) => (
                <Tab
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title === 'News Press Releases' ? 'News & Press Releases' : tab.title}
                </Tab>
              ))}
              {moreTabs.length > 0 && (
                <Tab onClick={() => setToggleDropDown(!toggleDropDown)}>
                  More
                  {' '}
                  <FaCaretDown />
                  {toggleDropDown && (
                    <MoreDropdown ref={node}>
                      {moreTabs.map((tab) => (
                        <Button
                          variant="link"
                          key={tab.id}
                          active={activeTab === tab.id}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          {tab.title}
                        </Button>
                      ))}
                    </MoreDropdown>
                  )}
                </Tab>
              )}
            </ButtonGroup>
          </Col>
          <Col sm={12} md={9} style={{ position: 'relative', top: '-36px' }}>
            {activeTabContent.type === 'string' && <StringContent {...activeTabContent} />}
            {activeTabContent.type === 'object' && <ObjectContent {...activeTabContent} />}
          </Col>
          <Col sm={12} md={3}>
            <Sidebar
              services={profileHeader.practices}
              setActiveTab={setActiveTab}
              setActiveTabContent={setActiveTabContent}
              education={education}
              contact={contact}
              awards={attorneyAwards}
            />
          </Col>
          <Col sm={12}>
            <ProfileFooter
              attorneyFooterBlogArticles={attorneyFooterBlogArticles}
              attorneyFooterNewsArticles={attorneyFooterNewsArticles}
              clients={attorneyClients}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Tab = styled.button`
  border: 0;
  outline: 0;
  margin-right: 8px;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  white-space: nowrap;
  max-width: 240px;
  min-width: 190px;
  padding: 0.5rem 1rem;
  background: linear-gradient(1turn, rgba(144, 25, 24, 0.9) 60%, rgba(221, 38, 36, 0.9)), #333;
  max-height: 42px;
  ${({ active }) => active
    && `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MoreDropdown = styled.div`
  padding: 10px !important;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #212121;
  background-color: #fcfaff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgb(138 155 165 / 15%);
  transition: all 200ms linear;
  z-index: 99;
  position: absolute;
  top: 3.2em;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  button {
    color: #000;
    text-align: left;

    &:focus {
      outline: 0;
      border: 0;
    }
  }
`;
const MobileGroup = styled.div`
  display: inherit;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DropDownContainer = styled.div`
  background-color: #e9e9e9;
  position: absolute;
  min-width: 400px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  z-index: 99;
`;

const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export default AttorneyPage;
