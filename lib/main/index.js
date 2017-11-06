import titleCase from 'title-case';

export default ({ path }) =>
  path
    .split('/')
    .map(element => titleCase(element.replace(/\..+$/, '')))
    .filter(Boolean)
    .join(': ');
