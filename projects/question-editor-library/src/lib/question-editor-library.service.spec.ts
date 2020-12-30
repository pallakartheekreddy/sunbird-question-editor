import { TestBed } from '@angular/core/testing';

import { QuestionEditorLibraryService } from './question-editor-library.service';

describe('QuestionEditorLibraryService', () => {
  let service: QuestionEditorLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionEditorLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
