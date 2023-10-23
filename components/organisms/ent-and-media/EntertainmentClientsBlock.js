import Tooltip from 'components/atoms/Tooltip';
import EnterntainmentClientsPagination from 'components/molecules/ent-and-media/EnterntainmentClientsPagination';
import Image from 'next/image';
import React, { useState } from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import {
  EntertainmentActionBlockContentImage,
  EntertainmentClientsDescription,
  EntertainmentClientsItem,
  EntertainmentClientsItemCategory,
  EntertainmentClientsItemContent,
  EntertainmentClientsItemContentCategory,
  EntertainmentClientsItemContentName,
  EntertainmentClientsItemContentProfession,
  EntertainmentClientsItemContentWrapper,
  EntertainmentClientsItemName,
  EntertainmentClientsItemOpener,
  EntertainmentClientsItemOpenerWrapper,
  EntertainmentClientsItemProfession,
  EntertainmentClientsList,
  EntertainmentClientsListItems,
  EntertainmentClientsSection,
  EntertainmentClientsSubtitle,
  EntertainmentClientsTitle,
} from 'styles/practices-special-style/ent-adn-media/EntertainmentClientsBlock.style';

const EntertainmentClientsBlock = ({
  title,
  description,
  items,
  itemsPerPage,
}) => {
  const [openItemId, setOpenItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  if (itemsPerPage > items.length) {
    itemsPerPage = items.length;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleShowContent = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  return (
    <EntertainmentClientsSection>
      <ContainerContent>
        <EntertainmentClientsSubtitle>
          Representative Clients
        </EntertainmentClientsSubtitle>
        <EntertainmentClientsTitle>{title}</EntertainmentClientsTitle>
        <EntertainmentClientsDescription>
          {description}
        </EntertainmentClientsDescription>
        <EntertainmentClientsList>
          <EnterntainmentClientsPagination
            itemsPerPage={itemsPerPage}
            totalItems={items.length}
            onPageChange={handlePageChange}
          />
          <EntertainmentClientsListItems>
            {currentItems.map((item) => (
              <EntertainmentClientsItem
                onClick={() => handleShowContent(item.id)}
                key={item.id}
                color={item.color}
                className={openItemId === item.id ? 'open fade-in' : 'fade-in'}
              >
                <EntertainmentClientsItemOpener>
                  <EntertainmentClientsItemOpenerWrapper>
                    <EntertainmentClientsItemCategory>
                      <Tooltip textTooltip={item.category}>
                        {item.category}
                      </Tooltip>
                      <div className="delimiter">/</div>
                    </EntertainmentClientsItemCategory>

                    <EntertainmentClientsItemName>
                      <Tooltip textTooltip={item.name}>{item.name}</Tooltip>
                    </EntertainmentClientsItemName>

                    <EntertainmentClientsItemProfession>
                      <div className="delimiter">/</div>
                      <Tooltip textTooltip={item.profession}>
                        {item.profession}
                      </Tooltip>
                    </EntertainmentClientsItemProfession>
                  </EntertainmentClientsItemOpenerWrapper>
                </EntertainmentClientsItemOpener>
                <EntertainmentClientsItemContent>
                  <EntertainmentClientsItemContentWrapper>
                    <EntertainmentClientsItemContentCategory>
                      {item.category}
                    </EntertainmentClientsItemContentCategory>
                    <EntertainmentActionBlockContentImage>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1920}
                        height={1080}
                      />
                    </EntertainmentActionBlockContentImage>
                    <EntertainmentClientsItemContentName>
                      {item.name}
                    </EntertainmentClientsItemContentName>
                    <EntertainmentClientsItemContentProfession>
                      {item.profession}
                    </EntertainmentClientsItemContentProfession>
                  </EntertainmentClientsItemContentWrapper>
                </EntertainmentClientsItemContent>
              </EntertainmentClientsItem>
            ))}
          </EntertainmentClientsListItems>
        </EntertainmentClientsList>
      </ContainerContent>
    </EntertainmentClientsSection>
  );
};

export default EntertainmentClientsBlock;
