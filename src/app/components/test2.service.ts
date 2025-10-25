import { inject } from "@angular/core";

@Injectable({
  provaideIn: 'root'
})

export class TCService{
  private cService = inject(CService);

  constructor(){}

  getLTTemplate(successCBack: (templates: TTemplate[]) => void, failureCBack: (failure: string) => void) {
    const agent = new connect.Agent();
    const qParams = {
      status: 'ACTIVE'
    };

    if('lTTemplates' in agent && typeof agent.lTTemplates === 'function'){
      agent.
    }
  }
}