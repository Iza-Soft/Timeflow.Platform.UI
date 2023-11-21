import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { ISelectModel } from '../../models/select/select-model';

@Component({
  selector: 'tf-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() dataSource: ISelectModel[];
  @Input() readonly: boolean;
  @Input() placeholder: string;
  @Input() value: { id: number; parentId?: number };
  @Output() onSelectItem = new EventEmitter<ISelectModel[]>();

  public title?: string;
  public _dataSource: ISelectModel[];
  public notSimpleMenu: boolean;
  constructor() {}

  public ngOnInit(): void {
    this._dataSource = this.CopyDataSource();

    this.notSimpleMenu = this._dataSource.some(
      (item) => item.Collection?.length !== 0
    );

    if (this.value) {
      this.onSelectOption(this.value.id, this.value.parentId);
    }
  }

  public onSelectOption(
    id: number,
    parentId?: number,
    dropdown?: BsDropdownDirective
  ) {
    this._dataSource = this.CopyDataSource();
    let selectedItem: ISelectModel[] | undefined = undefined;
    if (parentId) {
      this.title = this._dataSource
        .find((item) => item.Id === parentId)
        ?.Collection?.find((item) => item.Id === id)?.Title;

      this._dataSource.map((parent) => {
        let findItem = parent.Collection?.find(
          (item) => item.Id === id && item.ParentId === parentId
        );
        if (findItem) {
          selectedItem = [
            {
              Id: parent.Id,
              Title: parent.Title,
              Description: parent.Description,
              Collection: [
                {
                  Id: findItem.Id,
                  ParentId: findItem.ParentId,
                  Title: findItem.Title,
                  Description: findItem.Description,
                },
              ],
            },
          ];
        }
      });
    } else {
      let findItem = this._dataSource.find((item) => item.Id === id);
      this.title = findItem?.Title;
      selectedItem = [
        {
          Id: findItem!.Id,
          Title: findItem!.Title,
        },
      ];
    }
    if (dropdown?.isOpen) {
      dropdown?.hide();
    }
    this.onSelectItem.emit(selectedItem);
  }

  public onModelChange(input: any, dropdown: BsDropdownDirective) {
    this._dataSource = this.CopyDataSource();

    this.title = input;

    this._dataSource = this._dataSource.filter(
      (parent) =>
        (parent.Collection = parent.Collection?.filter((child) =>
          child.Title.toLocaleLowerCase().includes(
            this.title!.toLocaleLowerCase()
          )
        ))
    );

    if (
      this._dataSource.every(
        (item) => item.Collection && item.Collection?.length === 0
      )
    ) {
      this._dataSource = this._dataSource.filter((parent) =>
        parent.Title.toLocaleLowerCase().includes(
          this.title!.toLocaleLowerCase()
        )
      );
    }
    dropdown.show();
  }

  public onShowMenuItems(dropdown: BsDropdownDirective) {
    this._dataSource = this.CopyDataSource();
    if (dropdown.isOpen) {
      dropdown.autoClose = true;
    } else {
      dropdown.show();
      dropdown.autoClose = false;
    }
  }

  public onHideMenuItems(dropdown: BsDropdownDirective) {
    if (dropdown.isOpen) {
      dropdown.autoClose = true;
    }
  }

  private CopyDataSource(): ISelectModel[] {
    let _dataSource: ISelectModel[] = [];
    this.dataSource.forEach((parent) => {
      let collection: ISelectModel[] = [];
      parent.Collection?.forEach((child) => {
        collection.push({
          Id: child.Id,
          ParentId: child.ParentId,
          Title: child.Title,
          Description: child.Description,
        });
      });

      _dataSource.push({
        Id: parent.Id,
        Title: parent.Title,
        Description: parent.Description,
        Collection: collection,
      });
    });

    return _dataSource;
  }
}
