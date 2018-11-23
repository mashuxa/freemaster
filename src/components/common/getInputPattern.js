export default function getPattern(inputType) {
  switch (inputType) {
    case 'login':
      return (/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/);
    case 'password':
      return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/);
    default:
      console.warn('Pattern undefined');
  }
}