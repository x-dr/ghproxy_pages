export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      const headers_Origin = request.headers.get("Access-Control-Allow-Origin") || "*"
      url.host = "www.apple.com.cn"
      const modifiedRequest = new Request(url.toString(), {
        headers: request.headers,
        method: request.method,
        body: request.body,
        redirect: 'follow'
      });
      const response = await fetch(modifiedRequest);
      const modifiedResponse = new Response(response.body, response);
      modifiedResponse.headers.set('Access-Control-Allow-Origin', headers_Origin);
      return modifiedResponse;
    },
  };
