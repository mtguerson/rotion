export interface Document {
  id: string
  title: string
  content: string
}

export interface FetchAllDocumentsResponse {
  data: Document[]
}
