import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import {
  ArticleBox,
  ImageAttorneysGroup,
  ImageBlindLady,
  LinkListBox404,
  TilesBox,
} from '../../styles/404.style';
import PostBreadcrumbs from '../organisms/post/PostBreadcrumbs';
import { tile404ContentArr } from '../../utils/tileContent';
import TileContacts from '../molecules/contact-us/TileContacts';
import { Links404NavArr } from '../../utils/constants';

const ErrorPage = ({ title, mainMessage }) => (
  <>
    <Container>
      <div className="mt-5 mb-5">
        <PostBreadcrumbs />
      </div>
      <Row>
        <Col sm={12} lg={6}>
          <ArticleBox>
            <h1>{title}</h1>
            <p>{mainMessage}</p>
          </ArticleBox>
          <TilesBox>
            {tile404ContentArr.map((tile) => (
              <TileContacts
                key={tile.id}
                title={tile.title}
                textContent={tile.textContent}
                icon={tile.icon}
                image={tile.image}
              />
            ))}
          </TilesBox>
          <LinkListBox404>
            <h3>
              <strong>Or try visiting one of these pages on our site to narrow your search.</strong>
            </h3>
            <ul>
              {Links404NavArr.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </LinkListBox404>
          <ImageAttorneysGroup>
            <Image src="/images/group-attorneys.webp" fill alt="Group of attorneys" />
          </ImageAttorneysGroup>
        </Col>
        <Col sm={12} lg={6}>
          <ImageBlindLady>
            <Image src="/images/404.webp" fill alt="Attorneys near work." />
          </ImageBlindLady>
        </Col>
      </Row>
    </Container>
  </>
);

export default ErrorPage;
