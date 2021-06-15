import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, ViewChild  } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { CreateData } from "../tabledata";
import { NzTableComponent } from 'ng-zorro-antd/table';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})
export class ShowtableComponent implements OnInit, AfterViewInit, OnDestroy {
  tabledata: Array<Object>;
  scroll: any;
  subscribeScoll: any;
  constructor(
    private el: ElementRef,
  ) {

   }


  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent;
  private destroy$ = new Subject();

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  trackByIndex(_: number, data: any): number {
    return data.index;
  }

  ngOnInit(): void {
    this.tabledata = new CreateData().users;
    // this.scroll = this.el.nativeElement.querySelector('#table');
    // this.subscribeScoll = fromEvent(this.scroll, 'scroll')
    //   .subscribe((event)=> {
    //     console.log('滾動了')
    // })

  }


  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange.pipe(takeUntil(this.destroy$)).subscribe((data: number) => {
      console.log('scroll index to', data);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
