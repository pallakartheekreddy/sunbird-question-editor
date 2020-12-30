import { NgModule } from '@angular/core';
import { QuestionEditorLibraryComponent } from './question-editor-library.component';
import { BaseEditorComponent } from './components/base-editor/base-editor.component';
import { QuestionComponent } from './components/question/question.component';



@NgModule({
  declarations: [QuestionEditorLibraryComponent, BaseEditorComponent, QuestionComponent],
  imports: [
  ],
  exports: [QuestionEditorLibraryComponent]
})
export class QuestionEditorLibraryModule { }
