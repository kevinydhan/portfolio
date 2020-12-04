export default `
  query getSiteManifest {
    manifest: contentfulManifest {
      display
      start_url: startUrl
      favicon {
        localFile {
          relativePath
        }
      }
    }
    metadata: contentfulMetadata {
      name: title
      short_name: title
      description
    }
  }
`
