import {INote} from "~/components/video-player/types";

export const deepClone = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
}

const isANote = (obj: any): obj is INote => {
  return 'id' in obj && 'title' in obj && 'description' in obj && 'timeStart' in obj && 'timeEnd' in obj;
}

export const convertNotes = (json: string): INote[] => {
  const data = JSON.parse(json);

  if (Array.isArray(data)) {
    return data.filter(item => isANote(item));
  }

  return [];
}