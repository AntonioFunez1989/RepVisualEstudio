import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DAMPage } from './dam.page';

describe('DAMPage', () => {
  let component: DAMPage;
  let fixture: ComponentFixture<DAMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DAMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
