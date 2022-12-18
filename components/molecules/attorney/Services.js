import Link from 'next/link';
import { ServiceList, SidebarTile } from 'styles/attorney-page/ProfileSidebar.style';

const Services = ({ services }) => (
  <div>
    <SidebarTile indent="true">How I can help</SidebarTile>
    <ServiceList>
      {services.map((service) => (
        <li key={service.title}>
          <Link href={service.link}>
            <a>{service.title}</a>
          </Link>
        </li>
      ))}
    </ServiceList>
  </div>
);

export default Services;
