import { ReactNode } from "react";

import {
  useFeatureFlag,
  type FeatureFlagName,
} from "../context/featureFlagContext";

interface FeatureFlagProps {
  flag: FeatureFlagName;
  children: ReactNode;
  fallback?: ReactNode;
}

const FeatureFlag = ({ flag, children, fallback }: FeatureFlagProps) => {
  const { featureFlags } = useFeatureFlag();

  return featureFlags[flag] ? <>{children}</> : <>{fallback}</>;
};

export default FeatureFlag;
