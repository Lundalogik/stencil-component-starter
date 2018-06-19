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

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
