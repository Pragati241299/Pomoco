import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/Services/common-service';
import { SearchFilterComponent } from 'src/app/shared/search-filter/search-filter.component';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  iconChange:boolean=false;
  constructor(public dialog: MatDialog,
    public commonService: CommonService  ) { }

    isMobile= false;
  ngOnInit(): void {
    this.isMobile= this.commonService.checkMobileScreenBrowser();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SearchFilterComponent, {
      disableClose: true,
      panelClass: 'filter_wrapper'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
  }

}
