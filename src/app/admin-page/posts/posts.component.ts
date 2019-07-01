import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { PostsService, Post } from '../../service/posts/posts.service';
import { MenusService, Menu } from '../../service/menus/menus.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from '../menus/edit-menu/edit-menu.component';
import { EditPostComponent } from '../posts/edit-post/edit-post.component';

@Component({
  selector: 'app-menus',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  postForm: FormGroup;

  postDetails: Post = {
    title: '',
    menu_id: '',
    content: ''
  };
  menusList: any;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'title', 'menu_id', 'content', 'actions'];

  constructor(
    private posts: PostsService,
    private menus: MenusService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      menu_id: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.posts.getPosts().subscribe((data: any) => {
      this.dataSource.data = data;
    });

    this.menus.getMenus().subscribe((data: any) => {
      this.menusList = data;
    });
  }

  addPosts() {
    this.posts.addPost(this.postForm.value);
    this.postForm.reset;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  editPost(postId, post: Post) {
    this.posts.updatePost(postId, post);
  }

  deletePost(postId) {
    this.posts.deletePost(postId);
  }

  openDialog(postId): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.deletePost(postId);
      }
    });
  }
  openEditDialog(
    postId: string,
    title: string,
    menu_id: string,
    content: string
  ): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '250px',
      data: { title, menu_id, content, menus: this.menusList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editPost(postId, result);
      }
    });
  }
}
