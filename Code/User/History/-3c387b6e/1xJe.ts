import apiClient from "./api-client";
interface Entity {
    id: number;
}
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

    deleteEntity<T extends Entity>(entity: T) {
        return apiClient.delete(`${this.endpoint}/${entity.id}`);
    }

    updateEntity<T extends Entity>(entity: T) {
        return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
    }

    addEntity<T>(newEntity: T) {
        return apiClient.post(this.endpoint, newEntity);
    }
}
export default HttpService;
