import axios from 'axios';
import get from 'lodash/get';
import uuidv4 from 'uuidv4';

import { normalizeHTMLEntities } from 'utils/objects';
import sentry from 'utils/sentry';

import { API_HOST, VERSION } from './constants';

const maxRepeatCount = 3;
const expect403Codes = ['AccessForbidden'];

export function makeRequest(options) {
  let repeatCount = 1;
  let repeatRequestId = null;

  const makeScopeRequest = (scopeOptions) => axios(scopeOptions)
    .then((response) => {
      if (repeatRequestId === get(scopeOptions, 'repeatRequestId')) {
        repeatCount = 0;
        repeatRequestId = null;
      }
      if (get(response, 'status') !== 200) throw response;
      let { data } = response;
      data = normalizeHTMLEntities(data);
      return data;
    })
    .catch((error) => {
      const responseCode = get(error, 'response.data.code');
      const code = get(error, 'response.status');

      if (error && error.code !== 'ECONNABORTED') {
        sentry({
          code,
          method: scopeOptions.method,
          error,
          expected403: expect403Codes.includes(responseCode)
        });
      }

      if (code >= 500 && repeatCount < maxRepeatCount) {
        if (repeatCount === 1) {
          repeatRequestId = uuidv4();
          scopeOptions.repeatRequestId = repeatRequestId;
        }
        repeatCount++;
        return makeScopeRequest(scopeOptions);
      } else {
        throw error;
      }
    });

  return makeScopeRequest(options);
}

export function request({ method, url, token, data, params, expand }) {
  url = `${API_HOST}/${VERSION}${url}`;
  const options = { method, url, headers: { version: window.ver } };
  if (token) options.headers.Authorization = `Bearer ${token}`;
  if (data) options.data = data;
  if (params) options.params = params;
  if (expand) options.params = options.params ? Object.assign(options.params, { expand }) : { expand };
  return makeRequest(options);
}
