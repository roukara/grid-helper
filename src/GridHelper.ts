type GridType = 'column' | 'row' | 'grid';

export interface GridHelperOptions {
  type: GridType;
  count: number;
  gutter: number;
  margin: number;
  color: string;
}

export class GridHelper {
  private options: GridHelperOptions;
  private isVisible: boolean;
  private container: HTMLDivElement;

  constructor(options: GridHelperOptions) {
    this.options = options;
    this.isVisible = true;

    this.container = document.createElement('div');
    Object.assign(this.container.style, {
      position: 'fixed',
      width: '100%',
      height: '100%',
      display: this.options.type === 'grid' ? 'grid' : 'flex',
      gap: `${this.options.gutter}px`,
      padding: `${this.options.margin}px`,
      pointerEvents: 'none',
      zIndex: '9999'
    });

    if (this.options.type === 'column' || this.options.type === 'row') {
      this.generateFlexGrid();
    } else if (this.options.type === 'grid') {
      this.generateGridLayout();
    }

    document.body.appendChild(this.container);

    window.addEventListener('keydown', e => {
      if (e.key === 'g') this.toggleVisibility();
    });
  }

  private generateFlexGrid(): void {
    this.container.style.flexDirection = this.options.type === 'column' ? 'row' : 'column';
    for (let i = 0; i < this.options.count; i++) {
      const item = document.createElement('div');
      item.style.flex = '1';
      item.style.border = `1px solid ${this.options.color}`;
      this.container.appendChild(item);
    }
  }

  private generateGridLayout(): void {
    const gridSize = Math.sqrt(this.options.count);
    this.container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    this.container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < this.options.count; i++) {
      const item = document.createElement('div');
      item.style.border = `1px solid ${this.options.color}`;
      this.container.appendChild(item);
    }
  }

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    this.container.style.visibility = this.isVisible ? 'visible' : 'hidden';
  }
}
