import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ParameterSubjectService<T> {
    private _parameter = new Subject<T>();
    private _subscription: Subscription | undefined;

    public sendParameter(value: T): void {
        this._parameter.next(value);
    }

    public getParameter(): Observable<T> {
        if (!this._subscription)
            this._subscription = this._parameter.asObservable().subscribe();

        return this._parameter.asObservable();
    }

    public unsubscribe(): void {
        if (this._subscription) this._subscription.unsubscribe();
    }

    constructor() {}
}
