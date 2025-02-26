export interface ConfigurationResponse {
  ok: boolean;
  errors: string[];
  data: {
    survey: {
      config: Record<string, unknown>;
    };
  };
}

