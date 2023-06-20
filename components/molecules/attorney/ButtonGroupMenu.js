import { useId } from 'react';
import {
  ButtonDropdown, ButtonGroup, ButtonTab, MobileGroup, NavItem,
} from 'styles/ButtonsMenu.style';
import { useRouter } from 'next/router';

const changeTitleMap = {
  'Representative Matters': 'Matters',
  'Representative Clients': 'Clients',
  'News Press Releases': 'Releases',
  'Awards & Recognitions': 'Awards',
  'Notable Facts': 'Facts',
};

export const ButtonGroupMenu = ({ setActiveTab, activeTab, tabs }) => {
  const { route } = useRouter();
  const routsCondition = route.includes('attorneys');

  return (
    <>
      <ButtonGroup isNotProfile={routsCondition.toString() === 'true' ? 'true' : ''}>
        {tabs.map((tab) => (
          <ButtonTab key={tab.id} active={activeTab === tab.id ? 'true' : undefined} onClick={() => setActiveTab(tab.id)}>
            {changeTitleMap[tab.title] || tab.title}
          </ButtonTab>
        ))}
        {tabs.length > 0
          && tabs.map(
            (tab) => tab === 'More' && (
            <ButtonTab key={useId()} active={activeTab === 18 ? 'true' : undefined} onClick={() => setActiveTab(18)}>
              More
            </ButtonTab>
            ),
          )}
      </ButtonGroup>
      {!routsCondition && (
        <MobileGroup>
          <ButtonDropdown title="Menu">
            {tabs.map((tab) => (
              <NavItem key={tab.id} active={activeTab === tab.id ? 'true' : undefined} onClick={() => setActiveTab(tab.id)}>
                {tab.title}
              </NavItem>
            ))}
          </ButtonDropdown>
        </MobileGroup>
      )}
    </>
  );
};

export default ButtonGroupMenu;
