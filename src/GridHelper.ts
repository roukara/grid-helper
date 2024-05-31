export interface GridHelperOptions {
  column: number;
  row: number;
  gutter: string;
  margin: string;
  color: string;
}

export class GridHelper {
  options: GridHelperOptions;
  private isVisible: boolean;
  private container: HTMLDivElement;

  constructor(options: GridHelperOptions) {
    this.options = options;
    this.isVisible = false;

    this.container = document.createElement('div');
    Object.assign(this.container.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'grid',
      gap: this.options.gutter,
      padding: this.options.margin,
      visibility: 'hidden',
      pointerEvents: 'none',
      zIndex: '9999'
    });

    this.generateGrid();

    document.body.appendChild(this.container);

    window.addEventListener('keydown', e => {
      if (e.key === 'g') this.toggleVisibility();
    });
  }

  private generateGrid(): void {
    this.container.style.gridTemplateColumns = `repeat(${this.options.column}, 1fr)`;
    this.container.style.gridTemplateRows = `repeat(${this.options.row}, 1fr)`;

    for (let i = 0; i < this.options.column * this.options.row; i++) {
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