import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MenusService, Menu } from '../../service/menus/menus.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from '../menus/edit-menu/edit-menu.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  menuDetails: Menu = {
    title: '',
    url: ''
  };
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'title', 'url', 'actions'];

  constructor(private menus: MenusService, public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  addMenus() {
    this.menus.addMenu(this.menuDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  editMenu(menuId, menu: Menu) {
    this.menus.updateMenu(menuId, menu);
  }

  deleteMenu(menuId) {
    this.menus.deleteMenu(menuId);
  }

  openDialog(menuId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.deleteMenu(menuId);
      }
    });
  }
  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: { title, url }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editMenu(menuId, result);
      }
    });
  }
}
