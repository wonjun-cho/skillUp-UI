import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ListComponent } from '../list/list.component';
import { AuthService } from '../service/auth.service';
import { ListService } from '../service/list.service';
import { Task } from '../task.model';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let listService:ListService;
  let authService:AuthService;

  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule.withRoutes(
        [{path:'home', component:ListComponent}]
      )],
      declarations: [ EditComponent ],
      providers:[
        ListService, AuthService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    listService = TestBed.inject(ListService);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit task form', () => {
    let task:Task = new Task();
    spyOn(listService, 'updateItems').and.returnValue(of(task));
    component.onSubmit();
    expect(listService.updateItems).toHaveBeenCalled();
  });

});
