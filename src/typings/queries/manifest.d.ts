export interface ManifestQueryData {
  manifest: {
    display: string
    start_url: string
    favicon: {
      localFile: {
        relativePath: string
      }
    }
  }
  metadata: {
    name: string
    short_name: string
    description: string
  }
}
