export default class BaseWebPart extends BaseClientSideWebPart<IBaseConfig> {

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element = React.createElement(
      BaseWebPartComponent,
      {
        config: this.properties
      }
    );

    ReactDom.render(element, this.domElement);
  }
}
