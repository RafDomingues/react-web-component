import React from 'react';
import camelCaseToKebabCase from './string.utils';
import { generateWebComponent, ShadowConfigEnum } from './web-component-generator';
import RwcTypesEnum from '../rwc-types.enum';

interface ReactWebComponentConfig {
  attrsTypes?: Record<string, RwcTypesEnum>,
  shadowConfig?: ShadowConfigEnum,
  shadowStyle?: string
}

/**
 * Transform the given react component into a simple web-component with them props
 * @param ReactComponent, react component to be transformed into a web component
 * @param attrTypes
 * @return the web component name
 * @constructor
 */
function ReactWebComponent<P extends object>
(ReactComponent: React.FunctionComponent<P>, { attrsTypes, shadowConfig, shadowStyle }: ReactWebComponentConfig): string {
  const reactComponentName: string = camelCaseToKebabCase(ReactComponent.name);
  // define the web component name
  customElements.define(reactComponentName,
    generateWebComponent<P>(ReactComponent, attrsTypes, shadowConfig, shadowStyle));
  return reactComponentName;
}

export default ReactWebComponent
