import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_taNYCJ45m",
  client_id: "6d9ono59e0m91trol77u2ilvp4",
  redirect_uri: "https://main.d2kaamdwb72vj6.amplifyapp.com/",
  response_type: "code",
  scope: "email openid groups",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
