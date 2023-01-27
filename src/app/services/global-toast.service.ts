import { Injectable } from '@angular/core';

export interface ToastInfo {
    header: string;
    body: string;
}

@Injectable({
    providedIn: 'root',
})
export class GlobalToastService {
    toasts: ToastInfo[] = [];

    show(info: ToastInfo) {
        this.toasts.push(info);
    }

    remove(toast: ToastInfo) {
        this.toasts = this.toasts.filter((t) => t != toast);
    }
}
