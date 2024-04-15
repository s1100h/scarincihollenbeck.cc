import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import empty from 'is-empty';

export default function useNotFoundNotification(message) {
  const router = useRouter();
  const notifyTime = 5000;
  const searchParams = new URLSearchParams(router.query);

  useEffect(() => {
    const notFound = searchParams.get('notFound');
    if (notFound) {
      toast.error(message, {
        position: 'bottom-left',
        autoClose: notifyTime,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      searchParams.delete('notFound');

      setTimeout(() => {
        const updatedQueryString = searchParams.toString();
        if (!empty(updatedQueryString)) {
          router.replace(
            `${router.pathname}?${updatedQueryString}`,
            undefined,
            {
              shallow: true,
            },
          );
        } else {
          router.replace(`${router.pathname}`, undefined, {
            shallow: true,
          });
        }
      }, notifyTime);
    }
  }, [router]);
}
