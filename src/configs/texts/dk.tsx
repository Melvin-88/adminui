const dk = {
  select: {
    loading: 'Loading',
    noOptions: 'Ingen muligheder',
    add: (value: string): string => `Tilføj "${value}"`,
  },
  filePicker: {
    fileRejectedNotSupportedFormat: (fileName: string): string => `${fileName} filtype ikke suppoteret`,
    fileRejectedFileSize: (fileName: string, size: string): string => `${fileName} overkrider maksimum størrelsen på ${size} MB`,
    limitExceed: (filesLimit: number): string => `Upload maksimum ${filesLimit} filer`,
    dropzoneText: 'Drag and drop en fil eller klik',
  },
  pageHeader: {
    search: {
      label: 'Søg',
    },
    searchResults: {
      subTitle: 'Søgeresultater',
    },
  },
  actions: {
    proceed: 'Fortsæt',
    cancel: 'Fortryd',
  },
};

export default dk;
