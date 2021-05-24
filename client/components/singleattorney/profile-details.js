import Link from 'next/link';
// {chair.length > 0 && (
//   <>
//     <p className="mb-2">
//       <strong className="cred-title">Chair: </strong>
//       {chair.map((c, i) => (
//         <Link key={c.title} href={c.link.replace('https://wp.scarincihollenbeck.com/', '')}>
//           <a className="text-white">
//             {c.title}
//             {' '}
//             Section
//             {i < chair.length - 1 && <strong className="mx-2">|</strong>}
//           </a>
//         </Link>
//       ))}
//     </p>
//   </>
//   )}
//   {coChair.length > 0 && (
//   <>
//     <p className="mb-2">
//       <strong className="cred-title">Co-Chair: </strong>
//       {coChair.map((c, i) => (
//         <Link key={c.title} href={c.link.replace('https://wp.scarincihollenbeck.com/', '')}>
//           <a className="text-white">
//             {c.title}
//             {i < chair.length - 1 && <strong className="mx-2">|</strong>}
//           </a>
//         </Link>
//       ))}
//     </p>
//   </>
//   )}
//   <p className="mb-2">
//     <strong className="cred-title">Contact: </strong>
//     {phoneNumber}
//     <strong className="mx-2">|</strong>
//     {email}
//   </p>
//   {offices.length > 0 && (
//   <>
//     <p className="mb-2">
//       <strong className="cred-title">Offices: </strong>
//       {offices.map((o, i) => (
//         <Link key={o.ID} href={o.link}>
//           <a className="text-white">
//             {o.name}
//             {i < offices.length - 1 && <strong className="mx-2">|</strong>}
//           </a>
//         </Link>
//       ))}
//     </p>
//   </>
//   )}

export default function ProfileDetails({ chair, coChair, contact, offices}) {
  return (
    <div>
      Details...
    </div>
  )
}