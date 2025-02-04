import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import SubHeaderKeyContacts from 'layouts/SubHeader/SubHeaderKeyContacts';
import Link from 'next/link';
import { SubHeaderDescription } from 'styles/subheader/SubHeader.style';
import { useRouter } from 'next/router';
import { CURRENT_DOMAIN } from 'utils/constants';
import {
  SubHeaderMain,
  SubHeaderPrintVersionContainer,
} from 'styles/practices/PracticePrintPage.style';
import { Title32 } from 'styles/common/Typography.style';

const SubHeaderPrintVersion = ({ title, subtitle, keyContacts }) => {
  const { asPath } = useRouter();

  return (
    <SubHeaderPrintVersionContainer>
      <SubHeaderKeyContacts keyContacts={keyContacts} isPrint />

      <SubHeaderMain>
        <Title32 as="h1">{title}</Title32>

        <Link href={`${CURRENT_DOMAIN}${asPath}`}>
          {`${CURRENT_DOMAIN}${asPath}`}
        </Link>

        {subtitle?.length > 0 && (
          <SubHeaderDescription>
            <JSXWithDynamicLinks HTML={subtitle} print />
          </SubHeaderDescription>
        )}
      </SubHeaderMain>
    </SubHeaderPrintVersionContainer>
  );
};

export default SubHeaderPrintVersion;
