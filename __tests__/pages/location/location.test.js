import CurrentOfficeCard from 'components/molecules/location/CurrentOfficeCard';
import renderer from 'react-test-renderer';

describe('Location page', () => {
  it('Contacts snapshot', async () => {
    const props = {
      phone: '212-286-0747',
      fax: '212-808-4155',
      streetAddress: '519 8th Avenue',
      floor: '25th Floor',
      addressRegion: 'NY',
      postCode: '10018',
      addressLocality: 'New York',
    };

    const tree = renderer
      .create(
        <CurrentOfficeCard {...props}>
          <h3 className="current-office-card-title">New York City</h3>
        </CurrentOfficeCard>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
