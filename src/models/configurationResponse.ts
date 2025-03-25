export interface ConfigurationResponse {
  ok: boolean
  errors: string[]
  data: {
    config: Record<string, unknown>
  }
}
