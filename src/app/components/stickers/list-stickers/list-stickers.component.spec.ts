import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStickersComponent } from './list-stickers.component';

describe('ListStickersComponent', () => {
  let component: ListStickersComponent;
  let fixture: ComponentFixture<ListStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
