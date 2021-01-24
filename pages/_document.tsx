import React from "react";
import Document, { Html, Head, Main, FlareactScript } from "flareact/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white text-gray-900">
          <Main />
          <FlareactScript />
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "0092687451534aa18387c263f4732039"}'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
