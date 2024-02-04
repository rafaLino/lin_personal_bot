
export interface TEnvironmentVariables {
    TOKEN: string;
    USER_NAME: string;
}


export const EnvironmentVariables: TEnvironmentVariables = {
    TOKEN: process.env.TOKEN as string,
    USER_NAME: process.env.USER_NAME as string
} 