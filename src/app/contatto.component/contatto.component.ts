import{Component}from'@angular/core';
import{Contatto}from './contatto.model.ts'

@Component({
selector: 'app-contatto',
templateUrl:'./contatto.component.html',
styleUrls:['./contatto.component.css']

})

export class ContattoComponent{
        contatto: Contatto = new Contatto('Alberto','Di Benedetto','alberto.dibenedetto@marconirovereto.it','3400050881',4);                                                            
}