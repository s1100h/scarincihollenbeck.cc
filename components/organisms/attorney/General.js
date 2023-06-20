import Surface from 'components/atoms/micro-templates/surface';
import ClientSlider from 'components/molecules/attorney/ClientSlider';
import {
  ClientsBox, EducationAdmissionBox, GeneralContainer, GrayList,
} from 'styles/attorney-page/General.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const General = ({ content }) => {
  const {
    miniBio, education, barAdmissions, additionalInfo, clients, affiliations,
  } = content;
  return (
    <Surface unscrollable="true">
      <GeneralContainer>
        <strong>{miniBio}</strong>
        <EducationAdmissionBox>
          {education && (
            <GrayList>
              <JSXWithDynamicLinks HTML={`<h3>Education</h3>${education}`} />
            </GrayList>
          )}
          {barAdmissions && (
            <GrayList>
              <JSXWithDynamicLinks HTML={`<h3>Admissions</h3>${barAdmissions}`} />
            </GrayList>
          )}
        </EducationAdmissionBox>
        {affiliations?.length > 0 && (
          <GrayList hightAuto="true">
            <JSXWithDynamicLinks HTML={`<h3>Affiliations</h3>${affiliations}`} />
          </GrayList>
        )}
        {additionalInfo?.length > 0 && (
          <GrayList hightAuto="true">
            <h3>Additional Info</h3>
            {additionalInfo.map(({ title, content }) => (
              <>
                {title.length > 0 && <h5 className="mb-0">{title}</h5>}
                <JSXWithDynamicLinks HTML={`${content}`} />
              </>
            ))}
          </GrayList>
        )}
        {clients && clients.length > 0 && (
          <ClientsBox>
            <h3>Clients</h3>
            <ClientSlider clients={clients} buttons numbers={4} />
          </ClientsBox>
        )}
      </GeneralContainer>
    </Surface>
  );
};

export default General;
