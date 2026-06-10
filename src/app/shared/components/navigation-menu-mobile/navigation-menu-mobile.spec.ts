import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuMobile } from './navigation-menu-mobile';

describe('NavigationMenuMobile', () => {
  let component: NavigationMenuMobile;
  let fixture: ComponentFixture<NavigationMenuMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenuMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
