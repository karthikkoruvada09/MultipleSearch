import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args): any {
    console.log(args);
    let result = [];
    if(args==null || args == undefined || args==""){
      return value;
    }else{
      console.log(value)
      result = value.filter(doc => {
        let dam1=doc.name.includes(args);
        let dam2=doc.age.toString().includes(args);
        let dam3 =doc.city.includes(args);
        console.log(dam1,dam2,dam3);

       if(dam1 || dam2 || dam3){
        return doc;
       }
      });
      return result;
    }
  }
}
