export default class ReturnTypesController {
  async weirdStringEntries() {
    // weird string[] expanding
    const sourceSelectorImplicit = { files: [] as string[] }
    const sourceSelectorExplicit: { files: string[] } = { files: [] }
    // correct type expanding
    const entriesArray: Array<{ relativePath: string }> = []
    const entriesArrayCompact: { relativePath: string }[] = []

    return {
      sourceSelectorImplicit,
      sourceSelectorExplicit,
      entriesArray,
      entriesArrayCompact,
    }
  }
}
