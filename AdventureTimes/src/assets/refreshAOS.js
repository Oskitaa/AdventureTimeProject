import { Observable } from 'rxjs';

export let windowResizeObservable = new Observable((observer) => {
    window.addEventListener('resize', () => {
        observer.next({width: window.innerWidth});
    })
});