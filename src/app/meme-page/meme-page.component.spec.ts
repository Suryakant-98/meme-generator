import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemePageComponent } from './meme-page.component';

describe('MemePageComponent', () => {
  let component: MemePageComponent;
  let fixture: ComponentFixture<MemePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemePageComponent]
    });
    fixture = TestBed.createComponent(MemePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
