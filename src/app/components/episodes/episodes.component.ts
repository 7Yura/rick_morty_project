import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from '@angular/router';

import {IEpisode, IPagination} from "../../interfaces";
import {map} from "rxjs";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: IEpisode[];
  itemCount: number;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {
    document.body.style.backgroundColor = '#ffffff';
  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.paginator.pageIndex = page - 1;
      this.changeDetectorRef.detectChanges();
    })
    this.paginator.page.subscribe((page) => {
      // console.log(page);
      this.router.navigate([], {queryParams: {page: page.pageIndex + 1}})
    })
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['data'] as IPagination<IEpisode>)
    ).subscribe((data) => {
      // console.log(data);
      this.itemCount = data.info.count;
      this.episodes = data.results;
    })
  }

}
