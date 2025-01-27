import devWarning, { resetWarned } from './warning';

export { resetWarned };

export default (valid: boolean, component: string, message: string): void => {
  devWarning(valid, `[water pro: ${component}] ${message}`);
};
