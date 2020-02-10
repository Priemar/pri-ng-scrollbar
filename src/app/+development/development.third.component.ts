import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-development-third',
  templateUrl: 'development.third.component.html',
  styleUrls: ['development.third.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DevelopmentThirdComponent implements OnInit {

  constructor() {
    this.treeSource = new MatTreeNestedDataSource<TreeItem>();

    // this dataSource is not required but its rly. helpfull to think reactive
    this.dataSource$ = new BehaviorSubject<TreeItem[]>([]);
    this.dataSource$.subscribe(items => {
      this.treeSource.data = null;
      this.treeSource.data = items;
    });
  }

  /** tree source stuff */
  readonly dataSource$: BehaviorSubject<TreeItem[]>;
  readonly treeSource: MatTreeNestedDataSource<TreeItem>;
  /** tree control */
  readonly treeControl = new NestedTreeControl<TreeItem>(node => node.children );

  readonly hasChild = (_: number, node: TreeItem) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.dataSource$.next([
      this._createTreeItem('Parent 1',
        this._createTreeItem('Child 1.1'),
        this._createTreeItem('Child 1.2',
          this._createTreeItem('Sub child 1.1.1',
            this._createTreeItem('Ultra long text for this sub child to test vertical scrolling')
          )
        ),
        this._createTreeItem('Child 1.3')
      ),
      this._createTreeItem('Parent 2')
    ]);
  }

  /** creates a new tree item */
  private _createTreeItem(name: string, ...children: TreeItem[]): TreeItem {
    return {
      name: name,
      children: children
    };
  }
}

export interface TreeItem {
  name: string;
  children?: TreeItem[];
}
