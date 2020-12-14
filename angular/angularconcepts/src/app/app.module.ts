import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { Sample1Component } from './sample1/sample1.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { SampleChild1Component } from './sample-child1/sample-child1.component';
import { SampleChild2Component } from './sample-child2/sample-child2.component';
import { Sample1Child1Component } from './sample1-child1/sample1-child1.component';
import { Sample1Child2Component } from './sample1-child2/sample1-child2.component';
import { ModifyElDirective } from './modify-el.directive';
import { TemplateDrivenformComponent } from './template-drivenform/template-drivenform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactivemodelComponent } from './reactivemodel/reactivemodel.component';
import { StoredataService } from './storedata.service';

import { HttpClientModule  } from '@angular/common/http';
import { ServiceModule } from './services/service/service.module';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample1Component,
    CustomersComponent,
    CustomerDetailComponent,
    SampleChild1Component,
    SampleChild2Component,
    Sample1Child1Component,
    Sample1Child2Component,
    ModifyElDirective,
    TemplateDrivenformComponent,
    ReactivemodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceModule
  ],
  providers: [StoredataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
