import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    public UserName: string;

    constructor(http: Http) {
        http.get('/Home/GetUser').subscribe(result=>{
            this.UserName = result.json();
        });
    }
}
