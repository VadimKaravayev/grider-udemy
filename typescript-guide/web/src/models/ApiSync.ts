export class ApiSync<T extends { id?: number }> {
  constructor(public rootUrl: string) {}

  async fetch(id: number): Promise<T> {
    const response = await fetch(`${this.rootUrl}/${id}`);
    return await response.json();
  }

  save(data: T): Promise<Response> {
    const { id } = data;
    const currentUrl = this.rootUrl + `${id ? '/' + id : ''}`;
    const options = {
      method: id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetch(currentUrl, options);
  }
}
