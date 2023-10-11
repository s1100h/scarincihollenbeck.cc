import Head from 'next/head';
import Container from 'react-bootstrap/Container';

const MailChimpSubscription = () => (
  <>
    <Head>
      <link
        href="https://cdn-images.mailchimp.com/embedcode/classic-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
          We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          `}
      </style>
    </Head>
    <Container>
      <div id="mc_embed_signup">
        <form
          action="https://scarincihollenbeck.us20.list-manage.com/subscribe/post?u=70d5297a6aa7a2662c87330e2&amp;id=4121ed7190"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                />
              </label>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">
                First Name
                <input
                  type="text"
                  defaultValue=""
                  name="FNAME"
                  className=""
                  id="mce-FNAME"
                />
              </label>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">
                Last Name
                <input
                  type="text"
                  defaultValue=""
                  name="LNAME"
                  className=""
                  id="mce-LNAME"
                />
              </label>
            </div>
            <div className="clear">
              <input
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </Container>
  </>
);

export default MailChimpSubscription;
