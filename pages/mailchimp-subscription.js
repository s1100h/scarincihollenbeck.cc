import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function MailChimp() {
  return (
    <>
      <NextSeo noindex />
      <Head>
        <script id="mcjs">
          !
          {`
        function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/70d5297a6aa7a2662c87330e2/5feb0173b341358e8042ea1ca.js");
        `}
        </script>
      </Head>
    </>
  );
}
