import Image from 'next/legacy/image';
import * as ImageNew from 'next/image';
import { MobileWrapp, UpFromMobile } from '../../../styles/attorney-page/AttorneyProfile.style';

const ProfileImage = ({ name, profileImage }) => (
  <>
    <UpFromMobile>
      <Image
        src={profileImage}
        alt={name}
        width={743}
        height={795}
        layout="intrinsic"
        quality={100}
        className="animate__animated animate__fadeInUp animate__fast"
        priority
        loading="eager"
      />
    </UpFromMobile>
    <MobileWrapp>
      <ImageNew src={profileImage} width={350} height={400} />
    </MobileWrapp>
  </>
);

export default ProfileImage;
