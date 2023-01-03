import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { NintexPlugin } from '../../lib/nintex-plugin';

@customElement('zwc-iframe')
export class ZwcIframe extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      height: 100%;
      width: 100%;
      display: block;
    }

    .frame {
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: transparent;
      border: none;
    }
  `;
  @property()
  name!: string;
  @property()
  description!: string;
  @property()
  src: string = 'https://www.wikipedia.org/';
  @property({ type: Number })
  height: number = 500;

  static getMetaConfig(): Promise<NintexPlugin> | NintexPlugin {
    // plugin contract information
    return {
      controlName: 'IFrame-new',
      fallbackDisableSubmit: false,
      description: 'IFrame component which can render url view with the frame',
      iconUrl: 'one-line-text',
      groupName: 'Visual',
      version: '1.3',
      properties: {
        src: {
          type: 'string',
          title: 'Source URL',
          description:
            'URL of the iframe, please note many sites block been rendered in iframes',
          defaultValue: 'https://www.wikipedia.org/',
        },
        height: {
          type: 'string',
          title: 'Height',
          description: 'Height of the component',
          defaultValue: 500,
        },
        frameTitle: {
          type: 'string',
          title: 'Frame Title',
          description: 'IFrame Title',
        },
      },
      standardProperties: {
        readOnly: true,
        required: true,
        description: true,
      },
    };
  }

  // Render the UI as a function of component state
  render() {
    console.log('Props', {
      name: this.name,
      description: this.description,
      src: this.src,
      height: this.height,
    });

    let styles = { height: this.height + 'px' };

    return html` <iframe
      class="frame"
      style=${styleMap(styles)}
      .name=${this.name}
      allow="geolocation *; microphone; camera"
      .title=${this.description}
      src=${this.src}
    ></iframe>`;
  }
}
