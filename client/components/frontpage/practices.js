import Link from 'next/link';
import textStyles from '../../styles/Text.module.css'
import fontStyles from '../../styles/Fonts.module.css'

export default function Practices({ corePractices }) {
  return (
    <div>
      <h4 className={`${textStyles.redTitle} h5`}>Core Practices</h4>
      <hr />
      <ul className="ml-4" role="navigation">
        { corePractices.map((p) => (
          <li key={p.node.title} className={textStyles.blueTitle}>
            <Link href="/practices/[slug]" as={p.node.uri}>
              <a className={`${textStyles.blueTitle} ${fontStyles.proximaBold}`}>
                {p.node.title}
              </a>
            </Link>
          </li>
        )) }
      </ul>
      <Link href="/practices">
        <a className={`${textStyles.redTitle} ${fontStyles.proximaBold}`}>
          <u>
            All Practices &gt;&gt;
          </u>
        </a>
      </Link>
    </div>
  );
}
