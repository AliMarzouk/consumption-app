import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConsumptionComponent } from './table-consumption.component';

describe('TableConsumptionComponent', () => {
  let component: TableConsumptionComponent;
  let fixture: ComponentFixture<TableConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConsumptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
