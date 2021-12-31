import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengumumanPage } from './pengumuman.page';

describe('PengumumanPage', () => {
  let component: PengumumanPage;
  let fixture: ComponentFixture<PengumumanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengumumanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengumumanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
