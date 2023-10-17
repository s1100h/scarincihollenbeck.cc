import {
  ButtonTab,
  ButtonGroup,
  MobileGroup,
  NavItem,
  ButtonDropdown,
} from 'styles/ButtonsMenu.style';

const ButtonsMenu = ({
  tabs, setActiveTab, activeTab, marTop,
}) => (
  <>
    <ButtonGroup marTop={marTop}>
      {tabs.map((tab) => (
        <ButtonTab
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.title}
        </ButtonTab>
      ))}
    </ButtonGroup>
    <MobileGroup>
      <ButtonDropdown title="Menu Options">
        {tabs.map((tab) => (
          <NavItem
            key={tab.id}
            id={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
          >
            {tab.title}
          </NavItem>
        ))}
      </ButtonDropdown>
    </MobileGroup>
  </>
);

export default ButtonsMenu;
