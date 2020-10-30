import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DAMDOSPage } from './dam-dos.page';

describe('DAMDOSPage', () => {
  let component: DAMDOSPage;
  let fixture: ComponentFixture<DAMDOSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAMDOSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DAMDOSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
