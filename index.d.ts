declare module 'url-path-generator' {
  interface UrlPathGenerator {
    baseUrl: string;
    pathArray: string[];
    init(baseUrl: string): this;
    addToPath(entity: string, id?: string): this;
    build(): string;
    urlToPath(url: string): this;
    getEntityId(entity: string): string | null;
  }

  const urlPathGenerator: UrlPathGenerator;
  export default urlPathGenerator;
}
