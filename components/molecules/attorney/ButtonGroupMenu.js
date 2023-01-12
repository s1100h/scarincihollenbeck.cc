import { useId } from 'react';
import {
  ButtonDropdown,
  ButtonGroup,
  ButtonTab,
  MobileGroup,
  NavItem,
} from 'styles/ButtonsMenu.style';

const changeTitleMap = {
  'Representative Matters': 'Matters',
  'Representative Clients': 'Clients',
  'News Press Releases': 'Releases',
  'Awards & Recognitions': 'Awards',
  'Notable Facts': 'Facts',
};

export const ButtonGroupMenu = ({ setActiveTab, activeTab, tabs }) => (
  <>
    <ButtonGroup>
      {tabs.map((tab) => (
        <ButtonTab
          key={tab.id}
          active={activeTab === tab.id ? 'true' : undefined}
          onClick={() => setActiveTab(tab.id)}
        >
          {changeTitleMap[tab.title] || tab.title}
        </ButtonTab>
      ))}
      {tabs.length > 0
        && tabs.map(
          (tab) => tab === 'More' && (
          <ButtonTab
            key={useId()}
            active={activeTab === 18 ? 'true' : undefined}
            onClick={() => setActiveTab(18)}
          >
            More
          </ButtonTab>
          ),
        )}
    </ButtonGroup>
    <MobileGroup>
      <ButtonDropdown title="Menu">
        {tabs.map((tab) => (
          <NavItem
            key={tab.id}
            active={activeTab === tab.id ? 'true' : undefined}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </NavItem>
        ))}
      </ButtonDropdown>
    </MobileGroup>
  </>
);

export default ButtonGroupMenu;
