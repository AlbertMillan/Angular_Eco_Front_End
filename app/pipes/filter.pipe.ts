import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    // Transform par1 - corresponds to the parameter at the left of the '|' in the *ngFor
    // Transform par2 - corresponds to the paramenter at the right of the ':' at the right hand side of the *ngFor
    transform(items: any[], searchText: string): any[] {
        // Empty strings of either items or searchtext
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();

        // it: current item being analyzed from items.
        return items.filter(it => {
            console.log(it);
            return it['name'].toLowerCase().includes(searchText) /*&& it['age'].toLowerCase().includes(1)*/;
        });
    }
}