import {
  ButtonDropdown,
  ButtonGroup,
  ButtonTab,
  MobileGroup,
  NavItem,
} from 'styles/ButtonsMenu.style';

export const ButtonGroupMenu = ({
  mainTabs, setActiveTab, moreTabs, activeTab, tabs,
}) => (
  <>
    <ButtonGroup>
      {mainTabs.map((tab) => (
        <ButtonTab key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
          {tab.title === 'News Press Releases' ? 'News & Press Releases' : tab.title}
        </ButtonTab>
      ))}
      {moreTabs.length > 0 && (
        <ButtonDropdown title="More">
          {moreTabs.map((tab) => (
            <NavItem
              key={tab.id}
              id={tab.id}
              active={activeTab === tab.id}
              onClick={() => {
                setActiveTab(tab.id);
              }}
            >
              {tab.title}
            </NavItem>
          ))}
        </ButtonDropdown>
      )}
    </ButtonGroup>
    <MobileGroup>
      <ButtonDropdown title="Menu">
        {tabs.map((tab) => (
          <NavItem key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
            {tab.title}
          </NavItem>
        ))}
      </ButtonDropdown>
    </MobileGroup>
  </>
);

export default ButtonGroupMenu;
