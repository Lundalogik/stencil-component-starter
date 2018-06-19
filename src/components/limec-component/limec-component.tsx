import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'limec-component',
  styleUrl: 'limec-component.css',
  shadow: true
})
export class LimecComponent {

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
