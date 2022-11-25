import {
  ButtonDropdown, ButtonGroup, ButtonTab, NavItem,
} from 'styles/ButtonsMenu.style';

export const ButtonGroupMenu = ({
  mainTabs, setActiveTab, moreTabs, activeTab,
}) => (
  <ButtonGroup>
    {mainTabs.map((tab) => (
      <ButtonTab key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
        {tab.title === 'News Press Releases' ? 'News & Press Releases' : tab.title}
      </ButtonTab>
    ))}
    {moreTabs.length > 0 && (
      <div style={{ width: '200px' }}>
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
      </div>
    )}
  </ButtonGroup>
);

export default ButtonGroupMenu;
