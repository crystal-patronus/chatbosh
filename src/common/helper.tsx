import axios from 'axios';

const BASE_URL = "https://api.stru.ai";

interface ApiResponse {
    data: any;
}

interface ApiError {
    response: {
        data: any;
    };
}

export async function submitStructuralReport(email: string): Promise<boolean> {
    const url = `${BASE_URL}/v1/structural-report/`;
    const payload = { email };

    try {
        const response: ApiResponse = await axios.post(url, payload);
        console.log('Structural Report Response:', response.data);
        return true;
    } catch (error: any) {
        const err = error as ApiError;
        console.error('Error submitting structural report:', err.response.data);
        return false;
    }
}

export async function submitProgressReport(email: string): Promise<boolean> {
    const url = `${BASE_URL}/v1/progress-report/`;
    const payload = { email };

    try {
        const response: ApiResponse = await axios.post(url, payload);
        console.log('Progress Report Response:', response.data);
        return true;
    } catch (error: any) {
        const err = error as ApiError;
        console.error('Error submitting progress report:', err.response.data);
        return false;
    }
}

export async function addToWaitlist(email: string): Promise<boolean> {
    const url = `${BASE_URL}/v1/waitlist`;
    const payload = { email };

    try {
        const response: ApiResponse = await axios.post(url, payload);
        console.log('Add to Waitlist Response:', response.data);
        return true;
    } catch (error: any) {
        const err = error as ApiError;
        console.error('Error adding to waitlist:', err.response.data);
        return false;
    }
}
