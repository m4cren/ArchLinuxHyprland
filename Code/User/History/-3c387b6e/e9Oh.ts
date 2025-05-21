import apiClient from "./api-client";

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAllEntity<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
            signal: controller.signal,
        });

        return { request, cancel: () => controller.abort() };
    }

    deleteEntity<T>(entityId: T) {
        return apiClient.delete(`${this.endpoint}/${entityId}`);
    }

    updateEntity<T>(entityId: T, updatedEntity: T) {
        return apiClient.patch(`${this.endpoint}/${entityId}`, updatedEntity);
    }

    addEntity<T>(newEntity: T) {
        return apiClient.post(this.endpoint, newEntity);
    }
}
export default HttpService;
