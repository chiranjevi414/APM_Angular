import {Component} from "@angular/core";
@Component({

    selector:'pm-root',
    template:`
    <div>{{title}}</div>
    `
})
export class AppComponent{

    title = "Angular Application";
}