import { Component, effect, ElementRef, inject, ViewChild } from "@angular/core";

@Component({
  selector: '',
  imports: [],
  templateUrl: '',
  styleUrl: ''
})

export class CActionComponent {
  private cService = inject(CService);
  @ViewChild('aaa') aaa: ElementRef;
  @ViewChild('bbb') bbb: ElementRef;
  @ViewChild('ccc') ccc: ElementRef;
  aaaposition = { top: 0, left: 0 };
  bbbposition = { top: 0, left: 0 };
  cccposition = { top: 0, left: 0 };
  activeComponent: string | null = null;
  Acwstatus: boolean;
  initial: boolean;

  constructor() {
    effect(
      () => ((isAccept: boolean) => {
        this.Acwstatus = isAccept;
      })(this.cService.Acw())
    );
    effect(
      () => ((isinit: boolean) => {
        this.initial = isinit;
      })(this.cService.cinital())
    );
  }

  showComponent(component: 'aaa' | 'bbb' | 'ccc'): void {
    if (!this.isButtonactive(component)) { return; }
    this.activeComponent = component;
    if (component === 'aaa') {
      this.aaaposition = this.getposition(this.aaa)
    }
    if (component === 'bbb') {
      this.bbbposition = this.getposition(this.bbb)
    }
    if (component === 'ccc') {
      this.cccposition = this.getposition(this.ccc)
    }
  }

  close():void{
    this.activeComponent = null;
  }

  getposition(target: ElementRef){
    const rect = target.nativeElement.getBoundingClientRect();
    const top = (target === this.aaa) ? rect.top -15 : rect.top -25;
    return{
      top: top,
      left: rect.right - 60
    };
  }

  isButtonactive(component: 'aaa' | 'bbb' | 'ccc'): boolean{
    if(!this.initial){return false;}
    if(component === 'bbb'){
      const contacType = this.cService.getCon()?.getType()
      return this.Acwstatus && contacType === 'zzz'
    } else if(component === 'aaa'){
      return !this.Acwstatus
    }
    return true;

  }

}