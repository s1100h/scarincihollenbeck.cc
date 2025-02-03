import {
  PostContentSection,
  PostContentHolder,
  PostContent,
} from 'styles/Post/PostBody.style';
import { ContainerDefault } from 'styles/Containers.style';
import BackArrow from 'components/atoms/BackArrow';
import ContentRender from 'components/atoms/ContentRender';
import empty from 'is-empty';
import {
  LibraryTag,
  LibraryTagLink,
  LibraryTags,
} from 'styles/library/LibraryTags.style';
import DisclaimerText from 'components/atoms/DisclaimerText';
import { useRef } from 'react';
import PostSidebar from './PostSidebar';

const PostBody = ({ backLink, content, tags }) => {
  const contentRef = useRef(null);
  return (
    <PostContentSection>
      <ContainerDefault>
        <PostContentHolder>
          <PostSidebar content={content} contentRef={contentRef} />
          <PostContent ref={contentRef}>
            <BackArrow href={backLink} />
            <ContentRender content={content} />

            {!empty(tags) && (
              <LibraryTags>
                {tags.map((tag) => (
                  <LibraryTag key={tag?.databaseId}>
                    <LibraryTagLink href={`/library${tag?.uri}`}>
                      {tag?.name}
                    </LibraryTagLink>
                  </LibraryTag>
                ))}
              </LibraryTags>
            )}

            <DisclaimerText text="No Aspect of the advertisement has been approved by the Supreme Court. Results may vary depending on your particular facts and legal circumstances." />
          </PostContent>
        </PostContentHolder>
      </ContainerDefault>
    </PostContentSection>
  );
};

export default PostBody;
