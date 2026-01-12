export default {
  async fetch(request, env) {
    const targetUrl = 'http://hkg.download.datapacket.com/100mb.bin';

    const headers_Origin =
      request.headers.get('Access-Control-Allow-Origin') || '*';

    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method === 'GET' || request.method === 'HEAD'
        ? null
        : request.body,
      redirect: 'follow',
    });

    const response = await fetch(modifiedRequest);

    const modifiedResponse = new Response(response.body, response);
    modifiedResponse.headers.set(
      'Access-Control-Allow-Origin',
      headers_Origin
    );

    return modifiedResponse;
  },
};
