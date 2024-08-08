import { ReactNode } from "react";
import { FeatureFlagProvider } from "../context/featureFlagContext";

export default function Layout({ children }: { children: ReactNode }) {
  return <FeatureFlagProvider>{children}</FeatureFlagProvider>;
}
