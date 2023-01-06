import ReactDOM, { Root } from 'react-dom/client';
import React from 'react';
import RwcTypesEnum from '../rwc-types.enum';
import transformStringValueToTyped from '../../utils/type.utils';

export enum ShadowConfigEnum {
  NO_SHADOW = 'no-shadow', // Do not create shadow dom
  OPENED_SHADOW = 'open', // enable access to shadow DOM with the JavaScript
  CLOSED_SHADOW = 'closed' // disable access to shadow DOM with the JavaScript
}


export const generateWebComponent = <P extends object>(ReactComponent: React.FunctionComponent<P>,
                                                       attrsTypes: Record<string, RwcTypesEnum> = {},
                                                       shadowConfig: ShadowConfigEnum = ShadowConfigEnum.NO_SHADOW,
                                                       shadowStyle?: string) => {
  /**
   * Return a class extending the HTMLELement class, it will be used to init web-component
   */
  return class extends HTMLElement {
    /**
     * Store the React root (react 18 must use the root to re-render)
     * @private
     */
    private root?: Root;

    public constructor() {
      super();
    }

    /**
     * Called by parent when the web component is attached to the dom
     */
    private connectedCallback(): void {
      this.mount();
    }

    /**
     * Called by parent when the web component is disconnected from dom
     * @private
     */
    private disconnectedCallback(): void {
      this.unmount();
    }

    /**
     * Mount the web component by initializing the React component
     */
    private mount(): void {
      const container = this.retrieveContainer();
      if (shadowStyle && shadowConfig !== ShadowConfigEnum.NO_SHADOW) {
        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.textContent = shadowStyle;
        container.appendChild(styleTag);
      }
      // create the react root and store it
      this.root = ReactDOM.createRoot(container);
      const props = this.retrieveAllAttributesAsProps();
      // @ts-ignore
      this.root.render(React.createElement(ReactComponent, props));
    }

    /**
     * Retrieve the container depending on shadow config
     * We return a shadowRoot on open/closed case
     * We return current element on other case
     * @private
     */
    private retrieveContainer(): ShadowRoot | Element {
      switch (shadowConfig) {
        case ShadowConfigEnum.OPENED_SHADOW:
          return this.attachShadow({mode: 'open'});
        case ShadowConfigEnum.CLOSED_SHADOW:
          return this.attachShadow({mode: 'closed'});
        default:
          return this;
      }
    }

    /**
     * Unmount the component
     * @private
     */
    private unmount(): void {
      this.root?.unmount();
    }

    /**
     * Retrieve all attributes from the html tag and transform them to a props list
     * @private
     */
    private retrieveAllAttributesAsProps() {
      const attrs: NamedNodeMap = this.attributes;
      const props: any = {};
      for (let i: number = 0; i < attrs.length; i++) {
        const attrName = attrs[i].nodeName;
        const attrValue = this.getAttribute(attrName);
        if (attrValue !== null) {
          props[attrName] = transformStringValueToTyped(attrValue, attrsTypes[attrName]);
        }
      }
      return props;
    }
  }
}
