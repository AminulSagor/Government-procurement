export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginUser = {
    id: string;
    email: string;
    phone: string;
    role: string;
};

export type LoginResponse = {
    success: boolean;
    statusCode: number;
    data: {
        accessToken: string;
        user: LoginUser;
    };
    timestamp: string;
    path: string;
};