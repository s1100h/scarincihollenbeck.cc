import { useEffect, useState } from 'react';
import { isMobileCheck } from 'utils/helpers';

const usePrintLogic = () => {
  const [isRenderPdf, setIsRenderPdf] = useState(false);
  const [isPrintReady, setIsPrintReady] = useState(false);

  const handlePrint = () => {
    setIsRenderPdf(true);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        handlePrint();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome/.test(userAgent);

    const cleanStates = () => {
      setIsRenderPdf(false);
      setIsPrintReady(false);
    };

    if (isRenderPdf && isPrintReady) {
      window.print();

      if (isMobileCheck()) {
        if (isChrome) {
          window.addEventListener('focus', cleanStates);
        } else {
          window.addEventListener('afterprint', cleanStates);
        }
      } else {
        cleanStates();
      }
    }

    return () => {
      if (isMobileCheck()) {
        if (isChrome) {
          window.removeEventListener('focus', cleanStates);
        } else {
          window.removeEventListener('afterprint', cleanStates);
        }
      }
    };
  }, [isRenderPdf, isPrintReady]);

  return {
    isRenderPdf,
    setIsPrintReady,
    handlePrint,
  };
};

export default usePrintLogic;
