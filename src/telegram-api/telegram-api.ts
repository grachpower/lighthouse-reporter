import { Observable, throwError } from 'rxjs';
import { Http } from '../request/request';
import {catchError} from "rxjs/operators";

export class TelegaApi {
    private readonly baseApi: string = `https://api.telegram.org:443/bot${this.botToken}/`;

        constructor(
        private chatId: string,
        private botToken: string,
    ) {}

    public sendMessageToChat(message: string): Observable<any> {
        return Http.get(`${this.baseApi}sendMessage`, {
            params: {
                chat_id: this.chatId,
                text: message,
            }
        }).pipe(
            catchError((err) => {
                console.error('Cannot send message');

                return throwError(err);
            }),
        );
    }

    public sendFileToChat(file): Observable<void> {
            return Http.post(`${this.baseApi}sendDocument`, file, {
                chat_id: this.chatId,
            })
    }

    public authorize(): Observable<void> {
        return Http.get(`${this.baseApi}getMe`);
    }

    public getUpdates(): Observable<any> {
        return Http.get(`${this.baseApi}getUpdates?offset=0`);
    }
}
