module.exports = {
    "expo": {
      "name": "involve",
      "slug": "involve",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/images/icon.png",
      "scheme": "myapp",
      "userInterfaceStyle": "automatic",
      "splash": {
        "image": "./assets/images/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "assetBundlePatterns": ["**/*"],
      "ios": {
        "supportsTablet": true,
        "googleServicesFile": "./GoogleService-Info.plist"
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/images/adaptive-icon.png",
          "backgroundColor": "#ffffff"
        },
        "package": "com.sen442b.involve",
        "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
      },
      "web": {
        "bundler": "metro",
        "output": "static",
        "favicon": "./assets/images/favicon.png"
      },
      "plugins": ["expo-router", "@react-native-google-signin/google-signin"],
      "experiments": {
        "tsconfigPaths": true,
        "typedRoutes": true
      },
      "extra": {
        "router": {
          "origin": false
        },
        "eas": {
          "projectId": "3ca033b9-d27f-4ebf-b4f1-8f4f75d152a1"
        }
      }
    }
  }