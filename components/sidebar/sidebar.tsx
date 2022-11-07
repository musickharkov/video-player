import React from 'react';
import NoteControls from "~/components/sidebar/components/note-controls";
import ImportVideo from "~/components/sidebar/components/import-video";
import ImportNotes from "~/components/sidebar/components/import-notes";
import Mocked from "~/components/sidebar/components/mocked";
import {IProps} from "~/components/sidebar/types";

const Sidebar: React.FC<IProps> = ({ onAdd, onExport, onImport, onVideoUpload, onMockApply }) => {
  return (
    <div className='flex flex-col gap-4 items-center md:w-[16rem]'>
      <Mocked onApply={onMockApply} />
      <ImportVideo onUpload={onVideoUpload} />
      <NoteControls onAdd={onAdd} />
      <ImportNotes onImport={onImport} onExport={onExport} />
    </div>
  );
};

export default Sidebar;