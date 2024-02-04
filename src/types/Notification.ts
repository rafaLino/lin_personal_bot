

export interface Notification {
     message?: string;
     error: boolean;
}

export const Notification = {
    SUCCESS: ({ error: false }),
    ERROR: (message: string) => ({ message, error: true}) 
}
