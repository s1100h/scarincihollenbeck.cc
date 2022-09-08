import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Menu = ({
  tabs, setActiveTab, activeTab, setToggleDropDown, toggleDropDown,
}) => (
  <>
    <ButtonGroup>
      {tabs.map((tab) => (
        <Tab key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
          {tab.title}
        </Tab>
      ))}
    </ButtonGroup>
    <MobileGroup>
      <Tab onClick={() => setToggleDropDown(!toggleDropDown)}>Menu Options</Tab>
      {toggleDropDown && (
        <DropDownContainer>
          <DropDownList>
            {tabs.map((tab) => (
              <Button
                variant="link"
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setToggleDropDown(false);
                }}
                className="text-dark text-left py-3 border-bottom"
              >
                {tab.title}
              </Button>
            ))}
          </DropDownList>
        </DropDownContainer>
      )}
    </MobileGroup>
  </>
);

const Tab = styled.button`
  border: 0;
  outline: 0;
  margin-right: 8px;
  width: 200px;
  text-align: center;
  max-width: 210px;
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem 0.1rem;
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
export default Menu;
