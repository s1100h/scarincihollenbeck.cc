import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { checkboxes } from 'utils/categories';
import {
  SITE_TITLE,
  subscriptionInputs,
  THANKS_MESSAGE,
} from 'utils/constants';
import {
  CheckBoxesList,
  FormSubscriptionContainer,
  SubscribeBtn,
} from 'styles/Subscription.style';
import kwesforms from 'kwesforms';
import empty from 'is-empty';
import Button from 'react-bootstrap/Button';
import ModalWindow from '../../common/ModalWindow';
import { StandardBlueButton } from '../../../styles/Buttons.style';
import RenderInputs from '../../shared/ContactForm/RenderInputs';
import { FormContainer } from '../../../styles/attorney-page/GetInTouchForm.styles';

const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));
const isArraysIdentical = (chosenIds, originalIds) => {
  if (chosenIds.length !== originalIds.length) {
    return false;
  }
  return chosenIds.every((element, index) => element === originalIds[index]);
};
const originalCategoriesIds = checkboxes.map((category) => category.id);
const SubscriptionModal = ({ children, customClass }) => {
  const [show, setShow] = useState(false);
  const [categoriesChosen, setCategories] = useState([]);

  const router = useRouter();
  useEffect(() => {
    kwesforms.init();
  }, [show]);
  const handleCheckCategory = (categoryId) => {
    if (categoriesChosen.includes(categoryId)) {
      setCategories(
        categoriesChosen.filter(
          (categoryIdChosen) => categoryIdChosen !== categoryId,
        ),
      );
    } else {
      setCategories([...categoriesChosen, categoryId]);
    }
  };
  const handleChooseAllClearAll = (isAllChosen) => {
    if (isAllChosen) {
      const categoriesIds = checkboxes.map((category) => category.id);
      setCategories(categoriesIds);
    } else {
      setCategories([]);
    }
  };

  return (
    <>
      <KwesScripts />
      {!empty(children) ? (
        <button onClick={() => setShow(true)} className={customClass}>
          {children}
        </button>
      ) : (
        <SubscribeBtn onClick={() => setShow(true)}>
          <span>Subscribe Now!</span>
        </SubscribeBtn>
      )}
      <ModalWindow isOpen={show} setOpenModal={setShow}>
        <FormSubscriptionContainer>
          {show && (
            <>
              <section>
                <Image
                  className="modal-subscription-logo"
                  src="/images/sh-mini-diamond-PNG.svg"
                  width={80}
                  height={80}
                  alt={`${SITE_TITLE} diamond`}
                  layout="intrinsic"
                />
                <h4>
                  Sign up to get the latest from the
                  {' '}
                  {SITE_TITLE}
                  {' '}
                  attorneys!
                </h4>
              </section>
              <FormContainer>
                <form
                  className="kwes-form"
                  action="https://kwes.io/api/foreign/forms/zkAM3capOgEtCtFB2fLD"
                  has-recaptcha-v3="true"
                  recaptcha-site-key="6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY"
                  success-message={THANKS_MESSAGE.title}
                >
                  <RenderInputs
                    arrayOfAttributes={subscriptionInputs}
                    attorneySlug={router.asPath}
                  />
                  <fieldset
                    className="checkboxes-box"
                    data-kw-group="true"
                    rules="required"
                  >
                    <span className="smallExcerpt">
                      Please select a category(s) below:
                    </span>
                    <div className="btn-choose-box">
                      <Button
                        variant="link"
                        onClick={() => handleChooseAllClearAll(true)}
                        disabled={isArraysIdentical(
                          categoriesChosen,
                          originalCategoriesIds,
                        )}
                      >
                        Select all
                      </Button>
                      <Button
                        variant="link"
                        onClick={() => handleChooseAllClearAll(false)}
                        disabled={empty(categoriesChosen)}
                      >
                        Clear all
                      </Button>
                    </div>
                    <CheckBoxesList>
                      {checkboxes.map((type) => (
                        <li key={type.key}>
                          <label htmlFor={type.key} className="mb-0">
                            <input
                              type="checkbox"
                              className="disclaimer-input"
                              id={type.key}
                              name="category"
                              label={type.label}
                              value={type.label}
                              onChange={() => handleCheckCategory(type.id)}
                              checked={categoriesChosen.includes(type.id)}
                            />
                            <span className="disclaimer-checkbox" />
                            <span className="checkbox-label">{type.label}</span>
                          </label>
                        </li>
                      ))}
                    </CheckBoxesList>
                  </fieldset>
                  <StandardBlueButton
                    disabled={empty(categoriesChosen)}
                    type="submit"
                  >
                    Submit
                  </StandardBlueButton>
                </form>
              </FormContainer>
            </>
          )}
        </FormSubscriptionContainer>
      </ModalWindow>
    </>
  );
};

export default SubscriptionModal;
