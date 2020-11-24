import Link from 'next/link';
import textStyles from 'styles/Text.module.css'
import marginStyles from 'styles/Margins.module.css'

export default function Practices({ corePractices }) {
  return (
    <div>
      <h4 className={`${textStyles.redTitle} h5`}>
        <strong>Core Practices</strong>
      </h4>
      <hr />
      <ul className={marginStyles.mlMinus20} role="navigation">
        { corePractices.map((p) => (
          <li key={p.node.title} className={`${textStyles.blueTitle} mb-2`}>
            <Link href="/practices/[slug]" as={p.node.uri}>
              <a className={`${textStyles.blueTitle}`}>
                <strong>{p.node.title}</strong>
              </a>
            </Link>
          </li>
        )) }
      </ul>
      <Link href="/practices">
        <a className={`${textStyles.redTitle}`}>
          <strong>
            <u>All Practices &gt;&gt;</u>
          </strong>          
        </a>
      </Link>
    </div>
  );
}
