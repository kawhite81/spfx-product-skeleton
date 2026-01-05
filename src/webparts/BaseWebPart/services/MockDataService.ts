export class MockDataService implements IDataService {
  public async getData(): Promise<any[]> {
    return [];
  }
}
