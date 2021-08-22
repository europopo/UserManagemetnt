import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../learning/dynamic-form/question-base';
import { DropdownQuestion } from '../learning/dynamic-form/question-dropdown';
import { TextboxQuestion } from '../learning/dynamic-form/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? 
      new FormControl(question.value || '', Validators.required) : 
      new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: '评级',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'},
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: '名字',
        value: '刘伟',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
