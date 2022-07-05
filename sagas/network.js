const apiUrl = 'https://45bwzj1sgc-dsn.algolia.net/1/indexes';
const agent = 'Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)';
const apiKey = 'YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE';
const applicationId = '45BWZJ1SGC';

function parseToJsonPromise(data) {
  return new Promise(res => {
    data
      .json()
      .then(object => {
        let response = {
          successful: [200, 201, 204].includes(data.status),
          data: object,
          code: data.status,
        };
        return res(response);
      })
      .catch(error => {
        res({
          successful: false,
          data: undefined,
          code: data.status,
        });
      });
  });
}

const apiGenerator = async (url, uri, method, payload, type) => {
  let headers = {
    'Content-type': 'application/json',
    'Accept': '*/*',
  };

  const initialParams = {
    'x-algolia-agent': agent,
    'x-algolia-api-key': apiKey,
    'x-algolia-application-id': applicationId,
  };

  const params = type ? '?' + new URLSearchParams({...initialParams, ...type}) : '?' + new URLSearchParams(initialParams);

  return fetch(`${url}${uri}${params}`, {
    method,
    body: payload ? JSON.stringify(payload) : null,
    headers,
  })
    .then(data => {
      return parseToJsonPromise(data);
    })
    .catch(error => {
      console.log('Fetch error', error);

      return {
        successful: false,
        data: undefined,
        code: error.status_code,
      };
    });
};

const ApiGenerator = (uri, method, payload, type) => {
  return apiGenerator(apiUrl, uri, method, payload, type);
};

const networkAdapter = generator => {
  return {
    POST: (url, payload, type) => generator(url, 'POST', payload, type),
    PUT: (url, payload, type) => generator(url, 'PUT', payload, type),
    PATCH: (url, payload, type) => generator(url, 'PATCH', payload, type),
    DELETE: (url, payload, type) => generator(url, 'DELETE', payload, type),
    GET: (url, type) => generator(url, 'GET', null, type),
  };
};

/**
 *
 * @type {{POST: ((p1?:*, p2?:*)), PUT: ((p1?:*, p2?:*)), PATCH: ((p1?:*, p2?:*)), DELETE: ((p1?:*)), GET: ((p1?:*))}}
 * @private
 */

const _requestAPI = networkAdapter(ApiGenerator);

export const getAllLaunches = payload => _requestAPI.GET('/Launches_by_date_production', payload);
