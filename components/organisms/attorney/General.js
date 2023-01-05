import Surface from 'components/atoms/micro-templates/surface';
import ClientSlider from 'components/molecules/attorney/ClientSlider';
import {
  ClientsBox,
  EducationAdmissionBox,
  GeneralContainer,
  GrayList,
} from 'styles/attorney-page/General.style';
import { createMarkup } from 'utils/helpers';

const General = ({ content }) => {
  const {
    miniBio, education, barAdmissions, additionalInfo, clients,
  } = content;
  return (
    <Surface unscrollable="true">
      <GeneralContainer>
        <strong>{miniBio}</strong>
        <EducationAdmissionBox>
          {education && (
            <GrayList dangerouslySetInnerHTML={createMarkup(`<h3>Education</h3>${education}`)} />
          )}
          {barAdmissions && (
            <GrayList
              dangerouslySetInnerHTML={createMarkup(`<h3>Bar Admission</h3>${barAdmissions}`)}
            />
          )}
        </EducationAdmissionBox>
        {additionalInfo && additionalInfo[0].content && (
          <GrayList
            isBigWidth="true"
            dangerouslySetInnerHTML={createMarkup(
              `<h3>Additional Info</h3>${additionalInfo[0].content}`,
            )}
          />
        )}
        {clients && clients.length > 0 && (
          <ClientsBox>
            <h3>Clients</h3>
            <ClientSlider clients={clients} imgSize={{ width: 160, height: 150 }} numbers={4} />
          </ClientsBox>
        )}
      </GeneralContainer>
    </Surface>
  );
};

export default General;
