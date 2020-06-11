import { Component, OnInit } from '@angular/core';
import { ConnetorService } from 'src/app/Services/connetor.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };

  constructor(
    private Connector: ConnetorService,
    private notify: SnotifyService,
    private Notify: SnotifyService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.Notify.info('Wait...', {timeout:5000});
    this.Connector.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.Notify.success(res.data,{timeout:0});
    this.form.email = null;
  }

}
