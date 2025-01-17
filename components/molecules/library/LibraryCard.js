import Image from 'next/image';
import React from 'react';
import { Title20 } from 'styles/common/Typography.style';
import {
  LibraryCardAuthor,
  LibraryCardAuthorLink,
  LibraryCardBox,
  LibraryCardContent,
  LibraryCardDate,
  LibraryCardFooter,
  LibraryCardImage,
  LibraryCardLink,
  LibraryCardTag,
  LibraryCardTagLink,
  LibraryCardTags,
  LibraryCardText,
} from 'styles/LibraryCard.style';
import empty from 'is-empty';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import { formatDate } from 'utils/helpers';

const LibraryCard = ({
  title,
  image,
  uri,
  description,
  author,
  date,
  tags,
}) => (
  <LibraryCardBox>
    {!empty(title) && (
      <LibraryCardImage>
        <Image
          src={image}
          alt={`${title} post image`}
          width={500}
          height={240}
          sizes="500px"
        />
      </LibraryCardImage>
    )}

    <LibraryCardContent>
      {!empty(title) && <Title20 title={title}>{title}</Title20>}
      {!empty(description) && (
        <LibraryCardText>
          <JSXWithDynamicLinks HTML={description} />
        </LibraryCardText>
      )}
      {!empty(tags) && (
        <LibraryCardTags>
          {tags.map((tag) => (
            <LibraryCardTag key={tag?.title}>
              <LibraryCardTagLink href={tag?.uri}>
                {tag?.title}
              </LibraryCardTagLink>
            </LibraryCardTag>
          ))}
        </LibraryCardTags>
      )}

      <LibraryCardFooter>
        {!empty(author?.name) && (
          <LibraryCardAuthor>
            <span>Author: </span>
            <LibraryCardAuthorLink
              as={author?.uri.includes('scarinci-hollenbeck') && 'span'}
              href={
                !author?.uri.includes('scarinci-hollenbeck')
                  ? `/library${author?.uri}`
                  : undefined
              }
            >
              {author?.name}
            </LibraryCardAuthorLink>
          </LibraryCardAuthor>
        )}

        {!empty(date) && (
          <LibraryCardDate dateTime={date}>{formatDate(date)}</LibraryCardDate>
        )}
      </LibraryCardFooter>
    </LibraryCardContent>

    <LibraryCardLink href={uri} passHref title={title}>
      <span className="sr-only">{`Link to post with title - "${title}"`}</span>
    </LibraryCardLink>
  </LibraryCardBox>
);

export default LibraryCard;
