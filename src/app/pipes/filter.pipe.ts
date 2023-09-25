import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allDonor:any[],searchKey:string,propName:string): any[] {

    const result:any[]=[]

    if(!allDonor || searchKey=='' || propName==''){
      return allDonor;
    }

    allDonor.forEach((donor:any)=>{
      if(donor[propName].trim().toLowerCase().includes(searchKey.trim().toLocaleLowerCase())){
          result.push(donor)
      }
    })

    return result;
  }

}
