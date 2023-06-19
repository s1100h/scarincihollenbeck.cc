import Image from 'next/image';
import ClientSlider from '../molecules/attorney/ClientSlider';
import { ClientsBox } from '../../styles/attorney-page/General.style';

const renderClientsList = (clientsArr) => (
  <ul className={`d-flex ${clientsArr.length <= 2 ? 'gap-4' : 'justify-content-between'} overflow-auto`}>
    {clientsArr.map((client) => (
      <li key={client.clientTitle}>
        {client.clientLink.length > 0 ? (
          <a className="hovered-client" href={client.clientLink} target="_blank" rel="noreferrer">
            <Image src={client.clientImage.sourceUrl || '/images/sh-mini-diamond-PNG.png'} width={150} height={150} alt={client.clientTitle} />
          </a>
        ) : (
          <Image src={client.clientImage.sourceUrl || '/images/sh-mini-diamond-PNG.png'} width={150} height={150} alt={client.clientTitle} />
        )}
      </li>
    ))}
  </ul>
);

const Clients = ({ title, clients }) => (
  <ClientsBox>
    <h3>{title}</h3>
    {clients.length > 3 ? <ClientSlider clients={clients} buttons numbers={4} /> : renderClientsList(clients)}
  </ClientsBox>
);

export default Clients;
