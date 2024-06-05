import Tooltip from 'components/atoms/Tooltip';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
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
import Loader from '../../atoms/Loader';
import CustomPagination from '../../atoms/CustomPagination';

const cuttingColor = (colorString) => {
  const regex = /#[A-Fa-f0-9]{6}(?:[A-Fa-f0-9]{2})?/g;
  return colorString.match(regex);
};
const EntertainmentClientsBlock = ({
  title,
  description,
  clientsPaginationData,
}) => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleShowContent = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  const {
    clients, loading, error, page, limit,
  } = clientsPaginationData;

  const memoData = useMemo(() => clients?.edges, [clientsPaginationData]);
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
          <CustomPagination
            totalItems={clients?.pageInfo?.offsetPagination?.total}
            currentPage={page}
            limit={limit}
            queryParam="client-page"
            between={3}
            ellipsis={1}
          />
          <EntertainmentClientsListItems>
            {!loading ? (
              <>
                {memoData?.map(({ node }) => (
                  <EntertainmentClientsItem
                    onClick={() => handleShowContent(node.databaseId)}
                    key={node.databaseId}
                    color={cuttingColor(node.clientsFields.lineColor)}
                    className={
                      openItemId === node.databaseId
                        ? 'open fade-in'
                        : 'fade-in'
                    }
                  >
                    <EntertainmentClientsItemOpener>
                      <EntertainmentClientsItemOpenerWrapper>
                        <EntertainmentClientsItemCategory>
                          <Tooltip
                            textTooltip={
                              node.clientsFields.entertainmentSubcategory
                            }
                          >
                            {node.clientsFields.entertainmentSubcategory}
                          </Tooltip>
                          <div className="delimiter">/</div>
                        </EntertainmentClientsItemCategory>

                        <EntertainmentClientsItemName>
                          <Tooltip textTooltip={node.title}>
                            {node.title}
                          </Tooltip>
                        </EntertainmentClientsItemName>

                        <EntertainmentClientsItemProfession>
                          <div className="delimiter">/</div>
                          <Tooltip textTooltip={node.clientsFields.proffesion}>
                            {node.clientsFields.proffesion}
                          </Tooltip>
                        </EntertainmentClientsItemProfession>
                      </EntertainmentClientsItemOpenerWrapper>
                    </EntertainmentClientsItemOpener>
                    <EntertainmentClientsItemContent>
                      <EntertainmentClientsItemContentWrapper>
                        <EntertainmentClientsItemContentCategory>
                          {node.clientsFields.entertainmentSubcategory}
                        </EntertainmentClientsItemContentCategory>
                        <EntertainmentActionBlockContentImage>
                          <Image
                            src={node.clientsFields.clientImage.sourceUrl}
                            alt={node.title}
                            width={240}
                            height={240}
                          />
                        </EntertainmentActionBlockContentImage>
                        <EntertainmentClientsItemContentName>
                          {node.title}
                        </EntertainmentClientsItemContentName>
                        <EntertainmentClientsItemContentProfession>
                          {node.clientsFields.proffesion}
                        </EntertainmentClientsItemContentProfession>
                      </EntertainmentClientsItemContentWrapper>
                    </EntertainmentClientsItemContent>
                  </EntertainmentClientsItem>
                ))}
              </>
            ) : (
              <Loader />
            )}
          </EntertainmentClientsListItems>
        </EntertainmentClientsList>
      </ContainerContent>
    </EntertainmentClientsSection>
  );
};

export default EntertainmentClientsBlock;
