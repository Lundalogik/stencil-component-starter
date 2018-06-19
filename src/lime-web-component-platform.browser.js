// Mock platform implementation for development purposes

class LimeWebComponentPlatformBrowser {
  alertMessage(message) {
    alert(message)
  }
}

window.LimeWebComponentPlatformBrowser = LimeWebComponentPlatformBrowser