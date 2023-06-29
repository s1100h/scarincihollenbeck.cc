import { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import { checkboxes } from 'utils/categories';
import { SITE_TITLE } from 'utils/constants';
import { CheckBoxesList, FormContainer, SubscribeBtn } from 'styles/Subscription.style';
import kwesforms from 'kwesforms';
import ModalWindow from '../../common/ModalWindow';
import { StandardRedButton } from '../../../styles/Buttons.style';

const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));

const SubscriptionModal = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <>
      <KwesScripts />
      <SubscribeBtn onClick={() => setShow(true)}>
        <span>Subscribe Now!</span>
      </SubscribeBtn>
      <ModalWindow isOpen={show} setOpenModal={setShow}>
        <FormContainer>
          <section>
            <Image src="/images/sh-mini-diamond-PNG.png" width={130} height={107} alt={`${SITE_TITLE} diamond`} layout="intrinsic" />
            <h4>
              Sign up to get the latest from the
              {SITE_TITLE}
              {' '}
              attorneys!
            </h4>
          </section>
          <form className="kwes-form" action="https://kwes.io/api/foreign/forms/zkAM3capOgEtCtFB2fLD" has-recaptcha-v3="true" recaptcha-site-key="6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY">
            <input type="hidden" name="currentPage" value={`https://scarincihollenbeck.com${router.asPath}`} />
            <input type="text" className="form-control mb-2" name="firstName" placeholder="First name" rules="required|max:255" />
            <input type="text" className="form-control mb-2" name="lastName" placeholder="Last name" rules="required|max:255" />
            <input type="email" className="form-control mb-2" name="email" placeholder="Email address" rules="required|max:255" />
            <fieldset data-kw-group="true" rules="required">
              <span className="smallExcerpt">Please select a category(s) below:</span>
              <CheckBoxesList>
                {checkboxes.map((type) => (
                  <li key={type.key}>
                    <label htmlFor={type.key} className="mb-0">
                      <input type="checkbox" id={type.key} name="category" label={type.label} value={type.label} />
                      <span className="mx-2">{type.label}</span>
                    </label>
                  </li>
                ))}
              </CheckBoxesList>
            </fieldset>
            <div className="modal-footer justify-content-start">
              <StandardRedButton type="submit">Submit</StandardRedButton>
            </div>
          </form>
        </FormContainer>
      </ModalWindow>
    </>
  );
};

export default SubscriptionModal;
