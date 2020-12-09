import * as Sentry from '@sentry/browser';
import { get, isEmpty } from 'lodash';

const INTERNAL_SERVER_ERROR_CODE_REGEXP = /50\d/;
const PAGINATION_REGEXP = /(after=\d+&?|count=\d+&?)/gm;
const UUID_REGEXP = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gm;
const badUrlKeys = ['null', 'undefined', '[object Object]'];

export default ({ code, method, error, callBack, setExtra, expected403 = false }) => {
  if (![401, 403, 409].includes(code) && !expected403) {
    Sentry.configureScope(async (scope) => {
      try {
        const path = get(window, 'location.pathname', '')
          .replace('/', '')
          .replace(PAGINATION_REGEXP, '')
          .replace(UUID_REGEXP, '')
          .replace(/&$/, '');
        scope.setTag('user_timezone', get(window, 'user.timezone'));
        scope.setTag('code', code);
        scope.setTag('APP_ENV', process.env.REACT_APP_ENV);
        scope.setTag('app_version', `v${window.ver}`);
        scope.setLevel('fatal');

        const fingerPrint = [];
        const isInternalServerErr = code && INTERNAL_SERVER_ERROR_CODE_REGEXP.test(`${code}`);
        const isNotFoundValidUrl = [404].includes(code) && !badUrlKeys.some((key) => path.includes(key));
        if (method && !isInternalServerErr) {
          fingerPrint.push(method);
        }
        if (!isNotFoundValidUrl && !isInternalServerErr) {
          fingerPrint.push(path);
        }
        if (code) {
          fingerPrint.push(code);
        }
        scope.setFingerprint(fingerPrint);

        if (!isEmpty(setExtra)) {
          Object.keys(setExtra).forEach((key) => scope.setExtra(key, setExtra[key]));
        }

        const eventId = await Sentry.captureException(error);

        if (typeof callBack === 'function') {
          callBack(eventId);
        }
      } catch (e) {
        scope.setTag('description', 'Couldn\'t send error data');
        Sentry.captureException(e);
      }
    });
  }
};
