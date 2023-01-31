import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

export default function PagesBody({ content }) {
  return (
    <>
      <div className="content mb-5">
        <JSXWithDynamicLinks HTML={content} />
      </div>
    </>
  );
}
