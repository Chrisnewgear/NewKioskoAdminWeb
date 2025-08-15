const BASE = (import.meta.env.VITE_API_URL as string | undefined) || '';

export async function request<T>(path: string, options: RequestInit = {}): Promise<T>{
  const url = `${BASE.replace(/\/$/, '')}/${path.startsWith('/') ? path.slice(1) : path}`;

  const headers = new Headers(options.headers || {})
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/jason');
  if (!headers.has('Accept')) headers.set('Accept','application/json');

  const response = await fetch(url, {...options, headers});

  const contentType = response.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const data = isJson ? await response.json().catch(() => null) : await response.text().catch(() => '');

  if(!response.ok){
    const message = (isJson && data && (data.messsage || data.error)) || response.statusText || 'Request failed';
    throw new Error(message);
  }

  return data as T;

}