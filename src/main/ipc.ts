import { ipcMain } from 'electron'
import { IPC } from '@shared/constants/ipc'
import type { FetchAllDocumentsResponse } from '@shared/types/ipc'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        { id: '1', title: 'Ignite', content: '' },
        { id: '2', title: 'Discover', content: '' },
        { id: '3', title: 'Rocketseat', content: '' },
        { id: '3', title: 'Docs', content: '' },
      ],
    }
  },
)
