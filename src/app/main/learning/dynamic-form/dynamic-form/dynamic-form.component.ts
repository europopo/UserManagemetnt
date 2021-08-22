import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/main/service/question-control.service';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor(
    private qcs: QuestionControlService
  ) { }

  // @Input() questions: QuestionBase<any>[] = [];
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  ngOnInit(): void {
    this.questions = this.qcs.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
