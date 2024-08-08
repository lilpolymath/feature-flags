import { useFeatureFlag } from "../context/featureFlagContext";
import NewLoginPage from "./new-login-page";
import OldLoginPage from "./old-login-page";

export default function Login() {
  const { featureFlags } = useFeatureFlag();
  return (
    <div>{featureFlags.newLoginPage ? <NewLoginPage /> : <OldLoginPage />}</div>
  );
}
