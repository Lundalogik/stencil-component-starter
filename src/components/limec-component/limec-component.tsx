import { Component, Prop } from '@stencil/core';
import { LimeWebComponent } from 'lime-web-component-interfaces/lime-web-component.interface'
import { LimeWebComponentPlatform } from 'lime-web-component-interfaces/lime-web-component-platform.interface'

@Component({
  tag: 'limec-component',
  styleUrl: 'limec-component.css',
  shadow: true
})
export class LimecComponent implements LimeWebComponent {
  @Prop() limeWebComponentPlatform: LimeWebComponentPlatform

  render() {
    return (
      <div>
        Hello, World!
        <button onClick={ () => this.usePlatformAlert() }>
          alert
        </button>
        <button onClick={ () => this.usePlatformLog() }>
          log
        </button>
      </div>
    );
  }

  usePlatformAlert() {
    this.limeWebComponentPlatform.alertMessage('alerting things')
  }

  usePlatformLog() {
    this.limeWebComponentPlatform.logMessage('logging things')
  }
}
