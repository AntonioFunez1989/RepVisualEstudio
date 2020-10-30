import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CFTPage } from './cft.page';

describe('CFTPage', () => {
  let component: CFTPage;
  let fixture: ComponentFixture<CFTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CFTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
