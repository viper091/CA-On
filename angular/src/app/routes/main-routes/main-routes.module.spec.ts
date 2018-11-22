import { MainRoutesModule } from './main-routes.module';

describe('MainRoutesModule', () => {
  let mainRoutesModule: MainRoutesModule;

  beforeEach(() => {
    mainRoutesModule = new MainRoutesModule();
  });

  it('should create an instance', () => {
    expect(mainRoutesModule).toBeTruthy();
  });
});
