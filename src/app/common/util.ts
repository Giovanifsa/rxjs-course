import { Observable } from "rxjs";

export function createHTTPObservable(url: string) {
    return new Observable(observer => {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(json => {
          observer.next(json);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
}
