import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import { IBaseConfig } from './models/IBaseConfig';
import { BaseWebPartComponent } from './components/BaseWebPart';

export interface IBaseWebPartProps extends IBaseConfig {}

export default class BaseWebPart extends BaseClientSideWebPart<IBaseWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<any> = React.createElement(
      BaseWebPartComponent,
      {
        config: this.properties
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Web part configuration'
          },
          groups: [
            {
              groupName: 'Settings',
              groupFields: [
                PropertyPaneToggle('enabled', {
                  label: 'Enable web part',
                  onText: 'Enabled',
                  offText: 'Disabled'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
