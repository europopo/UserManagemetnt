import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, ViewChild  } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { CreateData } from "../tabledata";
import { NzTableComponent } from 'ng-zorro-antd/table';
import { takeUntil } from 'rxjs/operators';
import { TableService } from "../../service/table.service";
import { User } from "../../class/user";
@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})
export class ShowtableComponent implements OnInit, AfterViewInit, OnDestroy {
  tabledata: any;
  scroll: any;
  subscribeScoll: any;
  constructor(
    public tableService: TableService,
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

  async ngOnInit(): Promise<void> {
    //this.tabledata = new CreateData().users;
    this.tabledata = await this.tableService.createTable();
    // this.scroll = this.el.nativeElement.querySelector('#table');
    // this.subscribeScoll = fromEvent(this.scroll, 'scroll')
    //   .subscribe((event)=> {
    //     console.log('滾動了')
    // })



  }

  clickButtonDelete(user) {

  }

  clickbuttonAdd(name: string) {
    if (name.trim()) { // 數組變更檢測
      this.tabledata = [
        ...this.tabledata,
        {
          id: ++this.tabledata.length,
          name: name.trim(),
        }
      ];
      // this.tabledata.push({
      //   id: this.tabledata.length,
      //   name: name,
      // });
      alert(this.tableService.users.length);
    }
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
