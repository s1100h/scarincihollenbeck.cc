import { fetchAPI } from './api';
import { getOffices } from './graphql-queries';

export const getOfficesData = async () => {
  const { officeLocations } = await fetchAPI(getOffices);

  return officeLocations.nodes.map((office) => ({
    databaseId: office.databaseId,
    featuredImage: office.featuredImage.node.sourceUrl,
    uri: office.uri,
    slug: office.slug,
    title: office.title,
    ...office.officeMainInformation,
  }));
};
