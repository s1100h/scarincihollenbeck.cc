import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import decodeResponse from 'utils/decodeResponse';
import empty from 'is-empty';

const ContactModal = dynamic(() => import('components/shared/ContactModal'));
const SubscriptionModal = dynamic(() => import('components/shared/SubscriptionModal'));

const CommonModals = () => {
  const router = useRouter();
  const [categoriesFromWP, setCategoriesFromWP] = useState();

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
    const handleRouteChange = async () => {
      if (!categoriesFromWP) return;

      const kwesforms = await import('kwesforms');
      await kwesforms.init();

      const forms = document.querySelectorAll('.kwes-form');
      forms.forEach((form) => {
        form.className = 'kwes-form-init d-print-none w-100';
      });
    };

    handleRouteChange();

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [categoriesFromWP]);

  return (
    <>
      <ContactModal />
      <SubscriptionModal categoriesFromWP={categoriesFromWP} />
    </>
  );
};

export default CommonModals;
