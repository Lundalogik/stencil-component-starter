/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  LimeWebComponentPlatform,
} from 'lime-web-component-interfaces/lime-web-component-platform.interface';

declare global {

  namespace StencilComponents {
    interface LimecComponent {
      'limeWebComponentPlatform': LimeWebComponentPlatform;
    }
  }

  interface HTMLLimecComponentElement extends StencilComponents.LimecComponent, HTMLStencilElement {}

  var HTMLLimecComponentElement: {
    prototype: HTMLLimecComponentElement;
    new (): HTMLLimecComponentElement;
  };
  interface HTMLElementTagNameMap {
    'limec-component': HTMLLimecComponentElement;
  }
  interface ElementTagNameMap {
    'limec-component': HTMLLimecComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'limec-component': JSXElements.LimecComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface LimecComponentAttributes extends HTMLAttributes {
      'limeWebComponentPlatform'?: LimeWebComponentPlatform;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;