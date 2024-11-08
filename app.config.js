const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.vektor0823.helloworld.dev";
  }

  if (IS_PREVIEW) {
    return "com.vektor0823.helloworld.preview";
  }

  return "com.vektor0823.helloworld";
};

const getAppName = () => {
  if (IS_DEV) {
    return "HelloWorld (Dev)";
  }

  if (IS_PREVIEW) {
    return "HelloWorld (Preview)";
  }

  return "HelloWorld";
};

export default {
  expo: {
    name: getAppName(),
    slug: "hello_world",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: getUniqueIdentifier(),
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "13348fe9-28e4-4c13-a6d0-b5bcc8942dab",
      },
    },
    owner: "vektor0823",
  },
};
