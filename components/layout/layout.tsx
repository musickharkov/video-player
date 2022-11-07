import React, {ReactNode} from 'react';
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const Layout: React.FC<{ children: ReactNode}> = ({ children }) => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;