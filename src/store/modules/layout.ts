import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'layout'
})
class Layout extends VuexModule {
  type = window.innerWidth > 640 ? 'desktop' : 'mobile';
  width = window.innerWidth;
  height = window.innerHeight;

  get isDesktop(): boolean {
    return this.type === 'desktop';
  }

  get isMobile(): boolean {
    return this.type === 'mobile';
  }

  get windowWidth(): number {
    return this.width;
  }

  get windowHeight(): number {
    return this.height;
  }

  @Action
  updateSize(width: number, height: number): void {
    this.updateLayout(width, height);
  }

  @Mutation
  updateLayout(width: number, height: number): void {
    this.width = width;
    this.height = height;

    if (this.width > 640) {
      this.type = 'desktop';
    } else {
      this.type = 'mobile';
    }
  }
}

export default getModule(Layout);
