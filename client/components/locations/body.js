import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/attorney-card';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import textStyles from 'styles/Text.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function LocationsBody({
  attorneys, practices, map, title,
}) {
  return (
    <>
      <h4 className={grayTitleStyles.title}>{title}</h4>
      <div className="w-100 d-block mb-4">
        <iframe
          rel="preconnect"
          title={`${title} office`}
          src={map}
          className="w-100"
          height={300}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <h4 className={grayTitleStyles.title}>{`${title} Attorneys`}</h4>
      <Container>
        <Row>
          {attorneys.map((m) => (
            <Col sm={12} md={12} lg={6} className="mb-4" key={m.id}>
              <AttorneyCard
                link={`/attorney${m.link}`}
                image={m.better_featured_image}
                name={m.title}
                title={m.designation}
                number={m.phone}
                email={m.email}
                width={80}
                height={112}
                type="/attorney/[slug]"
              />
            </Col>
          ))}
        </Row>
      </Container>
      <h4 className={`${grayTitleStyles.title} mt-5`}>Services We Offer</h4>
      <Container className="mb-5">
        <Row>
          <Col sm={12} md={6} className="col-sm-12 col-md-6">
            <ul className={`${textStyles.blueTitle} mx-0 px-0`}>
              {practices.map((p, i) => (practices.length / 2 > i && (
                <li key={p.id} className="mb-3">
                  <Link href={p.uri}>
                    <a className={`${textStyles.blueTitle} ${fontStyles.ft12rem}`}>
                      <strong>
                        <u>
                          {p.title}
                        </u>
                      </strong>
                    </a>
                  </Link>
                </li>
              )))}
            </ul>
          </Col>
          <Col sm={12} md={6}>
            <ul className={`${textStyles.blueTitle} mx-0 px-0`}>
              {practices.map((p, i) => (practices.length / 2 <= i && (
                <li key={p.id} className="mb-3">
                  <Link href={p.uri}>
                    <a className={`${textStyles.blueTitle} ${fontStyles.ft12rem}`}>
                      <strong>
                        <u>
                          {p.title}
                        </u>
                      </strong>
                    </a>
                  </Link>
                </li>
              )))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
