import { FC, createContext, ReactNode, useContext } from "react";
import config from "../config";

interface FeatureFlagContextProps {
  featureFlags: FeatureFlags;
}

type FeatureFlags = typeof config.flags;
export type FeatureFlagName = keyof FeatureFlags;

const FeatureFlagContext = createContext<FeatureFlagContextProps | undefined>(
  undefined
);

interface FeatureFlagProviderProps {
  children: ReactNode;
}

export const FeatureFlagProvider: FC<FeatureFlagProviderProps> = ({
  children,
}) => {
  const featureFlags: FeatureFlags = config.flags;

  return (
    <FeatureFlagContext.Provider value={{ featureFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlag = () => {
  const context = useContext(FeatureFlagContext);

  if (context === undefined) {
    throw new Error("useFeatureFlag must be used within a FeatureFlagProvider");
  }

  return context;
};

// you can also have this helper function
export const useIsFeatureFlagEnabled = (flag: FeatureFlagName): boolean => {
  const context = useContext(FeatureFlagContext);

  if (context === undefined) {
    throw new Error("useFeatureFlag must be used within a FeatureFlagProvider");
  }

  return context.featureFlags[flag] ?? false;
};

export default FeatureFlagProvider;
