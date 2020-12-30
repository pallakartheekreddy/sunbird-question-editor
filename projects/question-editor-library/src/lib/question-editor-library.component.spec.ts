import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditorLibraryComponent } from './question-editor-library.component';

describe('QuestionEditorLibraryComponent', () => {
  let component: QuestionEditorLibraryComponent;
  let fixture: ComponentFixture<QuestionEditorLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionEditorLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEditorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
