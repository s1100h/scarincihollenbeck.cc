/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
// sort categories
export const sortPracticeCategorys = (list) => {
  const core = list.filter((e) => e.category === 'Core Practices');
  const additional = list.filter((e) => e.category === 'Additional Practices');
  const business = list.filter((e) => e.category === 'Business Related Practices');

  return {
    core,
    additional,
    business,
  };
};
