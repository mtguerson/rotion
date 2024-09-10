import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI, type ElectronAPI } from '@electron-toolkit/preload'
import { IPC } from '@shared/constants/ipc'
import type { FetchAllDocumentsResponse } from '@shared/types/ipc'

declare global {
  interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

const api = {
  fetchDocuments(): Promise<FetchAllDocumentsResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH_ALL)
  },
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
