import {INote} from "~/components/video-player/types";

export interface IProps {
  onAdd: (note: Omit<INote, 'id'>) => void;
  onExport: () => void;
  onImport: (file: File) => void;
  onVideoUpload: (file: File | string) => void;
  onMockApply: () => void;
}
