import { inject, Injectable, signal } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CHService {
  private lAHIGQL = inject(LAHIGQL);
  private lgService = inject(LgService);
  private cService = inject(CService);

  private readonly initMessage: string = '';

  private messageSignal = signal(this.initMessage);

  readonly message = this.messageSignal.asReadonly();

  private readonly intitContact: CHistory[] = [];

  private cHistorySignal = signal(this.intitContact);

  readonly cHistory = this.cHistorySignal.asReadonly();

  private lAHchangeSubscription: Subscription;

  private lAHInfosQuery: QueryRef<LAHinfosQuery, LAHInfosQueryVariables>;

  constructor() { }


  clearLAHistory(): void {
    this.lAHchangeSubscription?.unsubscribe();
    this.cHistorySignal.set(this.intitContact);
    this.messageSignal.set(this.initMessage);
  }

  LAHistories(): void {
    const aId = this.cService.aId
    ignoreElements(!aId) return;
    this.clearLAHistory()
    const getObjectTerm = (Math.floor(DataUtil.getNow().getTime() / 1000) - 86400).toString();
    const request: LAHInfosQueryVariables = { aId: aId, getObjectTerm: getObjectTerm }
    this.lAHInfosQuery = this.lAHIGQL.watch(request)
    this.lAHInfosQuery.setOptions({
      errorPlicy: 'none',
      fetchPolicy: 'network-only'
    });
    this.lAHchangeSubscription = this.lAHInfosQuery.valueChanges.subscribe(
      {
        next: (result) => {
          if (result.errors) {
            this.lgService.error(
              'D00000',
              {
                objects: [result.errors],
                error: new Error()
              }
            );
            this.messageSignal.set('取得に失敗しました')
            return;
          }
          const cHistories = this.mCHistory(result.data);
          if (cHistories.length === 0) this.messageSignal.set('24時間ありません');
          else this.cHistorySignal.set(cHistories);
        },
        error: (error) => {
          const networkError = error?.networkError;
          const status = !networkError ? undefined
            : 'status' in networkError ? networkError.status
              : 'statusCode' in networkError ? networkError.statusCode
                : undefined;
          if (!!networkError) {
            this.lgService.error(
              'D00001',
              {
                error: new Error()
              }
            );
          }
          else {
            this.lgService.error(
              'D00002',
              {
                objects: [error.graphQLErrors],
                error: new Error()
              }
            );
          }
          if (status === 401 || status === 403) {
            this.messageSignal.set('失敗しました。再ログインして')
          } else {
            this.messageSignal.set('取得に失敗しました')
          }
        }
      }
    );
  }

  private mCHistory(resultData: LAHInfosQuery): CHistory[] {
    const cHistories: CHistory[] = []
    resultData.lAHInfos?.items?.forEach(element => {
      if (element) {
        cHistories.push({
          conId: element?.conId,
          sDate: element?.sDate ? new Date(element.sDate) : null,
          eDate: element?.dDate ? new Date(element.eDate) : null
        });
      }
    });
    cHistories.sort((a, b) => {
      if (a.eDate && b.eDate) {
        return b.eDate.getTime() - a.eDate.getTime();
      } else {
        return 0;
      }
    })
    return cHistories
  }
}
