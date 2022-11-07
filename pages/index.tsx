import {NextPage} from "next";
import VideoPlayerContainer from "~/components/video-player";
import Sidebar from "~/components/sidebar";
import React, {useState} from "react";
import {INote} from "~/components/video-player/types";
import {convertNotes} from "~/utils/format";

const mockedNotes = [
  { id: 0, title: 'note 1', description: 'Note description 1', timeStart: 20, timeEnd: 50 },
  { id: 1, title: 'note 2', description: 'Note description 2', timeStart: 300, timeEnd: 350 },
  { id: 2, title: 'note 3', description: 'Note description 3', timeStart: 95, timeEnd: 200 },
  { id: 3, title: 'note 4', description: 'Note description 4', timeStart: 80, timeEnd: 160 },
  { id: 4, title: 'note 5', description: 'Note description 5', timeStart: 60, timeEnd: 120 },
];

const mockedSrc = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const IndexPage: NextPage = () => {
  const [src, setSrc] = useState<string>('');
  const [notes, setNotes] = useState<INote[]>([]);

  const onAddNote = (note: Omit<INote, 'id'>) => {
    setNotes([...notes, {id: Math.max(...notes.map(item => item.id)) + 1 || 0, ...note}])
  }

  const onExportNotes = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(notes)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'notes.json';
    link.click();
  };

  const onImportNotes = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setNotes(convertNotes(event.target?.result as string))
    }
    reader.readAsText(file)
  }

  const onVideoUpload = (val: File | string) => {
    if (typeof val === 'string') {
      return setSrc(val);
    }

    setSrc(URL.createObjectURL(val));
  }

  const onMockApply = () => {
    setNotes(mockedNotes)
    setSrc(mockedSrc)
  }

  const onMockReset = () => {
    setNotes([])
    setSrc('')
  }

  return (
    <div className='flex gap-6 pt-4 px-4'>
      <Sidebar
        onAdd={onAddNote}
        onExport={onExportNotes}
        onImport={onImportNotes}
        onVideoUpload={onVideoUpload}
        onMockApply={onMockApply}
        onMockReset={onMockReset}
      />
      <VideoPlayerContainer
        src={src}
        notes={notes.sort((a, b) => a.timeStart > b.timeStart ? 1 : -1)}
      />
    </div>
  )
};

export default IndexPage;
