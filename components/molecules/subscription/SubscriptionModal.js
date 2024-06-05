import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
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
import Loader from '../../atoms/Loader';
import decodeResponse from '../../../utils/decodeResponse';

const KwesScripts = dynamic(() => import('components/shared/KwesScripts'));

const isArraysIdentical = (chosenIds, originalIds) => {
  if (chosenIds.length !== originalIds.length) {
    return false;
  }
  return chosenIds.every((element, index) => element === originalIds[index]);
};

const originalCategoriesIds = (categoryArr) => categoryArr.map((category) => category.id);

const SubscriptionModal = ({ children, customClass }) => {
  const [categoriesFromWP, setCategoriesFromWP] = useState();
  const [show, setShow] = useState(false);
  const [categoriesChosen, setCategories] = useState([]);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const blogCategories = await fetch('/api/revalidate-categories');
      const resDecoded = await decodeResponse(blogCategories);
      if (!empty(resDecoded.data)) {
        setCategoriesFromWP(resDecoded.data);
      }
    })();
  }, []);

  useEffect(() => {
    if (show) {
      kwesforms.init();
    }
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
      setCategories(originalCategoriesIds(categoriesFromWP));
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
                          originalCategoriesIds(categoriesFromWP),
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
                      {!empty(categoriesFromWP) ? (
                        <>
                          {categoriesFromWP?.map(({ id, name }) => (
                            <li key={id}>
                              <label htmlFor={id} className="mb-0">
                                <input
                                  type="checkbox"
                                  className="disclaimer-input"
                                  id={id}
                                  name="category"
                                  value={name}
                                  onChange={() => handleCheckCategory(id)}
                                  checked={categoriesChosen.includes(id)}
                                />
                                <span className="disclaimer-checkbox" />
                                <span className="checkbox-label">{name}</span>
                              </label>
                            </li>
                          ))}
                        </>
                      ) : (
                        <Loader />
                      )}
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
