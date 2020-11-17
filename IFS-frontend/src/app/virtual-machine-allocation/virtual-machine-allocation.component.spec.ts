import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachineAllocationComponent } from './virtual-machine-allocation.component';

describe('VirtualMachineAllocationComponent', () => {
  let component: VirtualMachineAllocationComponent;
  let fixture: ComponentFixture<VirtualMachineAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualMachineAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMachineAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
