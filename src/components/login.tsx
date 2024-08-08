import FeatureFlag from "./feature-flag";
import NewLoginPage from "./new-login-page";
import OldLoginPage from "./old-login-page";

export default function Login() {
  return (
    <FeatureFlag flag="newLoginPage" fallback={<OldLoginPage />}>
      <NewLoginPage />
    </FeatureFlag>
  );
}
