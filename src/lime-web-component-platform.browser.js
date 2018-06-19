// Mock platform implementation for development purposes

class LimeWebComponentPlatformBrowser {
  alertMessage(message) {
    alert(message)
  }

  logMessage(message) {
    console.log(message)
  }
}

window.LimeWebComponentPlatformBrowser = LimeWebComponentPlatformBrowser