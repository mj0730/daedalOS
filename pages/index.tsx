import type { ReactElement } from 'react';

import Metadata from '@/components/Metadata';
import Desktop from '@/components/System/Desktop/Desktop';
import ProcessProvider from '@/contexts/ProcessManager';
import FileProvider from '@/contexts/FileSystem';
import Directory from '@/components/System/Directory/Directory';
import Windows from '@/components/System/Windows/Windows';
import Taskbar from '@/components/System/Taskbar/Taskbar';
import DirectoryIconsView from '@/components/System/Directory/DirectoryIconsView';

// TODO: Session context to replace `foreground, stackOrder, x, y, selected (icon & window), focus, zIndex, partially height & width`
// - No need to manipulate the process for these things
// - No need for `:focus` to keep track of things

export default function HomePage(): ReactElement {
  return (
    <>
      <Metadata />
      <Desktop>
        <ProcessProvider>
          <FileProvider>
            <Directory path="/desktop" render={DirectoryIconsView} />
            <Windows />
          </FileProvider>
          <Taskbar />
        </ProcessProvider>
      </Desktop>
    </>
  );
}
