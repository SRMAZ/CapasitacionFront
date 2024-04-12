import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamListComponent } from './iteam-list.component';

describe('IteamListComponent', () => {
  let component: IteamListComponent;
  let fixture: ComponentFixture<IteamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
