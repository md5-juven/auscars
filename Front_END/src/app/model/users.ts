export type Users = {
    email?: string;
    password?: string;
    phoneNo?: number;
    role?: string;
    address?: [{
        state?: string;
        city?: string;
        street?: string;
    }]
    vehicles?: any;
}