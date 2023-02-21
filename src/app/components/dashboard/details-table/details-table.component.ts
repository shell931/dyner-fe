import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
})
export class DetailsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() items: any = [];
  public dataSource = new MatTableDataSource<any>(this.items);
  public displayedColumns: string[] = [
    'created_at',
    'num_autoriza_cadena',
    'total',
    'total_descuento',
    'total_abono',
    'action',
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.items);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 1000);
  }
}
